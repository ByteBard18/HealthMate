import React from "react";
import Layout from "../../Layout/Layout";
import HomePage from "../../Components/ui/Homepage/Homepage";

const Home = () => {
  return (
    <Layout showFooter={true}>
      <HomePage></HomePage>
    </Layout>
  );
};

export default Home;