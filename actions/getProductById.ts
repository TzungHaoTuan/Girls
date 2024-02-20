import prisma from "@/libs/prismadb"

interface Params {
    productId?: string;
}

export default async function getProductById(params: Params) {
    try {
        const { productId } = params
        const product = prisma.product.findUnique({
            where: { id: productId },
            include: {
                reviews: {
                    include: {
                        user: true
                    },
                    orderBy: {
                        createdDate: "desc"
                    }
                }
            }
        })
        if (!product) return null
        return product
    } catch (error: any) {
        throw new Error(error)
    }
}