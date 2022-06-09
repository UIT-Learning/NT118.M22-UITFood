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

const ListInvoice = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      ProductName: 'Hamburger Ý',
      timeStamp: '12:47 PM',
      Category: 'Hamburger',
      avatarUrl: require('../../assets/images/crispy-chicken-burger.jpg'),
    },
  ];
  return (
    <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Danh sách hóa đơn
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
                  title={'Thanh toán'}
                  style={{alignSelf: 'center', marginTop: 20}}
                  onPress={() => navigation.replace('ProductDetails')}></Button>
                <Button
                  title={'Đã xong'}
                  disabled={true}
                  style={{alignSelf: 'center', marginTop: 20}}
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

export default ListInvoice;
