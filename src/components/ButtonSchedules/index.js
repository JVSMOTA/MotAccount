import { Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function ButtonSchedules({onPress}) {

  return (
    <TouchableOpacity onPress={onPress} style={styles.Container}>
      
      <Text style={styles.Title}>Agendamentos</Text>
      
      <Image style={styles.Icon} source={require('../../assets/agendamentos.png')}/>
    
    </TouchableOpacity>
  )
}
