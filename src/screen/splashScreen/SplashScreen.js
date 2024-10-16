import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Image, ActivityIndicator, StatusBar} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Detail');
    }, 4000);
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ca1214',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#ca1214'} />
      <Image
        source={{
          uri: 'https://tse1.mm.bing.net/th?id=OIP.hog7dPE_gF54JYuPf9IxpAHaHa&pid=Api&P=0&h=180',
        }}
        style={{width: 200, height: 200, marginTop: -100}}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
