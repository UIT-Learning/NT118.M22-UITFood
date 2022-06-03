import React from 'react';
import {Text, View} from 'react-native';
// import {View, Text} from 'native-base';
// https://github.com/colbymillerdev/react-native-progress-steps
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Colors from '../theme/Colors';
import AppStatusBar from '../components/AppStatusBar';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const DeliveryStatus = () => {
  const navigation = useNavigation();
  const progressStepsStyle = {
    activeStepIconBorderColor: Colors.primaryColor,
    activeLabelColor: Colors.primaryColor,
    activeStepNumColor: 'white',
    activeStepIconColor: Colors.primaryColor,
    completedStepIconColor: Colors.primaryColor,
    completedProgressBarColor: Colors.primaryColor,
    completedCheckColor: Colors.while,
  };
  const buttonTextStyle = {
    color: Colors.primaryColor,
    fontWeight: 'bold',
  };
  return (
    <View style={{flex: 1, margin: 10}}>
      <AppStatusBar />
      <ProgressSteps {...progressStepsStyle}>
        <ProgressStep
          label="Chọn món"
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}>
          <View style={{alignItems: 'center'}}>
            <Text>Danh sách món</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Xác nhận"
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}>
          <View style={{alignItems: 'center'}}>
            <Text>Xác nhận</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Chuẩn bị đơn hàng"
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}>
          <View style={{alignItems: 'center'}}>
            <Text>Đơn hàng của bạn</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Vận chuyển"
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}>
          <View style={{alignItems: 'center'}}>
            <Text>Trạng thái vận chuyển / Phí</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label="Giao hàng thành công"
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}>
          <View style={{alignItems: 'center'}}>
            <Text>Giao hàng thành công!</Text>
            <Button
              title={'Mua tiếp'}
              style={{width: 300, alignSelf: 'center', marginTop: 20}}
              onPress={() => navigation.replace('HomeScreen')}
            />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default DeliveryStatus;
