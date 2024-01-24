import AuthService from "@/backend/services/AuthService";
import { CreateUserBody } from "@/shared/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body: CreateUserBody = await request.json();
    const isSenderOfRequestAdmin = AuthService.checkRequestSenderIsAdmin(
        body.userIdOfCreator
    );
    if (!isSenderOfRequestAdmin) {
        return NextResponse.json(
            { message: "Creator has to be an admin" },
            { status: 403 }
        );
    }

    return AuthService.createUser(body.newUser);
}
