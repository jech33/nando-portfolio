import React from "react";

const NandoLayoutArticle = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="no-scrollbar my-32 flex h-full max-h-full flex-col items-center justify-center overflow-y-scroll pl-20 pr-28">
      {children}
    </div>
  );
};

export default NandoLayoutArticle;
