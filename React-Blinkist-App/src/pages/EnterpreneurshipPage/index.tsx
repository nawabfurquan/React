import React from "react";
import Footer from "../../components/organisms/Footer";
import Header from "../../components/organisms/Header";
import SelectedPageContent from "../../components/organisms/SelectedPageContent";

interface Props {}

const EnterpreneurshipPage = (props: Props) => {
  return (
    <>
      <Header />
      <SelectedPageContent />
      <Footer />
    </>
  );
};

export default EnterpreneurshipPage;
