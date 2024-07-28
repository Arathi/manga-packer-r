import ReactDOM from "react-dom/client";
import TaskPanel from "./components/TaskPanel";

const container = document.createElement("div");
container.id = "mgpk-container";
document.body.append(container);

ReactDOM.createRoot(container).render(<TaskPanel />);
