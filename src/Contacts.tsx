import { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';

export const MyContacts = (): JSX.Element => {
  useEffect(() => {
    const getContacts = async (): Promise<void> => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
        }
      }
    };

    getContacts();
  }, []);

  return (
    <View>
      <Text>Contacts Module Example</Text>
    </View>
  );
};
