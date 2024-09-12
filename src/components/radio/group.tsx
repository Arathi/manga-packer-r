import Flex from "../flex";

export interface Props<T> {
  value?: T;
  items?: Item<T>[];
  onChange?: (value: T) => void;
}

export interface Item<T> {
  value: T;
  element?: React.ReactNode;
}

function RadioGroup<T>({ value, items = [], onChange }: Props<T>) {
  const radios: React.ReactNode[] = items.map(
    ({ value: radioValue, element }) => {
      const children = element ?? `${radioValue}`;
      const backgroundColor =
        value === radioValue ? "rgba(128, 128, 128, 0.3)" : undefined;

      return (
        <Flex
          key={`radio-${radioValue}`}
          flex={1}
          justify="center"
          style={{
            backgroundColor,
            borderRadius: 5,
          }}
          onClick={() => {
            // console.debug(`点击单选按钮 ${radioValue}`);
            if (onChange !== undefined) {
              onChange(radioValue);
            }
          }}
        >
          {children}
        </Flex>
      );
    }
  );
  return <Flex flex={1}>{radios}</Flex>;
}

export default RadioGroup;
