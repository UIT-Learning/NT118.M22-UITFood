import React, {useState, useCallback, useEffect} from 'react';
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
// call backend
import Axios from 'axios';
import {IP} from '../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListInvoice = () => {
  const navigation = useNavigation();
  const [cus_id, setCus_id] = useState(null);
  AsyncStorage.getItem('cus_id')
    .then(cus_id => {
      setCus_id(cus_id);
    })
    .catch(error => {
      console.log(error);
    });
  const [dataInvoice, setDataInvoice] = useState([]);
  const getDataInvoice = useCallback(() => {
    Axios.get(`${IP}/invoice/${cus_id}`)
      .then(res => {
        setDataInvoice(res.data);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [cus_id]);
  useEffect(() => {
    getDataInvoice();
  }, [getDataInvoice]);
  const data = dataInvoice.map((item, key) => {
    return {
      id: key,
      invoice_id: item.invoice_id,
      dis_id: item.dis_id,
      invoice_total: item.invoice_total,
      invoice_status: item.invoice_status,
      invoice_createddate: new Date(
        item.invoice_createddate,
      ).toLocaleDateString(),
    };
  });
  return (
    <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Danh sách hóa đơn
      </Heading>
      <FlatList
        data={data}
        style={{height: 600}}
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
              <Image
                source={require('../../assets/images/sms.png')}
                alt="text"
                size="sm"
              />
              <VStack>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold
                  style={{width: 150}}>
                  Hóa đơn số {item.id}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  KM: {item.dis_id ? `KM số ${dis_id}` : 'Không có'}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  Ngày tạo: {item.invoice_createddate}
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
                  Tổng {item.invoice_total} đ
                </Text>
                <Text
                  fontSize="xs"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start">
                  {item.invoice_status != 1
                    ? 'Chưa thanh toán'
                    : 'Đã thanh toán'}
                </Text>
              </VStack>
            </HStack>
            <HStack
              space={2}
              justifyContent="space-between"
              style={{
                marginLeft: 80,
              }}>
              <VStack>
                {item.invoice_status != 1 ? (
                  <Button
                    title={
                      item.invoice_status != 1 ? 'Thanh toán' : 'Đã thanh toán'
                    }
                    style={{
                      alignSelf: 'center',
                      marginTop: 20,
                      // width: 140,
                      // marginRight: 150,
                    }}
                    onPress={() =>
                      navigation.replace('ProductDetails')
                    }></Button>
                ) : null}
              </VStack>
              <VStack>
                <Button
                  title={'Chi tiết'}
                  // item.invoice_status != 1 ? 'Thanh toán' : 'Đã thanh toán'
                  style={{
                    alignSelf: 'center',
                    marginTop: 20,
                    // width: 140,
                    marginRight: 120,
                  }}
                  onPress={() =>
                    navigation.replace('Invoice', {
                      invoice_id: item.invoice_id,
                    })
                  }></Button>
              </VStack>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
      <Button
        title={'Về trang chủ'}
        style={{
          width: 140,
          alignSelf: 'center',
          marginTop: 20,
        }}
        onPress={() => navigation.replace('HomeScreen')}></Button>
    </Box>
  );
};

export default ListInvoice;
