import React from "react";
import Layout from "../../Layout/Layout";
import HealthCarePage from "../../Components/ui/HealthCarePage/HealthCarePage";

const HealthCare = () => {
  return (
    <Layout showFooter={true} showNavbar={false}>
      <HealthCarePage></HealthCarePage>
    </Layout>
  );
};

export default HealthCare;