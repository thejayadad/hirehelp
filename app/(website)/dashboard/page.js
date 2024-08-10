import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import prisma from '@/lib/prisma'

const DashboardPage = async () => {
    const user = await currentUser()

    const userEmail = user.emailAddresses[0].emailAddress
    const userName = user.firstName || "Unknown" 

    // Check if the user already exists in the database
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

    console.log("Existing User: ", existingUser)

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {existingUser.name}!</p>
            <p>Your email: {existingUser.email}</p>
        </div>
    )
}

export default DashboardPage
