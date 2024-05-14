import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.welcomeText}>Olá Teste, Seja bem-vindo(a)!</Text>
        <Image source={require('../../assets/bayer.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.description}>
          Bem-vindo ao App Real Cangaíba! Aqui, a paixão pelo futebol de várzea encontra união e amizade.
          Fundado há 9 anos, nosso time cresceu graças à colaboração de pessoas dedicadas. Juntos,
          superamos desafios, celebramos vitórias e construímos uma história de orgulho que vai além do esporte.
          Este é o Real Cangaíba, uma comunidade vibrante e apaixonada.
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="calendar" size={50} color="orange" />
          <Text>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="photo" size={50} color="orange" />
          <Text>Galeria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContainer: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
    textAlign: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'justify',
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
    backgroundColor: 'black', // Ensure the background color matches the rest of the screen
  },
  icon: {
    alignItems: 'center',
  }
});

export default HomeScreen;
