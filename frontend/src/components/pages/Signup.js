import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Create your account to manage your health easily</Text>

      <TextInput
        mode="outlined"
        label="Your email address"
        left={<TextInput.Icon icon="email-outline" />}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        mode="outlined"
        label="Your phone number"
        left={<TextInput.Icon icon="phone-outline" />}
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />

      <TextInput
        mode="outlined"
        label="Patient or Doctor"
        left={<TextInput.Icon icon="account-outline" />}
        value={role}
        onChangeText={setRole}
        style={styles.input}
      />

      <View style={styles.checkboxContainer}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
        />
        <Text>I agree with Terms & Conditions</Text>
      </View>

      <Button mode="contained" style={styles.registerButton}>
        Register
      </Button>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#DD4B39' }]}>
        <Icon name="google" size={20} color="white" />
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#1877F2' }]}>
        <Icon name="facebook" size={20} color="white" />
        <Text style={styles.socialText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginTextContainer}>
        <Text>Already registered? </Text>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: '#00BFFF',
    paddingVertical: 5,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  orText: {
    marginHorizontal: 10,
    color: 'gray',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  socialText: {
    color: 'white',
    marginLeft: 10,
  },
  loginTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  loginText: {
    color: '#00BFFF',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
