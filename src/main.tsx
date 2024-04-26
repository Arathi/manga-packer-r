import ReactDOM from 'react-dom/client';
import { Provider } from 'jotai';

import MangaPacker from './MangaPacker';

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
