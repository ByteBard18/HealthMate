import React from "react";
import Layout from "../../Layout/Layout";
import HealthAI from "@/Components/ui/HealthAIPage/HealthAI";

const AI = () => {
  return (
    <Layout showFooter={true} showNavbar={true}>
      <HealthAI/>
    </Layout>
  );
};

export default AI;