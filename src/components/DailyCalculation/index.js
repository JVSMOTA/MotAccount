import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export default function DailyCalculation({fisico, cartao}) {
  return (
    <View style={styles.Container}>
      <View style={styles.Celula}>
        <Text style={styles.Tipo}>Físico</Text>
        <Text style={styles.Valor}>R$ {fisico}</Text>
      </View>
      <View style={styles.Celula}>
        <Text style={styles.Tipo}>Cartão</Text>
        <Text style={styles.Valor}>R$ {cartao}</Text>
      </View>
    </View>
  );
}
