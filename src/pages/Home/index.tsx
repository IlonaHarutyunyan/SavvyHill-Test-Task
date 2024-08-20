import React from "react";
import "./styles.scss";
import { Sidebar } from "../../components/Sidebar/index.tsx";
import { SelectedElements } from "../../components/SelectedElments/index.tsx";

const HomePage: React.FC = () => {
  return (
    <div className="home_page_wrapper">
      <Sidebar />
      <SelectedElements />
    </div>
  );
};

export default HomePage;
