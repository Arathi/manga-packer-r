import type { Meta } from "@storybook/react";
import ProgressBar from '../components/ProgressBar';

const meta = {
  title: "Components/ProgressBar 进度条",
  component: ProgressBar,
  argTypes: {
    value: {
      control: {
        type: 'number',
      },
    },
    max: {
      control: {
        type: 'number',
      },
    },
    items: {
      control: {
        type: 'object',
      },
    },
  }
} satisfies Meta<typeof ProgressBar>;

export default meta;

export const Default = {};

export const Value = {
  args: {
    value: 61,
    status: 1,
  },
};

export const Items = {
  args: {
    items: [
      0, 1, 2, 3
    ]
  },
}
