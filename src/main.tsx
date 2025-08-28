import ReactDOM from "react-dom/client";
import TaskPanel from "./components/task-panel";

const root = document.createElement("div");
root.className = "app";
root.id = "mgpk";
document.body.append(root);

ReactDOM.createRoot(root).render(<TaskPanel margin={8} padding={8} />);
