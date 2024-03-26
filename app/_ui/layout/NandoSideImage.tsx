const NandoSideImage = ({ children }: { children: React.ReactNode }) => {
  return (
    <figure className="relative flex h-full w-full items-center justify-center overflow-hidden px-6 py-16">
      {children}
    </figure>
  );
};

export default NandoSideImage;
