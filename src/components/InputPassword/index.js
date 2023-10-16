import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export default function InputPassword() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Senha</Text>
      <TextInput
        placeholder='Digite sua Senha'
        style={styles.Input}
      />
    </View>
  );
}
