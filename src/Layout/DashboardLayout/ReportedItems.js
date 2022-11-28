import React, { useEffect, useState } from "react";
import ReportedItemCard from "./ReportedItemCard";

const ReportedItems = () => {
  const [report, setReport] = useState([]);
  

  useEffect(() => {
    fetch("https://lens-lab-server.vercel.app/report")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReport(data);
      });
  }, []);
  return (
    <div>
      {
        report.map(reported=>(
          <ReportedItemCard
          key={reported._id}
          reported={reported}></ReportedItemCard>
        ))
      }
    </div>
  );
};

export default ReportedItems;
