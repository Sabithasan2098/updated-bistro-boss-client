import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>
        <span>Hi,welcome</span>
        {user?.displayName ? user.displayName : "back"}
      </h1>
    </div>
  );
};

export default AdminHome;
