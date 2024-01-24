import prisma from "@/backend/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    // Could add permission checking here but not enough time.
    const allUsers = await prisma.user.findMany();
    return NextResponse.json(
        { message: "Succesfully retreived all users!", data: allUsers },
        { status: 200 }
    );
}
