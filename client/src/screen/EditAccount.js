import React, {useState} from 'react';
import {Text, View, ScrollView, StyleSheet, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Colors from '../theme/Colors';
import {Heading} from 'native-base';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const EditAccount = () => {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={{marginHorizontal: 15}}>
      <Heading fontSize="xl" p="4" pb="3">
        Sửa thông tin cá nhân
      </Heading>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.contentSection}>
          <View style={styles.ContentContainer}>
            <View>
              <Text style={styles.Text}>Full Name</Text>
              <TextInput style={styles.Input} />
            </View>
            <View>
              <Text style={styles.Text}>Phone Number</Text>
              <TextInput style={styles.Input} />
            </View>
            <View>
              <Text style={styles.Text}>ID Card</Text>
              <TextInput style={styles.Input} />
            </View>
            <View>
              <Text style={styles.Text}>Date of birth</Text>
            </View>
            <View>
              <Text style={styles.Text}>Gender</Text>
              <View style={styles.Picker}>
                <Picker
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }>
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                </Picker>
              </View>
            </View>
            <View>
              <Text style={styles.Text}>Email</Text>
              <TextInput style={styles.Input} />
            </View>
            <View>
              <Text style={styles.Text}>Adress</Text>
              <TextInput style={styles.Input} />
            </View>
          </View>
        </View>
        <Button
          title={'Sửa'}
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
    marginBottom: 50,
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
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  Picker: {
    height: 50,
    backgroundColor: Colors.white,
    marginBottom: 15,
    marginTop: 5,
    borderRadius: 10,
  },
});

export default EditAccount;
