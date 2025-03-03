import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(
  (() => {
    console.info("正在注入新节点");
    const app = document.createElement("div");
    app.id = "mgpk";
    document.body.append(app);
    return app;
  })()
).render(<App />);
