import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export default function InputEmail() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Email</Text>
      <TextInput
        placeholder='Digite seu Email'
        style={styles.Input}
      />
    </View>
  );
}
