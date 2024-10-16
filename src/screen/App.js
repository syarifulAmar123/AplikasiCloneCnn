import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './splashScreen/SplashScreen';
import DetailNews from './detailNews/DetailNews';
import IsiBerita from './isiBerita/IsiBerita';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Detail" component={DetailNews} />
        <Stack.Screen name="Isi" component={IsiBerita} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
