import withAuth from "../components/HOC/withAuth";
const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default withAuth(Dashboard);