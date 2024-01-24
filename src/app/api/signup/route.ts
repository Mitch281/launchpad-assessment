import { SignupBody } from "@/shared/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body: SignupBody = await request.json();
    return NextResponse.json({}, { status: 200 });
}
