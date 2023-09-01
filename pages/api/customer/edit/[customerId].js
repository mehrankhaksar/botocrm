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

  if (req.method === "PATCH") {
    const id = req.query.customerId;
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      postalCode,
      date,
      products,
    } = req.body;

    try {
      const customer = await Customer.findOne({ _id: id });

      customer.firstName = firstName;
      customer.lastName = lastName;
      customer.email = email;
      customer.phoneNumber = phoneNumber;
      customer.address = address;
      customer.postalCode = postalCode;
      customer.date = date;
      customer.products = products;
      customer.updatedAt = Date.now();

      customer.save();

      res.status(200).json({ status: "success", data: customer });
    } catch (err) {
      res.status(500).json({
        status: "success",
        message: "Error in retrieving data from DB!",
      });
    }
  }
}
