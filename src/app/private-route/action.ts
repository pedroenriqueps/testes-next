"use server"

import { cookies } from "next/headers"
import { TOKEN_KEY } from "@/utils/private-route/middleware"

export async function login(data: any) {
    const cookiesData = await cookies()
    cookiesData.set(TOKEN_KEY, "token")

    cookiesData.set({
        name: 'user',
        value: 'teste',
        httpOnly: true,
        path: '/'
    })
}

export async function logout() {
    const cookiesData = await cookies()
    cookiesData.delete(TOKEN_KEY)
}