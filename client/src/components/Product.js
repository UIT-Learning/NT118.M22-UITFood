import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../theme/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  card: {
    margin: 16,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  image: {
    width: 124,
    height: 121,
    borderColor: Colors.gray,
    borderRadius: 20,
  },
  titleSection: {
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  quantityStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 95,
    height: 30,
    borderRadius: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
  },
  delete: {
    width: 53,
    height: 55,
    borderRadius: 20,
    borderColor: Colors.white,
    borderWidth: 1,
    backgroundColor: Colors.colorPrimary,
    alignItems: 'center',
  },
});

export default function Product() {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View>
        <Image
          style={{height: 100, width: 100, borderRadius: 20}}
          source={require('../../assets/images/burger-restaurant-2.jpg')}
        />
      </View>
      <View>
        <Text
          style={{color: Colors.black, fontWeight: '600', fontSize: 18}}
          onPress={() => navigation.replace('ProductDetails')}>
          Bánh mì thịt
        </Text>
        <Text onPress={() => navigation.replace('ProductDetails')}>
          Còn: 20
        </Text>
      </View>
    </View>
  );
}
