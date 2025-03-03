import type { Meta } from "@storybook/react";
import TaskList from "../components/TaskList";

const meta = {
  title: "Components/TaskList 任务列表",
  component: TaskList,
  argTypes: {
    tasks: {
      control: {
        type: 'object'
      },
    },
    width: {
      control: {
        type: "number",
      }
    },
    height: {
      control: {
        type: "number",
      }
    },
  },
} satisfies Meta<typeof TaskList>;

export default meta;

const tasks = [
  {
    id: "001",
    name: "001",
    status: 3,
    loaded: 1234,
    total: 1234,
  },
  {
    id: "002",
    name: "002",
    status: 2,
    loaded: 1200,
    total: 1234,
  },
  {
    id: "003",
    name: "003",
    status: 1,
    loaded: 600,
    total: 1234,
  },
  {
    id: "004",
    name: "004",
    status: 0,
    loaded: 0,
    total: 0,
  },
];

export const FourTasks = {
  name: "四种任务状态",
  args: {
    tasks,
  }
};

export const WidthLimit = {
  name: "限制宽度",
  args: {
    tasks,
    width: 300,
  }
};

export const HeightLimit = {
  name: "限制高度",
  args: {
    tasks,
    height: 100,
  }
};

export const SizeLimit = {
  name: "限制大小",
  args: {
    tasks,
    width: 300,
    height: 100,
  }
};
