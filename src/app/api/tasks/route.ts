import prisma from "@/backend/lib/prisma";
import { getQSParamFromURL } from "@/backend/utils/getQueryParamFromUrl";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    // Could add permission checking here but not enough time.
    const userId = getQSParamFromURL("userId", request.url);
    if (!userId) {
        return NextResponse.json(
            { message: "Please supply user id" },
            { status: 400 }
        );
    }

    try {
        const allTasks = await prisma.task.findMany({
            where: { userId: parseInt(userId) },
        });
        return NextResponse.json(
            { message: "Successfully retreived all tasks", data: allTasks },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching tasks." },
            { status: 400 }
        );
    }
}
