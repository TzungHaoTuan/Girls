import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"
import { getCurrentUser } from "@/actions/getCurrentUser"
import { Review } from "@prisma/client"

export async function POST(request: Request) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return NextResponse.error()
    }

    const body = await request.json()
    const { product, userId, rating, comment } = body

    const deliveredOrder = currentUser.orders.some(order => {
        order.products.find(item => {
            item.id === product.id
        }) && order.deliveryStatus === "delivered"
    })

    const userReview = product.reviews.find((review: Review) => {
        return review.userId === currentUser.id
    })

    if (!deliveredOrder || userReview) {
        return NextResponse.error()
    }

    const review = await prisma.review.create({
        data: {
            productId: product.id, userId, rating, comment
        }
    })

    return NextResponse.json(review)
}