import connectDB from "@/utils/connectDB";
import Customer from "@/models/Customer";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB!" });
  }

  if (req.method === "POST") {
    const inputs = req.body;

    if (!inputs.firstName || !inputs.lastName || !inputs.email)
      return res
        .status(422)
        .json({ status: "failed", message: "Invalid Data!" });

    for (let i = 0; i < inputs.products.length; i++) {
      const { productName, price, quantity } = inputs.products[i];

      if (!(productName && price && quantity)) {
        return res
          .status(422)
          .json({ status: "failed", message: "Enter all product fields!" });
      }
    }

    try {
      const customer = await Customer.create(inputs);
      res
        .status(201)
        .json({ status: "success", message: "Data created!", data: customer });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ status: "failed", message: "Error in storing data in DB!" });
    }
  }
}
