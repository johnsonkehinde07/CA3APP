import { StyleSheet, Image } from 'react-native';//Brings in React Native's built-in styling and image components.
import img from '@/assets/images/selfie.png';//Imports an image from your local assets folder to use as a profile picture.
import { Text, View } from '@/components/Themed';// These are custom themed versions of Text and View, giving your app consistent styles

export default function TabOneScreen() {//Declares a React functional component named TabOneScreen and exports it as the default function.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, my name is Johnson Kehinde</Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.title}>Welcome to my app</Text>
      <Text style={styles.subtitle}>Built using React Native + Expo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#4682B4',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
