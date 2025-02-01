import React from "react";
import Layout from "../../Layout/Layout";
import DashboardPage from "../../Components/ui/DashboardPage/DashboardPage";

const Dashboard = () => {
  return (
    <Layout showFooter={false} showNavbar={false}>
      <DashboardPage></DashboardPage>
    </Layout>
  );
};

export default Dashboard;