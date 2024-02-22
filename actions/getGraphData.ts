import prisma from "@/libs/prismadb"
import moment from "moment"


export async function getGraphData() {
    try {
        // 7 days
        const startDate = moment().subtract(6, "days").startOf("day")
        const endDate = moment().endOf("day")

        // query the database to get order data qrouped by createDate
        const orderData = await prisma.order.groupBy({
            by: ["createDate"],
            where: {
                createDate: {
                    gte: startDate.toISOString(),
                    lte: endDate.toISOString()
                },
                status: "complete"
            },
            _sum: {
                amount: true
            }
        })

        //initialize an object to aggregate the data of each day
        const aggregatedData: {
            [day: string]: {
                day: string,
                date: string,
                totalAmount: number
            }
        } = {}

        //clone the start date to be the current date
        const currentDate = startDate.clone()

        while (currentDate <= endDate) {
            const day = currentDate.format("dddd")
            console.log("day<<<", day, currentDate)

            aggregatedData[day] = {
                day,
                date: currentDate.format("YYYY-MM-DD"),
                totalAmount: 0
            }

            currentDate.add(1, "day")
        }

        //calculate total amount
        orderData.forEach((order) => {
            const day = moment(order.createDate).format("dddd")
            const amount = order._sum.amount || 0
            aggregatedData[day].totalAmount += amount
        })

        //put object values of each day to an array
        const formattedData = Object.values(aggregatedData).sort((a, b) =>
            moment(a.date).diff(moment(b.date))
        )

        return formattedData

    } catch (error: any) {
        throw new Error(error)
    }
}