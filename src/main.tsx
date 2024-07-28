import ReactDOM from "react-dom/client";
import TaskPanel from "./components/TaskPanel";

import "@arco-design/web-react/dist/css/index.less";

const container = document.createElement("div");
container.id = "mgpk-container";
document.body.append(container);

ReactDOM.createRoot(container).render(<TaskPanel />);
