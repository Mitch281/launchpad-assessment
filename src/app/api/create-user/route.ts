import prisma from "@/backend/lib/prisma";
import AuthService from "@/backend/services/AuthService";
import { CreateUserBody } from "@/shared/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body: CreateUserBody = await request.json();
    const creator = await prisma.user.findFirst({
        where: { id: parseInt(body.userIdOfCreator) },
    });
    if (!creator) {
        return NextResponse.json(
            { message: "Invalid request" },
            { status: 400 }
        );
    }

    if (!creator.isAdmin) {
        return NextResponse.json(
            { message: "Creator has to be an admin" },
            { status: 403 }
        );
    }

    return AuthService.createUser(body.newUser);
}
