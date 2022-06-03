import React from 'react';
import {Text, View, ScrollView, StyleSheet, TextInput} from 'react-native';
import Colors from '../theme/Colors';
import {Heading} from 'native-base';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const ChangePassword = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginHorizontal: 15}}>
      <Heading fontSize="xl" p="4" pb="3">
        Đổi mật khẩu
      </Heading>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.contentSection}>
          <View style={styles.ContentContainer}>
            <View>
              <Text style={styles.Text}>Current Password</Text>
              <TextInput style={styles.Input} secureTextEntry={true} />
            </View>
            <View>
              <Text style={styles.Text}>New Password</Text>
              <TextInput style={styles.Input} secureTextEntry={true} />
            </View>
            <View>
              <Text style={styles.Text}>Retype New Password</Text>
              <TextInput style={styles.Input} secureTextEntry={true} />
            </View>
          </View>
        </View>
        <Button
          title={'Sửa'}
          style={styles.marginButton}
          onPress={() => navigation.replace('HomeScreen')}></Button>
        <Button
          title={'Về trang chủ'}
          style={styles.marginButton}
          onPress={() => navigation.replace('HomeScreen')}></Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentSection: {
    backgroundColor: Colors.graylight,
    marginTop: 25,
    borderRadius: 20,
  },
  marginButton: {
    marginTop: 20,
    // marginBottom: 50,
    width: '90%',
    marginLeft: '5%',
  },
  Input: {
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginBottom: 15,
    marginTop: 5,
  },
  content: {
    paddingBottom: 35,
  },
  ContentContainer: {
    marginHorizontal: 25,
    marginVertical: 19,
  },
  Text: {
    fontSize: 17,
    fontWeight: '400',
    fontFamily: 'Poppins-Medium',
  },
});

export default ChangePassword;
