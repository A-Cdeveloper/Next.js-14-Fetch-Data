// export const POST = () => {};
// export const DELETE = () => {};

import { NextResponse } from "next/server";

export const GET = (NextRequest) => {
  console.log(NextRequest);
  //return NextResponse.json({ message: "hello" });
  return new NextResponse("Hello");
};
