import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import AppleProvider from "next-auth/providers/apple";
import { compare } from 'bcrypt';
import { sql } from '@vercel/postgres'
import { NextAuthOptions } from "next-auth";

export const authOptions : NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID!,
      clientSecret: process.env.APPLE_SECRET!
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials, req) {
        const response = await sql`SELECT * FROM users WHERE email=${credentials?.email}`;
        const user = response.rows[0];
        const passwordCorrect = await compare(
          credentials?.password || '',
          user.password
        );
        
        console.log({passwordCorrect})

        if(passwordCorrect) {
          return {
            id: user.id,
            email: user.email
          }
        }
        return null;
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user && token) {
        const response = await sql`SELECT first_name, family_name, email, phone FROM users WHERE id=${token.sub}`;
        const user = response.rows[0];

        if (user) {
          session.user.name = `${user.first_name} ${user.family_name}`;
          session.user.image = `https://ui-avatars.com/api/?name=${user.first_name}+${user.family_name}`;
          session.user.email = user.email; 
        }
      }
      return session;
    },
},
}


