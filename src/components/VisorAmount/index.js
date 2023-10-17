import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export default function VisorAmount({placeholder, title}) {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>{title}</Text>
      <Text style={styles.Input}>R$ {placeholder}</Text>
    </View>
  );
}
