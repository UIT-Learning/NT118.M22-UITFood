import React from 'react';
import {Box, Heading, FlatList, HStack, VStack, Image} from 'native-base';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Colors from '../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';

const ProducByCategory = () => {
  const navigation = useNavigation();
  const data = [
    {
      Id: '1',
      ProductName: 'Burger',
      Rating: 4,
      Time: '15 phút',
      Price: '100k',
      avatarUrl: require('../../assets/images/burger-restaurant.jpg'),
    },
    {
      Id: '2',
      ProductName: 'Chicken Burger',
      Rating: 5,
      Time: '20 phút',
      Price: '100k',
      avatarUrl: require('../../assets/images/honey-mustard-chicken-burger.jpg'),
    },
    {
      Id: '3',
      ProductName: 'Crispy Chicken Burger',
      Rating: 4,
      Time: '30 phút',
      Price: '100k',
      avatarUrl: require('../../assets/images/crispy-chicken-burger.jpg'),
    },
    {
      Id: '4',
      ProductName: 'Hotdog',
      Rating: 4,
      Time: '20 phút',
      Price: '120k',
      avatarUrl: require('../../assets/images/chicago-hot-dog.jpg'),
    },
    {
      Id: '5',
      ProductName: 'Fries',
      Rating: 5,
      Time: '30 phút',
      Price: '100k',
      avatarUrl: require('../../assets/images/fries-restaurant.jpg'),
    },
    {
      Id: '6',
      ProductName: 'Fries',
      Rating: 5,
      Time: '30 phút',
      Price: '100k',
      avatarUrl: require('../../assets/images/fries-restaurant.jpg'),
    },
    {
      Id: '7',
      ProductName: 'Fries',
      Rating: 5,
      Time: '30 phút',
      Price: '100k',
      avatarUrl: require('../../assets/images/fries-restaurant.jpg'),
    },
    {
      Id: '8',
      ProductName: 'Fries',
      Rating: 5,
      Time: '30 phút',
      Price: '100k',
      avatarUrl: require('../../assets/images/fries-restaurant.jpg'),
    },
    {
      Id: '9',
      ProductName: 'Fries',
      Rating: 5,
      Time: '30 phút',
      Price: '100k',
      avatarUrl: require('../../assets/images/fries-restaurant.jpg'),
    },
  ];
  return (
    <Box
      borderBottomWidth="1"
      _dark={{
        borderColor: 'gray.600',
      }}
      borderColor="coolGray.200"
      pl="4"
      pr="5"
      py="2">
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'gray.700',
        }}>
        <Image
          source={require('../../assets/icons/search.png')}
          resizeMode="contain"
          style={{
            position: 'absolute',
            width: 20,
            height: 18,
            top: 12,
            left: 10,
          }}
          alt="food"
        />
        <TextInput
          autoCorrect={false}
          placeholder="Tìm kiếm"
          style={{
            backgroundColor: Colors.inactive,
            height: 40,
            flex: 1,
            marginEnd: 2,
            borderRadius: 5,
            opacity: 0.8,
            paddingStart: 30,
            borderColor: 'gray',
            borderWidth: 1,
          }}
        />
      </View>
      <Heading fontSize="xl" pb="3">
        Danh sách các món ăn
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
            pr="4"
            py="2">
            <TouchableOpacity
              onPress={() => navigation.replace('ProductDetails')}>
              <HStack space={2} alignItems="center">
                <Image source={item.avatarUrl} alt={'Text'} size={'xl'} />
                <VStack>
                  <Text style={styles.TextStyle}>{item.ProductName}</Text>
                  <Text>Giá: {item.Price}</Text>
                  <Text>Đánh giá: {item.Rating}</Text>
                  <Text>Thời gian làm: {item.Time}</Text>
                </VStack>
              </HStack>
            </TouchableOpacity>
          </Box>
        )}
        keyExtractor={item => item.Id}
        style={{height: '75%'}}
      />
      <Button
        title={'Về trang chủ'}
        style={{
          marginBottom: 200,
          width: '40%',
          marginLeft: 110,
          marginTop: 20,
        }}
        onPress={() => navigation.replace('HomeScreen')}
      />
    </Box>
  );
};

export default ProducByCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  TextStyle: {
    color: Colors.primaryColor,
    width: 500,
    fontWeight: '900',
    fontSize: 18,
  },
  ButtonStyle: {
    width: 80,
    alignSelf: 'center',
    marginTop: 15,
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 10,
    width: 50,
    height: 50,
  },
  text: {
    color: '#000',
    fontFamily: 'Avenir',
    fontSize: 15,
  },
});
