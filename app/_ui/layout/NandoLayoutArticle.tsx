import React from "react";

const NandoLayoutArticle = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="no-scrollbar relative flex h-full max-h-full flex-col items-center justify-center overflow-y-scroll py-32 pl-20 pr-28">
      {children}
    </div>
  );
};

export default NandoLayoutArticle;
