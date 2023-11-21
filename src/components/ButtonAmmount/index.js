import { Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function ButtonAmmount({ onPress }) {

  return (
    <TouchableOpacity onPress={onPress} style={styles.Container}>
      
      <Text style={styles.Title}>Apurados</Text>
      
      <Image style={styles.Icon} source={require('../../assets/apurados.png')}/>
    
    </TouchableOpacity>
  )
}
