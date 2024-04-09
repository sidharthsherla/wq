// Payment.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PaymentMethods from './PaymentMethods';
import PromoCodeInput from './PromoCodeInput';
import OrderSummary from './OrderSummary';

const Payment = ({ services, addOns, total }) => {
  const [promoCode, setPromoCode] = useState('');

  return (
    <View style={styles.container}>
      <PaymentMethods />
      <PromoCodeInput onPromoCodeChange={setPromoCode} />
      <OrderSummary
        services={services}
        addOns={addOns}
        total={total}
        promoCode={promoCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Payment;