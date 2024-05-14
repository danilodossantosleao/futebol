import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigation = useNavigation();

  const handleCadastro = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert("Erro ao cadastrar", "Todos os campos são obrigatórios.");
    } else if (!emailRegex.test(email)) {
      Alert.alert("Formato de email inválido");
    } else if (senha !== confirmarSenha) {
      Alert.alert("Senhas não conferem");
    } else {
      Alert.alert("Cadastro Bem-sucedido!", "Você será redirecionado para a tela de login.", [
        {
          text: "OK",
          onPress: () => navigation.navigate('Login')
        }
      ]);
    }
  };

  return (
    <ImageBackground source={require('../../assets/bayer.png')} style={styles.background}>
      <Text style={styles.header}>CADASTRO</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
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
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default CadastroScreen;
