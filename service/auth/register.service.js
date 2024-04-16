import { baseUrl } from "@/utils/constant";

export const registerService = async (user) => {
    try {
        const res = await fetch(`${baseUrl}/users`, {
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