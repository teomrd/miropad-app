import { StatusBar } from 'expo-status-bar';
import { Button, Text } from 'react-native';

export const Home = (): JSX.Element => {
  return (
    <>
      <Text>Alo monsieur</Text>
      <Button
        onPress={() => {
          console.log('Alo');
        }}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </>
  );
};
