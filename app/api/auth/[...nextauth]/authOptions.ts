import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
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
    CredentialsProvider({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials, req) {
        // console.log({ credentials })

        const response = await sql`
            SELECT * FROM users WHERE email=${credentials?.email}`;
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
        // Fetch additional user details (first_name, family_name) from the database using the user's ID (token.sub)
        const response = await sql`
          SELECT first_name, family_name, email FROM users WHERE id=${token.sub}`;
        const user = response.rows[0];
  
        if (user) {
          // Set the user's name and email in the session object
          session.user.name = `${user.first_name} ${user.family_name}`;
          session.user.image = `https://ui-avatars.com/api/?name=${user.first_name}+${user.family_name}`;
          session.user.email = user.email;  // This line sets the email in the session
        }
      }
      return session;
    },
},
}
