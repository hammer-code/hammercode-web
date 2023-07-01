import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest, response: NextApiResponse) {
  const pong = {
    message: "pong",
    timestamp: new Date().getTime(),
  }

  return NextResponse.json(pong, {
    headers: {
      "Cache-Control": "s-maxage=1, stale-while-revalidate",
    },
  })
}
