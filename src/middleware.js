import { NextResponse } from "next/server"

export function middleware(req) {
  // Get the token from cookies or headers (assuming authentication info is stored there)
  const token = true

  const { pathname } = req.nextUrl

  // Define routes that require authentication
  const privateRoutes = ["/create-event", "/events"]

  // Check if the request is for a protected route
  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl))
  }

  // Continue with the request if authorized
  return NextResponse.next()
}
export const config = {
  matcher: ["/create-event/:path*", "/events/:path*"], // Protect these routes
}
