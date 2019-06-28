// React imports
import React from 'react';
import { Provider } from 'react-redux';

// Store
import { createCustomStore as storeCreator} from './redux/store/store';

// Root style sheet
import './App.css';

// Screens
import SurveyScreen from './screens/SurveyScreen';

const store = storeCreator();


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SurveyScreen/>
    </Provider>
  );
}

export default App;
