import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import AppStatusBar from '../components/AppStatusBar';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Footer';
import Product from '../components/Product';
import CarouselCoupon from '../components/CarouselCoupon';
import StaggerHome from '../components/StaggerHome';
import {Heading, Center} from 'native-base';
import Menu from '../components/MenuApp';
import MenuApp from '../components/MenuApp';
import CarouselEvent from '../components/CarouselEvent';
import Button from '../components/Button';
// call backend
import Axios from 'axios';
import {IP} from '../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    Axios.get(`${IP}/product`)
      .then(response => {
        setDataProduct(response.data);
        console.log(dataProduct);
        // console.log(typeof dataProduct[0].product_image);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log('mot', dataProduct);
  // console.log('hai', dataProduct);

  const product = dataProduct.map((item, index) => {
    return (
      <Product
        key={index}
        product_id={item.product_id}
        product_name={item.product_name}
        product_price={item.product_price}
        product_image={item.product_image}
        product_quantity={item.product_quantity}
      />
    );
  });
  console.log('product', product);
  const products = [];
  // const product = [
  //   {
  //     name: (
  //       <Product
  //       // product_id={dataProduct.product_id}
  //       // product_name={dataProduct.product_name}
  //       // product_price={dataProduct.product_price}
  //       // product_image={dataProduct.product_image}
  //       // product_quantity={dataProduct.product_quantity}
  //       />
  //     ),
  //   },
  // ];
  return (
    <View style={styles.container}>
      <AppStatusBar />
      <Center
        flex={1}
        px="3"
        style={{
          // marginTop: 20,
          // marginBottom: 10,
          flexDirection: 'row',
          backgroundColor: Colors.primaryColor,
          // height: 300,
        }}>
        <MenuApp />
        <View>
          <Text style={{marginBottom: 5, fontSize: 20, fontWeight: '700'}}>
            Bánh Mì UITFood
          </Text>
        </View>
      </Center>
      <ScrollView nestedScrollEnabled={true} style={{height: '76%'}}>
        <Heading fontSize="xl" p="4" pb="3">
          Sự kiện mới
        </Heading>
        <CarouselEvent />
        <Heading fontSize="xl" p="4" pb="3">
          Bánh mì mua nhiều
        </Heading>
        <View>
          <ScrollView
            horizontal={true}
            onPress={() => navigation.replace('ProductDetails')}>
            <FlatList
              numColumns={4}
              m={'-8px'}
              data={product}
              renderItem={({item}) => {
                return item;
              }}
            />
          </ScrollView>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Button
              title={'Tất cả'}
              style={{width: '32%', marginLeft: 275, marginTop: 20}}
              onPress={() => navigation.replace('ProductByCategory')}
            />
          </View>
          <Heading
            fontSize="xl"
            p="4"
            pb="3"
            onPress={() => navigation.replace('ListCoupon')}>
            Khuyến mãi Hot
          </Heading>
          <CarouselCoupon />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    marginTop: 10,
    color: Colors.while,
    fontSize: 25,
    fontFamily: Fonts.primaryFont,
    textAlign: 'center',
  },
  button: {
    // alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    backgroundColor: Colors.while,
    width: 80,
    marginTop: 15,
  },
});

export default HomeScreen;
