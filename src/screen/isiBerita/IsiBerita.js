import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';

const IsiBerita = ({route}) => {
  const {item} = route.params;
  return <WebView source={{uri: item.url}} style={{flex: 1}} />;
};

export default IsiBerita;
