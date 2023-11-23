import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymenHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h1>Total payments:{payments?.length} </h1>
      <div className="overflow-x-auto">
        <table className=" table">
          {/* head */}
          <thead>
            <tr>
              <th>Email</th>
              <th>Transectionid</th>
              <th>Price</th>
              <th>Status</th>
              <th>Payment date</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment) => (
              <tr key={payment._id}>
                <th>{payment.email}</th>
                <td>{payment.transectionId}</td>
                <td>${payment.price}</td>
                <td>{payment.status}</td>
                <td>{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymenHistory;
