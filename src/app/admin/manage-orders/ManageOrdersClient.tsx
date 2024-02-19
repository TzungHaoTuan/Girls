"use client";

import { Order, User } from "@prisma/client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { formatPrice } from "@/src/utils/formatPrice";
import Heading from "../../components/Heading";
import Status from "../../components/products/Status";
import {
  MdDone,
  MdRemoveRedEye,
  MdAccessTimeFilled,
  MdDeliveryDining,
} from "react-icons/md";
import ActionButton from "../../components/products/ActionButton";
import { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import moment from "moment";

interface ManageOrdersClientProps {
  orders: ExtendedOrder[];
}
type ExtendedOrder = Order & {
  user: User;
};

const ManageOrdersClient: React.FC<ManageOrdersClientProps> = ({ orders }) => {
  const router = useRouter();

  let rows: any = [];
  if (orders) {
    rows = orders.map((order) => {
      return {
        id: order.id,
        customer: order.user.name,
        amount: formatPrice(order.amount / 100),
        paymentStatus: order.status,
        date: moment(order.createDate).fromNow(),
        deliveryStatus: order.deliveryStatus,
      };
    });
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 160 },
    { field: "customer", headerName: "Customer Name", width: 160 },
    {
      field: "amount",
      headerName: "Amount(USD)",
      width: 100,
      renderCell: (params) => {
        return <div className="font-bold">{params.row.amount}</div>;
      },
    },
    {
      field: "paymentStatus",
      headerName: "PaymentStatus",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            {params.row.paymentStatus === "pending" ? (
              <Status
                label="pending"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
              />
            ) : params.row.paymentStatus === "complete" ? (
              <Status
                label="completed"
                icon={MdDone}
                bg="bg-purple-200"
                color="text-purple-700"
              />
            ) : (
              <></>
            )}
          </div>
        );
      },
    },
    {
      field: "deliveryStatus",
      headerName: "DeliveryStatus",
      width: 160,
      renderCell: (params) => {
        return (
          <div>
            {params.row.deliveryStatus === "pending" ? (
              <Status
                label="pending"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
              />
            ) : params.row.deliveryStatus === "dispatched" ? (
              <Status
                label="dispatched"
                icon={MdDeliveryDining}
                bg="bg-purple-200"
                color="text-purple-700"
              />
            ) : params.row.deliveryStatus === "delivered" ? (
              <Status
                label="delivered"
                icon={MdDone}
                bg="bg-green-200"
                color="text-green-700"
              />
            ) : (
              <></>
            )}
          </div>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 100,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-between gap-4 w-full">
            <ActionButton
              icon={MdDeliveryDining}
              onClick={() => handleDispatch(params.row.id)}
            />
            <ActionButton
              icon={MdDone}
              onClick={() => handleDeliver(params.row.id)}
            />
            <ActionButton
              icon={MdRemoveRedEye}
              onClick={() => {
                router.push(`/order/${params.row.id}`);
              }}
            />
          </div>
        );
      },
    },
  ];

  const handleDispatch = useCallback((id: string) => {
    axios
      .put("/api/order", {
        id,
        deliveryStatus: "dispatched",
      })
      .then((res) => {
        toast.success("Order dispatched");
        router.refresh();
      })
      .catch((error) => {
        toast.error("Oops! Something went wrong");
        console.log(error);
      });
  }, []);
  const handleDeliver = useCallback((id: string) => {
    axios
      .put("/api/order", {
        id,
        deliveryStatus: "delivered",
      })
      .then((res) => {
        toast.success("Order delivered");
        router.refresh();
      })
      .catch((error) => {
        toast.error("Oops! Something went wrong");
        console.log(error);
      });
  }, []);

  return (
    <div className="max-w-[1150px] m-auto text-xl">
      <div className="mt-8 mb-4">
        <Heading title="Manage Orders" center />
      </div>
      <div className="h-[600px] w-full">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ManageOrdersClient;
