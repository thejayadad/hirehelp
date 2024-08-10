'use server'
import prisma from "../prisma"

export async function createUser(userEmail, userName){
    try {
        let existingUser = await prisma.user.findUnique({
            where: {
                email: userEmail,
            },
        })
    
        // If the user doesn't exist, create a new user
        if (!existingUser) {
            existingUser = await prisma.user.create({
                data: {
                    email: userEmail,
                    name: userName,
                },
            })
        }
        return existingUser; // Return the existing or newly created user
    } catch (error) {
        console.error("Error creating or finding user:", error);
        throw new Error("Failed to create or find user.");
    }
}
