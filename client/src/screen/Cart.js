import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, StyleSheet, TextInput, Image} from 'react-native';
import {Heading} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Colors from '../theme/Colors';
import CartCard from '../components/CartCard';
import {ScrollView} from 'native-base';
import Button from '../components/Button';
import Footer from '../components/Footer';
import CheckoutStep from '../components/CheckoutStep';
// call backend
import Axios from 'axios';
import {IP} from '../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = () => {
  const [dataCart, setDataCart] = useState([]);
  const [cus_id, setCus_id] = useState(null);
  const [product_id, setProduct_id] = useState(null);
  const [DelMessageParent, setDelMessageParent] = useState(false);
  const [totalMoney, setTotalMoney] = useState(0);
  const [FeeShip, setFeeShip] = useState(0);
  const [discount, setDiscount] = useState(0);
  AsyncStorage.getItem('cus_id').then(cus_id => {
    setCus_id(cus_id);
    setDelMessageParent(!DelMessageParent);
  });
  useEffect(() => {
    Axios.get(`${IP}/getcart/${cus_id}`)
      .then(res => {
        res.data && setDataCart(res.data);
        // gì đây ko biết nữa
        return () => {
          setDataCart([]);
        };
      })
      .catch(err => {
        console.log(err);
      });
  }, [cus_id, DelMessageParent]);

  const getTotalMoney = useCallback(() => {
    let total = 0;
    dataCart.map(item => {
      total += item.product_price * item.cart_quantity;
    });
    setTotalMoney(total);
    console.log('money', totalMoney);
  }, [dataCart]);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <Heading fontSize="xl" p="4" pb="3">
        Giỏ hàng
      </Heading>
      <ScrollView style={styles.content}>
        {dataCart.length > 0 ? (
          dataCart.map((item, key) => (
            <CartCard
              key={key}
              product_id={item.product_id}
              product_quantity={item.product_quantity}
              title={item.product_name}
              quantity={item.cart_quantity}
              price={item.product_price}
              image={item.product_image}
              DelMessageParent={DelMessageParent}
              setDelMessageParent={setDelMessageParent}
              totalMoney={totalMoney}
              setTotalMoney={setTotalMoney}
            />
          ))
        ) : (
          <Text style={{margin: 20}}>Không có sản phẩm nào trong giỏ hàng</Text>
        )}
        <Image
          onLoad={() => {
            getTotalMoney();
          }}
        />
        <View style={styles.totalSection}>
          <View style={styles.divider} />
          <View>
            <View style={styles.DetailsToTal}>
              <Text style={{fontSize: 16}}>Tiền món</Text>
              <Text style={styles.PriceStyle}>
                {totalMoney && totalMoney} đ
              </Text>
            </View>
            <View style={styles.DetailsToTal}>
              <Text style={{fontSize: 16}}>Phí trừ</Text>
              <Text style={styles.PriceStyle}>{discount && discount} đ</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.DetailsToTal}>
              <Text style={styles.TotalStyle}>Tổng tiền</Text>
              <Text style={styles.TotalStyle}>
                {FeeShip == 0 ? totalMoney + FeeShip : totalMoney} đ
              </Text>
            </View>
          </View>
        </View>
        {/*Coupon Section*/}
        <View style={styles.CouponStyle}>
          <TextInput
            style={styles.placeholderStyle}
            placeholder="Nhập Vourcher Code"
          />
          <Button title={'Dùng'} style={{flex: 1, fontSize: 10}} />
        </View>
        <Text style={{marginLeft: 20, marginTop: 15}}>
          Không có thì vui lòng để trống
        </Text>
        <CheckoutStep
          totalMoney={totalMoney}
          setTotalMoney={setTotalMoney}
          FeeShip={FeeShip}
          setFeeShip={setFeeShip}
        />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    height: '76%',
    marginHorizontal: 29,
    // paddingBottom: 32,
  },
  totalSection: {
    marginTop: 32,
  },
  divider: {
    height: 1,
    borderColor: '#ddddddd',
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    marginHorizontal: 16,
    marginTop: 5,
  },
  TotalStyle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
  },
  PriceStyle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
  },
  DetailsToTal: {
    marginTop: 14,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  CouponStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
    borderRadius: 50,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingLeft: 29,
    marginTop: 32,
  },
  placeholderStyle: {
    opacity: 0.6,
    color: '#707070',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 32,
    flex: 1,
  },
  ButtonStyle: {
    alignSelf: 'center',
    marginTop: 15,
  },
});
export default Cart;
