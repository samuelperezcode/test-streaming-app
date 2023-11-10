import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/login'
  },
  callbacks: {
    authorized ({ auth, request: { nextUrl } }) {
      const isLoggedIn = !((auth?.user) == null)
      const isOnAccount = nextUrl.pathname.startsWith('/account')
      if (isOnAccount) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/account', nextUrl))
      }
      return true
    }
  }
} satisfies NextAuthConfig
