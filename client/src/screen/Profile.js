import {ScrollView, View, Heading} from 'native-base';
import React, {useState, useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../theme/Colors';
import Button from '../components/Button';
// import Footer from '../components/Footer';
// call backend
import Axios from 'axios';
import {IP} from '../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [dataProfile, setDataProfile] = useState(null);
  useEffect(() => {
    Axios.get(`${IP}/profile`, {
      cus_email: AsyncStorage.getItem('cus_email'),
    })
      .then(response => {
        console.log(response.data);
        setDataProfile(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(dataProfile);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Heading fontSize="xl" p="4" pb="3">
        Thông tin cá nhân
      </Heading>
      <ScrollView style={styles.content}>
        <View style={styles.contentSection}>
          <View style={styles.TextContainer}>
            <Text style={{flex: 1}}>Họ Tên</Text>
            <Text style={styles.TextRight}>{dataProfile.cus_name}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.TextContainer}>
            <Text style={{flex: 1}}>Ngày sinh</Text>
            <Text style={styles.TextRight}>1/1/2022</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.TextContainer}>
            <Text style={{flex: 1}}>Giới tính</Text>
            <Text style={styles.TextRight}>Nữ</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.TextContainer}>
            <Text style={{flex: 1}}>SĐT</Text>
            <Text style={styles.TextRight}>{dataProfile.cus_numphone}</Text>
          </View>
        </View>

        <View style={styles.contentSection}>
          <View style={styles.TextContainer}>
            <Text style={{flex: 1}}>Thẻ thanh toán</Text>
            <Text style={styles.TextRight}>Visa</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.TextContainer}>
            <Text style={{flex: 1}}>STK</Text>
            <Text style={styles.TextRight}>491280123</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.TextContainer}>
            <Text style={{flex: 1}}>Số lượt mua</Text>
            <Text style={styles.TextRight}>15</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.TextContainer}>
            <Text style={{flex: 1}}>Tiền đã tiêu</Text>
            <Text style={styles.TextRight}>180.000 đ</Text>
          </View>
        </View>
        <Button
          title={'Sửa thông tin'}
          style={styles.marginButton}
          onPress={() => navigation.replace('EditAccount')}></Button>
        <Button
          title={'Đổi mật khẩu'}
          style={styles.marginButton}
          onPress={() => navigation.replace('ChangePassword')}></Button>
        <Button
          title={'Đăng xuất'}
          style={styles.marginButton}
          onPress={() => navigation.replace('Login')}></Button>
        <Button
          title={'Về trang chủ'}
          style={(styles.marginButton, {marginBottom: 50, marginTop: 20})}
          onPress={() => navigation.replace('HomeScreen')}></Button>
      </ScrollView>
      {/* <Footer /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  BackButton: {
    backgroundColor: Colors.colorPrimary,
  },
  marginButton: {
    marginTop: 20,
  },
  Edit: {
    marginTop: 7,
    color: Colors.colorPrimary,
    marginRight: 10,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    borderColor: '#ddddddd',
    backgroundColor: '#ddddddd',
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    marginHorizontal: 16,
    marginTop: 5,
  },
  content: {
    // marginBottom: 15,
    marginHorizontal: 15,
    height: '78%',
    paddingBottom: 32,
  },
  contentSection: {
    backgroundColor: Colors.graylight,
    borderRadius: 20,
    marginTop: 25,
  },
  TextRight: {
    flex: 1,
    fontWeight: '700',
    textAlign: 'right',
  },
  TextContainer: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 19,
  },
});
export default Profile;
