import prisma from "@/backend/lib/prisma";
import { CompleteTaskBody } from "@/shared/types";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    const body: CompleteTaskBody = await request.json();
    const task = await prisma.task.findFirst({
        where: { id: parseInt(body.taskId) },
    });
    if (!task) {
        return NextResponse.json(
            { message: "Task not found" },
            { status: 404 }
        );
    }

    if (task.userId.toString() !== body.senderUserId) {
        return NextResponse.json(
            { message: "You do not have permission to complete this task." },
            { status: 403 }
        );
    }

    try {
        await prisma.task.update({
            where: {
                id: parseInt(body.taskId),
            },
            data: {
                isComplete: true,
            },
        });
        return NextResponse.json(
            { message: "Successfully completed task!" },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Error completing task!" },
            { status: 400 }
        );
    }
}
