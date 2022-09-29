import React, { useState } from "react";
import Link from "next/link";

const PaymentButton = () => {
  const [showPaymentConfirmation, setPaymentConfirmation] = useState(false);
  return (
    <button className="flex h-1/2 w-full cursor-pointer items-center justify-center bg-secondary">
      <h1 className="text-xl font-bold text-tint">التالي</h1>
    </button>
  );
};

export default PaymentButton;
