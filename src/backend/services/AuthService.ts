import { SignupBody } from "@/shared/types";
import { NextResponse } from "next/server";
import prisma from "../lib/prisma";

export default class AuthService {
    public static async createUser(body: SignupBody): Promise<NextResponse> {
        try {
            const newUser = await prisma.user.create({
                data: body,
            });
            return NextResponse.json(
                {
                    message: "Successfully created account!",
                    data: { userId: newUser.id, isAdmin: newUser.isAdmin },
                },
                { status: 201 }
            );
        } catch (error) {
            return NextResponse.json(
                { message: "There was an error creating the account!" },
                { status: 400 }
            );
        }
    }
}
