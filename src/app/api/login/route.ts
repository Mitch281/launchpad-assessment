import prisma from "@/backend/lib/prisma";
import { LoginBody } from "@/shared/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body: LoginBody = await request.json();

    // These shouid be together in one query, but not sure how to.
    const usernameCheck = await prisma.user.findFirst({
        where: { username: body.usernameOrEmail },
    });
    const emailCheck = await prisma.user.findFirst({
        where: { email: body.usernameOrEmail },
    });

    if (!usernameCheck && !emailCheck) {
        return NextResponse.json(
            { message: "User not found" },
            { status: 404 }
        );
    }
    const user = usernameCheck || emailCheck;
    return NextResponse.json(
        { message: "Successfully logged in", data: { userId: user.id } },
        { status: 200 }
    );
}
