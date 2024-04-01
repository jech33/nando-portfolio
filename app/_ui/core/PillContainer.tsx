import Pill from "./Pill";

const PillContainer = (props: { labels: string[] }) => {
  const { labels } = props;
  return (
    <div className="flex flex-wrap items-center gap-6">
      {labels.map((label, index) => (
        <Pill key={index} label={label} />
      ))}
    </div>
  );
};

export default PillContainer;
