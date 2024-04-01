import Text from "./Text";

const Pill = (props: { label: string }) => {
  return (
    <Text className="bg-backgroundSecondary rounded-lg p-2" variant="body2">
      {props.label}
    </Text>
  );
};

export default Pill;
