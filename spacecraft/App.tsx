import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from './SCR/Screens/LoginScreen';

function App() {
    return (
        <PaperProvider>
            <LoginScreen />
        </PaperProvider>
    );
};

export default App;