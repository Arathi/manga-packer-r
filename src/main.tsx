import ReactDOM from 'react-dom/client';
import MangaPacker from './MangaPacker';
import { Provider } from 'jotai';

ReactDOM.createRoot(
  (() => {
    const app = document.createElement('div');
    document.body.append(app);
    return app;
  })(),
).render(
  <Provider>
    <MangaPacker />
  </Provider>,
);
