// export {default} from 'next-auth/middleware'

// export const config = {matcher: ['/dashboard/:path*']}

import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  // If the request is not for the root page, redirect to the root page
  if (req.nextUrl.pathname !== 'https://paywind.io/') {
    return NextResponse.redirect('https://paywind.io/')
  }

  // If the request is for the root page, continue as normal
  return NextResponse.next()
}