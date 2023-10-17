import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export default function InputAmount() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Apurado do dia</Text>
      <TextInput
        placeholder='R$ 00,00'
        style={styles.Input}
        editable={false}
      />
    </View>
  );
}
