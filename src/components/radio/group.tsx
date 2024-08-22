import Flex from "../flex";

export interface Props<T> {
  items?: Item<T>[];
  onChange?: (value: T) => void;
}

export interface Item<T> {
  value: T;
  element?: React.ReactNode;
}

function RadioGroup<T>({ items = [], onChange }: Props<T>) {
  const radios: React.ReactNode[] = items.map(({ value, element }) => {
    const children = element ?? `${value}`;
    return (
      <Flex
        key={`radio-${value}`}
        flex={1}
        justify="center"
        onClick={() => {
          console.debug(`点击单选按钮 ${value}`);
          if (onChange !== undefined) {
            onChange(value);
          }
        }}
      >
        {children}
      </Flex>
    );
  });
  return <Flex flex={1}>{radios}</Flex>;
}

export default RadioGroup;
