import styles from './styles'
import { View, Text } from "react-native"
import Button from '../../components/Button'
import ButtonLogOut from '../../components/ButtonLogOut'
import ButtonAmmount from '../../components/ButtonAmmount'
import ButtonSchedules from '../../components/ButtonSchedules'
import ButtonExpenses from '../../components/ButtonExpenses'

import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import DateTime from '../../components/DateTime'
import DailyCalculation from '../../components/DailyCalculation'

export default function Menu({ route }) {
  const { storeType } = route.params
  const navigation = useNavigation()
  
  const navigateToAmount = (storeType) => {
    navigation.navigate('Amount', { storeType })
  }
  const navigateToSchedules = (storeType) => {
    navigation.navigate('Schedules', { storeType })
  }
  const navigateToExpenses = (storeType) => {
    navigation.navigate('Expenses', { storeType })
  }

  return (
    <View style={styles.Container}>
      
      <View style={styles.HeaderLaranja}/>
      <View style={styles.PageContent}>
        
        <Animatable.View animation='fadeInDown' style={styles.MenuTop}>
        
          <Text style={styles.Title}>Sapataria {storeType}</Text>
          <DateTime/>
          <DailyCalculation dia={null} data={null} fisico='00,00' cartao='00,00'/>
          <Button placeholder='Alterar'/>
        
        </Animatable.View>
        <Animatable.View style={styles.Menu}>
      
          <ButtonAmmount onPress={() => navigateToAmount(storeType)}/>
          <ButtonSchedules onPress={() => navigateToSchedules(storeType)}/>
          <ButtonExpenses onPress={() => navigateToExpenses(storeType)}/>

        </Animatable.View>
        
        <ButtonLogOut placeholder='Sair'/>
      
      </View>

    </View>
  )
}
