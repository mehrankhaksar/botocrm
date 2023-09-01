import React from "react";

import { useRouter } from "next/router";

import CustomerEditPage from "@/components/templates/CustomerEditPage";

function EditCustomer() {
  const [customer, setCustomer] = React.useState(null);

  const router = useRouter();
  const {
    isReady,
    query: { customerId },
  } = router;

  React.useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then(({ data }) => setCustomer(data));
    }
  }, [isReady]);

  if (customer) return <CustomerEditPage {...customer} />;
}

export default EditCustomer;
