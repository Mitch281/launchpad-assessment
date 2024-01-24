import prisma from "@/backend/lib/prisma";
import { SignupBody } from "@/shared/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body: SignupBody = await request.json();
    if (body.isAdmin) {
        return NextResponse.json(
            { message: "Cannot create an admin account!" },
            { status: 403 }
        );
    }
    try {
        const newUser = await prisma.user.create({
            data: body,
        });
        return NextResponse.json(
            {
                message: "Successfully created account!",
                data: { userId: newUser.id },
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "There was an error creating the account!" },
            { status: 400 }
        );
    }
}
