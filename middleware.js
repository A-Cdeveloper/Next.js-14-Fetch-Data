import { NextResponse } from "next/server";

export const middleware = (NextRequest) => {
  console.log(NextRequest);
  return NextResponse.next();
};

export const config = {
  matcher: "/news/:path*",
};
