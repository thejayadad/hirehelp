import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { createUser } from '@/lib/helper/create-user'
import { UserButton } from '@clerk/nextjs'

const DashboardPage = async () => {
    const user = await currentUser()

    const userEmail = user?.emailAddresses[0].emailAddress
    const userName = user?.firstName || "Unknown" 

    // Create a user if no user
    try {
        const existingUser = await createUser(userEmail, userName)
        console.log("Existing User: ", existingUser)
    } catch (error) {
        console.error("Error in DashboardPage:", error)
    }

    return (
        <div>
            <UserButton />
            <h1>Dashboard</h1>
            {/* <p>Welcome, {existingUser?.name}!</p>
            <p>Your email: {existingUser?.email}</p> */}
        </div>
    )
}

export default DashboardPage
