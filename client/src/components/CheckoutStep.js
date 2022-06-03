import React from 'react';
import {Modal, VStack, HStack, Text, Radio, Center} from 'native-base';
import {useState} from 'react';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const CheckoutStep = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  return (
    <Center>
      <Button
        onPress={() => setShowModal2(true)}
        title={'Thanh toán'}
        style={{marginTop: 30}}
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Tổng tiền</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Tiền món</Text>
                <Text color="blueGray.400">$298.77</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Phí</Text>
                <Text color="blueGray.400">$38.84</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Tổng tiền</Text>
                <Text color="green.500">$337.61</Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal3(true);
              }}
              title={'Tiếp tục'}
            />
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Chọn địa chỉ</Modal.Header>
          <Modal.Body>
            <Radio.Group defaultValue="address1" name="address" size="sm">
              <VStack space={3}>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="address1">
                  456 Vo Thi Sau. P.4, Q.3, HCM
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="address2">
                  456 Dong Tac. P.4, Q.Thu Duc, HCM
                </Radio>
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal(true);
              }}
              title={'Tiếp tục'}
            />
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal3} size="lg" onClose={() => setShowModal3(false)}>
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
                  Cash on delivery
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="payment2">
                  Credit/ Debit/ ATM Card
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="payment3">
                  Momo
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
                navigation.replace('CheckoutSuccess');
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
