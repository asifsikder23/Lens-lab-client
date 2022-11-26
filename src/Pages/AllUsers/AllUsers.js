import React, { useEffect, useState } from "react";
import AllUserData from "./AllUserData";

const AllUsers = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        {info.map((user) => (
          <AllUserData key={user.id} user={user}></AllUserData>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
