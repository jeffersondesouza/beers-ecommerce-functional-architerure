import React from "react";
import "./styles.scss";

const DashboardCard = ({ title, children }) => {
  return (
    <div className="DashboardCard">
      <h3 className="DashboardCard__title">{title}</h3>
      {children}
    </div>
  );
};

export default DashboardCard;
