import React from "react";
import Layout from "../../Layout/Layout";
import BookingPage from "../../Components/ui/BookingPage/BookingPage";

const Dashboard = () => {
  return (
    <Layout showFooter={false} showNavbar={false}>
      <BookingPage></BookingPage>
    </Layout>
  );
};

export default Dashboard;