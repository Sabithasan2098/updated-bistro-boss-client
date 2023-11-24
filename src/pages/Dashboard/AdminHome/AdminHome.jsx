import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaTruck } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { SiCodechef } from "react-icons/si";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSwcure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSwcure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(stats);
  return (
    <div>
      <h1 className="text-3xl">
        <span className="pr-2">Hi,welcome</span>
        {user?.displayName ? user.displayName : "back"}
      </h1>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-3xl font-bold"></FaDollarSign>
          </div>
          <div className="stat-title">Revinue</div>
          <div className="stat-value">{stats?.revinue}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <IoIosPeople className="text-3xl font-bold"></IoIosPeople>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats?.users}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <SiCodechef className="text-3xl font-bold"></SiCodechef>
          </div>
          <div className="stat-title">Total Products</div>
          <div className="stat-value">{stats?.products}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaTruck className="text-3xl font-bold"></FaTruck>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
