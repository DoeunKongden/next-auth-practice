import { baseUrl } from "@/utils/constant";


export const loginService = async (user) => {
    try {
        const res = await fetch(`${baseUrl}/auth`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                accept: "*/*",
                "Content-Type": "application/json",
            }
        })

        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error Register ", error)
    }
}