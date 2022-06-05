import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  Box,
  Heading,
  FlatList,
  HStack,
  VStack,
  Spacer,
  Image,
  ScrollView,
} from 'native-base';
import Colors from '../theme/Colors';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
// call backend
import Axios from 'axios';
import {IP} from '../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TextStyles = StyleSheet.create({
  TextStyle: {
    color: Colors.colorPrimary,
    width: 120,
    fontWeight: '900',
    fontSize: 18,
  },
  ButtonStyle: {
    width: 57,
    alignSelf: 'center',
    marginTop: 15,
  },
});

const ListCoupon = () => {
  const [dataDiscount, setDataDiscount] = useState([]);
  useEffect(() => {
    Axios.get(`${IP}/discount`)
      .then(response => {
        // console.log(response.data);
        setDataDiscount(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  // console.log(dataDiscount[0]);
  const navigation = useNavigation();
  let data = dataDiscount.map((item, key) => {
    return {
      Id: key,
      Discount: item.dis_percent,
      DateStart: new Date(item.dis_start).toLocaleDateString(),
      DateEnd: new Date(item.dis_end).toLocaleDateString(),
      PriceMin: '100k',
      avatarUrl: require('../../assets/images/coupon1.jpg'),
    };
  });
  return (
    <>
      <Heading fontSize="xl" p="4" pb="3">
        Danh sách các vourcher
      </Heading>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Box
            borderWidth="1"
            backgroundColor={'gray.300'}
            _dark={{
              borderColor: 'gray.600',
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2">
            <HStack space={3} justifyContent="space-between">
              <Image source={item.avatarUrl} alt={'Text'} size={'sm'} />
              <VStack>
                <Text style={TextStyles.TextStyle}>Giảm: {item.Discount}</Text>
                <Text>Từ: {item.DateStart}</Text>
                <Text>Đến: {item.DateEnd}</Text>
                <Text>Áp dụng cho đơn: trên {item.PriceMin}</Text>
              </VStack>
              <Spacer />
              <VStack>
                <Button
                  title={'Lưu'}
                  style={TextStyles.ButtonStyle}
                  onPress={() => navigation.replace('HomeScreen')}
                />
              </VStack>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.Id}
      />
      <Button
        title={'KM Của tôi'}
        style={{width: 300, alignSelf: 'center', marginTop: 20}}
        onPress={() => navigation.replace('MyCoupon')}
      />
      <Button
        title={'Về trang chủ'}
        style={{
          width: 300,
          alignSelf: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}
        onPress={() => navigation.replace('HomeScreen')}
      />
    </>
  );
};

export default ListCoupon;
