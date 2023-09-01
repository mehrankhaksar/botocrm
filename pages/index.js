import React from "react";

import connectDB from "@/utils/connectDB";
import Customer from "@/models/Customer";

import HomePage from "@/components/templates/HomePage";

function Home({ customers }) {
  return <HomePage customers={customers} />;
}

export default Home;

export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find();

    return {
      props: { customers: JSON.parse(JSON.stringify(customers)) },
    };
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB!" });
  }
}
