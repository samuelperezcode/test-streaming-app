import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
/* import FacebookProvider from 'next-auth/providers/facebook' */
import GoogleProvider from 'next-auth/providers/google'

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    /* FacebookProvider({
      clientId: process.env?.FACEBOOK_ID ?? '',
      clientSecret: process.env?.FACEBOOK_SECRET ?? ''
    }), */
    GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET })
  ]
})
