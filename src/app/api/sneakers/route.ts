import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const sql = "SELECT * FROM sneaker ";
  const [sneakers] = await db.query(sql);
  return NextResponse.json({ sneakers });
}

export const POST = async () => {
  return new NextResponse("not authorized");
};
