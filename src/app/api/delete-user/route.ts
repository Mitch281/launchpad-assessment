import prisma from "@/backend/lib/prisma";
import AuthService from "@/backend/services/AuthService";
import { DeleteUserBody } from "@/shared/types";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    const body: DeleteUserBody = await request.json();
    const isSenderOfRequestAdmin = AuthService.checkRequestSenderIsAdmin(
        body.deleterUserId
    );
    if (!isSenderOfRequestAdmin) {
        return NextResponse.json(
            { message: "Creator has to be an admin" },
            { status: 403 }
        );
    }

    if (body.deleterUserId === body.userIdToDelete) {
        return NextResponse.json(
            { message: "Cannot delete yourself!" },
            { status: 400 }
        );
    }

    try {
        await prisma.user.delete({
            where: { id: parseInt(body.userIdToDelete) },
        });
        return NextResponse.json(
            { message: "Succesfully deleted user!" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Error deleting user" },
            { status: 400 }
        );
    }
}
