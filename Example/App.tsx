import React, { RefObject, Component } from 'react';
import { SafeAreaView, StyleSheet, Button, View } from 'react-native';

// @ts-ignore
import OtpInputs from 'react-native-otp-inputs';

export default class App extends Component {
  otpRef: RefObject<OtpInputs> = React.createRef();

  focusOTP = () => {
    this.otpRef.current.focus();
  };

  resetOTP = () => {
    this.otpRef.current.reset();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button title="Reset" onPress={this.resetOTP} />
        <Button title="Focus" onPress={this.focusOTP} />
        <OtpInputs ref={this.otpRef} numberOfInputs={4} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
