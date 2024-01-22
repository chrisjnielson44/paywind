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
    
        // Check if user exists
        if (!user) {
          throw new Error('Account does not exist');
        }
    
        const passwordCorrect = await compare(
          credentials?.password || '',
          user.password
        );
        
        // Check if password is correct
        if (!passwordCorrect) {
          throw new Error('Incorrect password');
        }
    
        // User authenticated
        return {
          id: user.id,
          email: user.email
        };
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user && token) {
        const response = await sql`SELECT first_name, family_name, email, phone FROM users WHERE id=${token.sub}`;
        const user = response.rows[0];

        if (user) {
          const firstLetterFirstName = user.first_name.charAt(0);
          const firstLetterLastName = user.family_name.charAt(0);

          session.user.name = `${user.first_name} ${user.family_name}`;
          session.user.email = user.email;
          session.user.phonenumber = user.phone;
          session.user.userid = token.sub;
          session.user.first_name = user.first_name;
          session.user.last_name = user.family_name;
          session.user.first_letter_first_name = firstLetterFirstName;
          session.user.first_letter_last_name = firstLetterLastName;

        }
      }
      return session;
    },
},
}


