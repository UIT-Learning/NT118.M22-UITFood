import React from 'react';
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
const TextStyles = StyleSheet.create({
  TextStyle: {
    color: Colors.colorPrimary,
    width: 150,
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
  const navigation = useNavigation();
  const data = [
    {
      Id: 'cp01',
      Discount: '42k',
      DateStart: '20/04/2022',
      DateEnd: '01/05/2022',
      PriceMin: '100k',
      avatarUrl: require('../../assets/images/coupon1.jpg'),
    },
    {
      Id: 'cp02',
      Discount: '29k',
      DateStart: '20/04/2022',
      DateEnd: '01/05/2022',
      PriceMin: '100k',
      avatarUrl: require('../../assets/images/coupon2.jpg'),
    },
    {
      Id: 'cp03',
      Discount: '30k',
      DateStart: '20/04/2022',
      DateEnd: '01/05/2022',
      PriceMin: '100k',
      avatarUrl: require('../../assets/images/coupon3.jpg'),
    },
    {
      Id: 'cp04',
      Discount: '50k',
      DateStart: '20/04/2022',
      DateEnd: '01/05/2022',
      PriceMin: '120k',
      avatarUrl: require('../../assets/images/coupon4.jpg'),
    },
    {
      Id: 'cp05',
      Discount: '20k',
      DateStart: '20/04/2022',
      DateEnd: '01/05/2022',
      PriceMin: '100k',
      avatarUrl: require('../../assets/images/coupon5.jpg'),
    },
    {
      Id: 'cp06',
      Discount: '30k',
      DateStart: '20/04/2022',
      DateEnd: '01/05/2022',
      PriceMin: '100k',
      avatarUrl: require('../../assets/images/coupon3.jpg'),
    },
    {
      Id: 'cp06',
      Discount: '30k',
      DateStart: '20/04/2022',
      DateEnd: '01/05/2022',
      PriceMin: '100k',
      avatarUrl: require('../../assets/images/coupon3.jpg'),
    },
    {
      Id: 'cp06',
      Discount: '30k',
      DateStart: '20/04/2022',
      DateEnd: '01/05/2022',
      PriceMin: '100k',
      avatarUrl: require('../../assets/images/coupon3.jpg'),
    },
  ];
  return (
    <ScrollView
      borderBottomWidth="1"
      _dark={{
        borderColor: 'gray.600',
      }}
      borderColor="coolGray.200"
      pl="4"
      pr="5"
      py="2"
      style={{marginBottom: 50}}>
      <Heading fontSize="xl" p="4" pb="3" alignSelf="center">
        Ví vourcher
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
                  title={'Use'}
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
        title={'Về trang chủ'}
        style={{
          width: 300,
          alignSelf: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}
        onPress={() => navigation.replace('HomeScreen')}
      />
    </ScrollView>
  );
};

export default ListCoupon;
