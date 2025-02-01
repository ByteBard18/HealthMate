import React from "react";
import Layout from "../../Layout/Layout";
import ProfilePage from "../../Components/ui/ProfilePage/ProfilePage";

const Profile = () => {
  return (
    <Layout showFooter={true}>
      <ProfilePage/>
    </Layout>
  );
};

export default Profile;