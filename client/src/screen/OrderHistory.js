import React from 'react';
import {
  Box,
  Heading,
  FlatList,
  HStack,
  VStack,
  Text,
  Spacer,
  Image,
} from 'native-base';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const OrderHistory = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      ProductName: 'Hamburger Ý',
      timeStamp: '12:47 PM',
      Category: 'Hamburger',
      avatarUrl: require('../../assets/images/crispy-chicken-burger.jpg'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      ProductName: 'Pizza bò',
      timeStamp: '11:11 PM',
      Category: 'Pizza',
      avatarUrl: require('../../assets/images/hawaiian-pizza.jpg'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      ProductName: 'HAMADA HOTDOG',
      timeStamp: '6:22 PM',
      Category: 'Hotdog',
      avatarUrl: require('../../assets/images/hot-dog-restaurant.jpg'),
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      ProductName: 'Mì Ý',
      timeStamp: '8:56 PM',
      Category: 'Mì',
      avatarUrl: require('../../assets/images/kolo-mee.jpg'),
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      ProductName: 'Hotdog trứng cuộn Double Cheese',
      timeStamp: '12:47 PM',
      Category: 'Hotdog',
      avatarUrl: require('../../assets/images/chicago-hot-dog.jpg'),
    },
  ];
  return (
    <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Các món đã đặt
      </Heading>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: 'gray.600',
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2">
            <HStack space={3} justifyContent="space-between">
              <Image source={item.avatarUrl} alt="text" size="sm" />
              <VStack>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold
                  style={{width: 150}}>
                  {item.ProductName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  {item.Category}
                </Text>
              </VStack>
              <Spacer />
              <VStack>
                <Text
                  fontSize="xs"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start">
                  {item.timeStamp}
                </Text>
                <Button
                  title={'Đặt lại'}
                  style={{width: 100, alignSelf: 'center', marginTop: 20}}
                  onPress={() => navigation.replace('ProductDetails')}></Button>
              </VStack>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};

export default OrderHistory;
