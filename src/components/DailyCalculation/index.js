import { View, Text} from 'react-native'
import styles from './styles'

export default function DailyCalculation({dia, data, fisico, cartao}) {
  
  const isDayAndDataNull = dia === null && data === null;

  return (
    <View>
      {isDayAndDataNull ? null : (
        <View style={styles.ContainerDay}>
          <Text style={styles.Dia}>{dia}</Text>
          <Text style={styles.Data}>{data}</Text>
        </View>
      )}
      
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
    </View>
  )
}
