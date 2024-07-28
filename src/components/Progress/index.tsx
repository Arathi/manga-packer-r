import Flex from "../Flex";

interface Props {
  success?: number;
  running?: number;
  error?: number;
  pending?: number;
  height?: number;
  colors?: [string, string, string, string];
}

export default function Progress({
  success = 0,
  running = 0,
  error = 0,
  pending = 100,
  height = 16,
  colors = ["#00B42A", "#165DFF", "#F53F3F", "#E5E6EB"],
}: Props) {
  const [successColor, runningColor, errorColor, pendingColor] = colors;
  return (
    <Flex
      flex={1}
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "gray",
      }}
    >
      <Flex
        flex={success}
        style={{
          backgroundColor: successColor,
          height,
        }}
      ></Flex>
      <Flex
        flex={running}
        style={{
          backgroundColor: runningColor,
          height,
        }}
      ></Flex>
      <Flex
        flex={error}
        style={{
          backgroundColor: errorColor,
          height,
        }}
      ></Flex>
      <Flex
        flex={pending}
        style={{
          backgroundColor: pendingColor,
          height,
        }}
      ></Flex>
    </Flex>
  );
}
