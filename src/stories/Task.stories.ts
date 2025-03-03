import type { Meta } from "@storybook/react";
import TaskView from "../components/TaskView";

const meta = {
  title: "Components/TaskView 任务",
  component: TaskView,
  argTypes: {
    name: {
      control: {
        type: "text",
      },
    },
    loaded: {
      control: {
        type: "number",
      },
    },
    total: {
      control: {
        type: "number",
      },
    },
    status: {
      control: {
        type: "select",
        options: [{
          0: 'Pending',
        }, {
          1: 'Running',
        }, {
          2: 'Failure',
        }, {
          3: 'Success',
        }],
      },
    },
  },
} satisfies Meta<typeof TaskView>;

export default meta;

export const Default = {};

export const Pending = {
  args: {
    name: "000",
    loaded: 0,
    total: 0,
    status: 0,
  },
};

export const Failure50 = {
  name: "Failure 50%",
  args: {
    name: "000",
    loaded: 1024,
    total: 2048,
    status: 2,
  },
};

export const Success = {
  args: {
    name: "000",
    loaded: 2048,
    total: 2048,
    status: 3,
  },
};
