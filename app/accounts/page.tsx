import React from "react";
import { NextPage, Metadata } from "next";
import { auth } from "../_lib/auth";

export const metadata: Metadata = {
  title: "Accounts ",
};

const Page: NextPage = async () => {
  const session = await auth();
  console.log(session);
  const firstName = session?.user?.name?.split(" ").at(0);

  return (
    <h1 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome , {firstName}
    </h1>
  );
};

export default Page;
