import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email && password) {  // Supõe que se ambos estão preenchidos, está correto.
      navigation.navigate('Home');  // Navega para a tela Home
    } else {
      Alert.alert("Erro", "Por favor preencha todos os campos.");
    }
  };

  return (
    <ImageBackground source={require('../../assets/fundo.png')} style={styles.background}>
      <Text style={styles.header}>Bem-Vindo(a)</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}
          >
            <FontAwesome name={passwordVisible ? 'eye-slash' : 'eye'} size={24} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.registerLink}>Não possui conta? Cadastre-se Gratuitamente</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    padding: 15,
  },
  inputPassword: {
    flex: 1,
    marginRight: 10,
  },
  eyeIcon: {
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  registerLink: {
    color: 'white',
    marginTop: 15,
  }
});

export default LoginScreen;
