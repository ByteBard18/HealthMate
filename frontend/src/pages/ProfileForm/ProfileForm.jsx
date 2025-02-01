import React from "react";
import Layout from "../../Layout/Layout";
import PatientForm from "../../Components/ui/ProfileFormPage/ProfileFormPage";

const ProfileForm = () => {
  return (
    <Layout showFooter={false} showNavbar={false}>
      <PatientForm/>
    </Layout>
  );
};

export default ProfileForm;