const UnorderedList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="list-outside list-disc pl-9 text-2xl">{children}</ul>;
};

export default UnorderedList;
