// eslint@typescript-eslint/no-explicit-any
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { NextPage } from "next";
import Counter from "../components/Counter";

const Page: NextPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div>
      <h1>Cabins page</h1>;
      <ul>
        {data.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter users={data} />
    </div>
  );
};

export default Page;
