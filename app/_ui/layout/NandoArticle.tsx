const NandoArticle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col items-start gap-6">{children}</div>
  );
};

export default NandoArticle;
