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

  const id = req.query.customerId;

  if (req.method === "GET") {
    try {
      const customer = await Customer.findOne({ _id: id });
      res.status(200).json({ status: "success", data: customer });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "Error in retrieving data from DB!",
      });
    }
  } else if (req.method === "DELETE") {
    try {
      await Customer.findByIdAndDelete({ _id: id });
      res.status(200).json({ status: "success", message: "Data deleted!" });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "failed", message: "Error in deleting data from DB!" });
    }
  }
}
