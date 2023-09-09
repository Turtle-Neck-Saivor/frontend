import { RouterProvider } from 'react-router-dom';
import { routers } from './router';
import { Provider } from 'react-redux';
import store from './stores';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={routers} />
      </PersistGate>
    </Provider>
  );
}

export default App;
