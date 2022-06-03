import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../theme/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  card: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default function CartCard({title, subtitle, quantity, price}) {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.image}>
          <Image
            style={{height: 121, width: 124, borderRadius: 20}}
            source={require('../../assets/images/burger-restaurant-2.jpg')}
          />
        </View>
        <View style={styles.titleSection}>
          <View>
            <Text
              style={{color: Colors.black, fontWeight: '600', fontSize: 18}}>
              {title}
            </Text>
            <Text>{subtitle}</Text>
          </View>
          <View>
            <View style={styles.quantityStyle}>
              <TouchableOpacity
                onPress={() => navigation.replace('HomeScreen')}>
                <View style={{height: 30, width: 30, alignItems: 'center'}}>
                  <Text style={{marginTop: 4}}>-</Text>
                </View>
              </TouchableOpacity>
              <Text>{quantity}</Text>
              <TouchableOpacity
                onPress={() => navigation.replace('HomeScreen')}>
                <View style={{height: 30, width: 30, alignItems: 'center'}}>
                  <Text style={{marginTop: 4}}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <Text style={{fontWeight: '700', color: Colors.black}}>{price}</Text>
        <View style={styles.delete}>
          <Icon
            color={Colors.white}
            size={30}
            name="delete"
            style={{marginTop: 10}}
            onPress={() => navigation.replace('HomeScreen')}
          />
        </View>
      </View>
    </View>
  );
}
