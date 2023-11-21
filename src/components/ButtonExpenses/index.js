import { Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function ButtonExpenses({onPress}) {
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.Container}>
      
      <Text style={styles.Title}>Despesas</Text>
      
      <Image style={styles.Icon} source={require('../../assets/despesas.png')}/>
    
    </TouchableOpacity>
  )
}
