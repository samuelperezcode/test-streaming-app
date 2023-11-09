import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env?.FACEBOOK_ID ?? '',
      clientSecret: process.env?.FACEBOOK_SECRET ?? ''
    }),
    GoogleProvider({
      clientId: process.env?.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env?.GOOGLE_CLIENT_SECRET ?? ''
    })
  ],
  secret: process.env.JWT_SECRET
})

export { handler as GET, handler as POST }
