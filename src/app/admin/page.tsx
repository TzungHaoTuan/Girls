import getProducts from "@/actions/getProducts";
import Summary from "./Summary";
import { getOrders } from "@/actions/getOrders";
import { getUsers } from "@/actions/getUsers";
import Container from "../components/Container";
import BarGraph from "./BarGraph";
import { getGraphData } from "@/actions/getGraphData";

const AdminPage = async () => {
  const products = await getProducts({ category: null });
  const users = await getUsers();
  const orders = await getOrders();
  const graphData = await getGraphData();

  return (
    <div className="pt-8">
      <Container>
        <Summary products={products} users={users} orders={orders} />
        <div className="mt-4 mx-auto max-w-[1150px]">
          <BarGraph data={graphData} />
        </div>
      </Container>
    </div>
  );
};

export default AdminPage;
