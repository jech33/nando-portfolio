import React from "react";

const NandoLayoutArticle = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="no-scrollbar mb-32 mt-[4.75rem] flex h-full max-h-full flex-col items-center justify-center overflow-y-scroll pl-[4.375rem] pr-[3.25rem] 2xl:mt-32 2xl:pl-20 2xl:pr-28">
      {children}
    </div>
  );
};

export default NandoLayoutArticle;
