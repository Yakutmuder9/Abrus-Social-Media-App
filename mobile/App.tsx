import React from 'react';
import MainComponent from './screens/MainComponent';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import Loading from './components/LoadingComponent';

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <NavigationContainer>
          <MainComponent />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
