import React from "react";

import { useRouter } from "next/router";

import CustomerDetailsPage from "@/components/templates/CustomerDetailsPage";

function CustomerDetails() {
  const [customer, setCustomer] = React.useState(null);

  const router = useRouter();
  const {
    isReady,
    query: { customerId },
  } = router;

  React.useEffect(() => {
    fetch(`/api/customer/${customerId}`)
      .then((res) => res.json())
      .then(({ data }) => setCustomer(data));
  }, [isReady]);

  if (customer) return <CustomerDetailsPage {...customer} />;
}

export default CustomerDetails;
