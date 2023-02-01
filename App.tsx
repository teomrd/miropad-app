import { StyleSheet, View } from 'react-native';
import { Home } from './src/Home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
