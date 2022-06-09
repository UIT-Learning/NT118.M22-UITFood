import React from 'react';
import {Modal, VStack, HStack, Text, Radio, Center, Input} from 'native-base';
import {useState} from 'react';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const CheckoutStep = ({totalMoney, setTotalMoney, FeeShip, setFeeShip}) => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false); // pptt
  const [DC1, setDC1] = useState(1);
  const [showModal2, setShowModal2] = useState(false); // dc 1
  const [DC2, setDC2] = useState(1);
  const [showModal3, setShowModal3] = useState(false); // tiền
  const [DC3, setDC3] = useState(1);
  const [showModal4, setShowModal4] = useState(false); // dc 2
  const [showModal5, setShowModal5] = useState(false); // dc 3
  const Quan = [
    'TP Thủ Đức',
    1,
    3,
    4,
    5,
    6,
    7,
    8,
    10,
    11,
    12,
    'Gò Vấp',
    'Bình Thạnh',
    'Tân Bình',
    'Tân Phú',
    'Phú Nhuận',
    'Hooc Môn',
  ];
  return (
    <Center>
      <Button
        onPress={() => setShowModal(true)}
        title={'Thanh toán'}
        style={{marginTop: 30}}
      />
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Chọn địa chỉ</Modal.Header>
          <Modal.Body>
            <Radio.Group
              defaultValue="2"
              name="1"
              size="sm"
              value={DC1}
              onChange={nextValue => {
                setDC1(nextValue);
              }}>
              <VStack space={3}>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="1">
                  TP Hồ Chí Minh
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="2">
                  Ngoài TP Hồ Chí Minh
                </Radio>
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                if (DC1 === '1') {
                  setShowModal2(true);
                  setShowModal(false);
                } else {
                  setShowModal3(true);
                  setShowModal(false);
                }
              }}
              title={'Tiếp tục'}
            />
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal
        isOpen={showModal2}
        onClose={() => {
          setShowModal2(false);
          setShowModal(true);
        }}
        size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Chọn địa chỉ</Modal.Header>
          <Modal.Body>
            <Radio.Group
              defaultValue="TP Thủ Đức"
              name="address"
              size="sm"
              value={DC2}
              onChange={nextValue => {
                setDC2(nextValue);
                // console.log(nextValue);
              }}>
              <VStack space={3}>
                {Quan.map((item, key) => {
                  return (
                    <Radio
                      key={key}
                      alignItems="flex-start"
                      _text={{
                        mt: '-1',
                        ml: '2',
                        fontSize: 'sm',
                      }}
                      value={item}>
                      {item == 'TP Thủ Đức' ? 'TP Thủ Đức' : `Quận ${item}`}
                    </Radio>
                  );
                })}
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal3(true);
                setShowModal2(false);
              }}
              title={'Tiếp tục'}
            />
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal
        isOpen={showModal3}
        onClose={() => {
          setShowModal3(false);
          if (DC1 === '1') {
            setShowModal2(true);
          } else {
            setShowModal(true);
          }
        }}
        size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Địa chỉ cụ thể</Modal.Header>
          <Modal.Body>
            <Text style={{marginBottom: 20}}>Địa chỉ cụ thể để giao hàng</Text>
            <Input
              mx="3"
              placeholder="Điền địa chỉ muốn giao đến vào đây"
              w="90%"
              maxWidth="300px"
              onChangeText={text => {
                setDC3(text);
                console.log(text);
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal4(true);
                setShowModal3(false);
                if (DC1 === '1') {
                  if (DC2 === 'TP Thủ Đức') {
                    setFeeShip(10000);
                  } else {
                    setFeeShip(20000);
                  }
                } else setFeeShip(30000);
              }}
              title={'Tiếp tục'}
            />
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal
        isOpen={showModal4}
        onClose={() => {
          setShowModal4(false);
          setShowModal3(true);
          setFeeShip(0);
        }}
        size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Tổng tiền</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Tiền món</Text>
                <Text color="blueGray.400">{totalMoney && totalMoney} đ</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Phí trừ</Text>
                <Text color="blueGray.400">0 đ</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Phí giao hàng</Text>
                <Text color="blueGray.400">{FeeShip && FeeShip} đ</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Tổng tiền thanh toán</Text>
                <Text color="green.500">
                  {totalMoney && totalMoney + FeeShip} đ
                </Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal5(true);
              }}
              title={'Tiếp tục'}
            />
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal
        isOpen={showModal5}
        size="lg"
        onClose={() => {
          setShowModal5(false);
          setShowModal4(true);
        }}>
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Lựa chọn thanh toán</Modal.Header>
          <Modal.Body>
            <Radio.Group name="payment" size="sm">
              <VStack space={3}>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="payment1">
                  Visa
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="payment2">
                  Master Card
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="payment3">
                  American Express
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="payment4">
                  UnionPay
                </Radio>
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal(false);
                setShowModal2(false);
                setShowModal3(false);
                setShowModal4(false);
                setShowModal5(false);
                navigation.navigate('Checkout', {
                  totalMoney: totalMoney,
                  FeeShip: FeeShip,
                });
              }}
              title={'Thanh toán'}
            />
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default CheckoutStep;
