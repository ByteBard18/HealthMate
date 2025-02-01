import React from "react";
import Layout from "../../Layout/Layout";
import AppointmentPage from "../../Components/ui/AppointmentPage/AppointmentPage";

const Dashboard = () => {
  return (
    <Layout showFooter={false} showNavbar={false}>
      <AppointmentPage></AppointmentPage>
    </Layout>
  );
};

export default Dashboard;