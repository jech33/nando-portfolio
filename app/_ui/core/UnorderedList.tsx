const UnorderedList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="list-outside list-disc pl-9 text-lg 2xl:text-2xl">
      {children}
    </ul>
  );
};

export default UnorderedList;
