import prisma from "@/libs/prismadb"

export async function getOrdersByUserId(userId: string) {
    try {
        const orders = await prisma.order.findMany({
            where: { userId: userId },
            include: {
                user: true
            },
            orderBy: {
                createDate: "desc"
            }
        })

        return orders
    } catch (error: any) {
        throw new Error(error)
    }
}