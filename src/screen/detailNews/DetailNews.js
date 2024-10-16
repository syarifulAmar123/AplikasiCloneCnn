import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const DetailNews = ({navigation}) => {
  const [data, setData] = useState([]);

  const renderItem = ({item, index}) => {
    const summary = item?.summary;

    // Menggunakan RegExp untuk menemukan URL dalam atribut src
    const regex = /<img\s+src="([^"]+)"/;
    const match = summary.match(regex);
    const imageUrl = match[1];

    const movvingScreen = item => {
      navigation.navigate('Isi', {item: item});
    };

    return (
      <TouchableOpacity activeOpacity={0.9} onPress={() => movvingScreen(item)}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#ca1214'} />
        <View
          style={{
            minHeight: 50,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            backgroundColor: 'white',
            marginTop: 5,
          }}>
          <Text
            style={{
              color: 'black',
              marginBottom: 10,
              fontSize: 16,
              fontWeight: '500',
            }}>
            {item?.title}
          </Text>
          <Image source={{uri: imageUrl}} style={{height: 200, width: 350}} />
          <Text style={{marginLeft: 220, fontSize: 11}}>
            {item.date_published}
          </Text>
          <Text style={{marginTop: 15, fontSize: 14, color: 'black'}}>
            {item.content_html}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const getNews = async () => {
    try {
      const response = await fetch(
        'https://www.toptal.com/developers/feed2json/convert?url=https%3A%2F%2Fwww.cnnindonesia.com%2Fnasional%2Frss',
      );
      const json = await response.json();
      setData(json?.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* Header */}
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: '#cc1b16',
          elevation: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
          News App
        </Text>
      </View>
      <View style={{marginHorizontal: 10}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default DetailNews;
