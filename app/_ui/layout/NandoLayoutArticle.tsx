import React from "react";

const NandoLayoutArticle = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="py-32 pl-20 pr-28 flex flex-col justify-center items-center h-full">
      {children}
    </div>
  );
};

export default NandoLayoutArticle;
