import { RouterProvider } from 'react-router-dom';
import { routers } from './router';
import { Provider } from 'react-redux';
import store from './stores';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  );
}

export default App;
