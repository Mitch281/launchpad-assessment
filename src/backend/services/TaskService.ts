import prisma from "../lib/prisma";

export default class TaskService {
    public static async fetchTasks(userId: string | null) {
        if (!userId) {
            const allTasks = await prisma.task.findMany({
                orderBy: { title: "desc" },
            });
            return allTasks;
        }

        const allTasksByUser = await prisma.task.findMany({
            where: { userId: parseInt(userId) },
            orderBy: {
                title: "desc",
            },
        });
        return allTasksByUser;
    }
}
