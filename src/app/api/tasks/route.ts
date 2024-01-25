import TaskService from "@/backend/services/TaskService";
import { getQSParamFromURL } from "@/backend/utils/getQueryParamFromUrl";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    // Could add permission checking here but not enough time. Plus, it is awkward since we cannot access
    // auth details in react server component, where this data is fetched.
    const userId = getQSParamFromURL("userId", request.url);
    try {
        const allTasks = await TaskService.fetchTasks(userId);
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
