import { StyleSheet, Image } from 'react-native';
import img from '@/assets/images/selfie.png';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
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
