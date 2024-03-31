import React from "react";

const OrderedList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ol className="flex w-[23.75rem] list-decimal flex-col gap-6 font-heading text-[1.75rem] font-medium 2xl:gap-9 2xl:text-[2.25rem] [&_h2]:pl-1">
      {children}
    </ol>
  );
};

export default OrderedList;
