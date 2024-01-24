import AuthService from "@/backend/services/AuthService";
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
    return AuthService.createUser(body);
}
