import prisma from "@/backend/lib/prisma";
import AuthService from "@/backend/services/AuthService";
import { CreateTaskBody } from "@/shared/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body: CreateTaskBody = await request.json();
    const isSenderOfRequestAdmin = AuthService.checkRequestSenderIsAdmin(
        body.userIdOfCreator
    );
    if (!isSenderOfRequestAdmin) {
        return NextResponse.json(
            { message: "Creator has to be an admin" },
            { status: 403 }
        );
    }

    try {
        const task = await prisma.task.create({ data: body.newTask });
        return NextResponse.json(
            { message: "Success!", data: task },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Error creating task" },
            { status: 400 }
        );
    }
}
