import prisma from "../lib/prisma";

export default class TaskService {
    public static async fetchTasks(
        userId: string | null,
        title: string | null
    ) {
        if (!userId && !title) {
            const allTasks = await prisma.task.findMany({
                orderBy: { title: "desc" },
            });
            return allTasks;
        }

        const allTasksByUser = await prisma.task.findMany({
            where: {
                userId: userId ? parseInt(userId) : undefined,
                title: title || undefined,
            },
            orderBy: {
                title: "desc",
            },
        });
        return allTasksByUser;
    }
}
