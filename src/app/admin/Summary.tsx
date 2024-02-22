"use client";

import { Order, Product, User } from "@prisma/client";
import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { formatPrice } from "@/src/utils/formatPrice";
import { formatNumber } from "@/src/utils/formatNumber";

interface SummaryProps {
  products: Product[];
  users: User[];
  orders: Order[];
}

type SummaryDataType = {
  [key: string]: {
    label: string;
    digits: number;
  };
};

const Summary: React.FC<SummaryProps> = ({ products, users, orders }) => {
  const [summaryData, setSummaryData] = useState<SummaryDataType>({
    sale: {
      label: "Total Sale",
      digits: 0,
    },
    products: {
      label: "Total Products",
      digits: 0,
    },
    orders: {
      label: "Total Orders",
      digits: 0,
    },
    paidOrders: {
      label: "Paid Orders",
      digits: 0,
    },
    unPaidOrders: {
      label: "Unpaid Orders",
      digits: 0,
    },
    users: {
      label: "Total Users",
      digits: 0,
    },
  });

  useEffect(() => {
    setSummaryData((prev) => {
      let data = { ...prev };

      const totalSale = orders.reduce((acc, item) => {
        if (item.status === "complete") {
          return acc + item.amount;
        } else return acc;
      }, 0);
      const paidOrders = orders.filter((order) => {
        return order.status === "complete";
      });
      const unPaidOrders = orders.filter((order) => {
        return order.status === "pending";
      });

      data.sale.digits = totalSale;
      data.paidOrders.digits = paidOrders.length;
      data.unPaidOrders.digits = unPaidOrders.length;
      data.orders.digits = orders.length;
      data.products.digits = products.length;
      data.users.digits = users.length;

      return data;
    });
  }, [products, users, orders]);

  const summaryDataKeys = Object.keys(summaryData);

  return (
    <div className="max-w-[1150px] m-auto">
      <div className="mt-8 mb-4">
        <Heading title="Stats" center />
      </div>
      <div className="grid grid-cols-2 gap-3 max-h-50vh overflow-y-auto">
        {summaryDataKeys.map((key) => (
          <div
            key={key}
            className="flex flex-col items-center gap-2 border-2 rounded-xl p-4 transition"
          >
            <div className="text-xl md:text-4xl font-bold">
              {summaryData[key].label === "Total Sale" ? (
                <>{formatPrice(summaryData[key].digits)}</>
              ) : (
                <>{formatNumber(summaryData[key].digits)}</>
              )}
            </div>
            <div>{summaryData[key].label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
