import ReactDOM from "react-dom/client";
import TaskPanel from "./components/task-panel";

ReactDOM.createRoot(
  (() => {
    const app = document.createElement("div");
    app.className = "app";
    app.id = "mgpk";
    document.body.append(app);
    return app;
  })()
).render(<TaskPanel margin={8} padding={8} />);
