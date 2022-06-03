import React from 'react';
import {
  Slide,
  Button,
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Spacer,
  WarningIcon,
  Input,
  Center,
  useSafeArea,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const Checkout = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });
  const navigation = useNavigation();
  return (
    <Center>
      <Box w="320">
        <Box w="100%" alignItems="flex-start" justifyContent="center">
          <VStack space={3} w="100%">
            <HStack alignItems="flex-end">
              <Heading>Thanh toán</Heading>
              <Spacer />
              <WarningIcon color="orange.600" size="xs" mb="1.5" />
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Tổng tiền món</Text>
              <Text color="blueGray.400">$298.77</Text>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Phí</Text>
              <Text color="blueGray.400">$38.84</Text>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Tổng thanh toán</Text>
              <Text color="green.500">$337.61</Text>
            </HStack>
            <VStack space={2} mt="2">
              <Text bold>Mã khuyễn mãi</Text>
              <HStack space={3}>
                <Input flex="1" />
                <Button variant="outline">Chọn</Button>
              </HStack>
            </VStack>
            <Button
              my="2"
              onPress={() => {
                setIsOpen(!isOpen);
                navigation.replace('CheckoutSuccess');
              }}>
              Thanh toán
            </Button>
            <Button my="2" onPress={() => navigation.replace('HomeScreen')}>
              Về trang chủ
            </Button>
          </VStack>
        </Box>
        <Slide in={isOpen} placement="top">
          <Box
            p="2"
            _text={{
              color: 'orange.600',
            }}
            bg="orange.200"
            {...safeAreaProps}>
            Due to government restrictions around COVID- 19, you may experience
            a delay in your delivery.
          </Box>
        </Slide>
      </Box>
    </Center>
  );
};

export default Checkout;
