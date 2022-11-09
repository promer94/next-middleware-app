import { NextResponse } from "next/server";

/**
 * @param {import('next/server').NextRequest} request
 */
export async function middleware() {
	const res = NextResponse.next();
	res.headers.set("Set-Cookie", "foo=bar; Path=/; HttpOnly");
	return res;
}
