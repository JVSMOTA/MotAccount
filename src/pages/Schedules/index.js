import styles from './styles'
import { View, Text, ScrollView } from "react-native"

import * as Animatable from 'react-native-animatable'
import LargeButton from '../../components/LargeButton'
import DailyCalculation from '../../components/DailyCalculation'

export default function Schedules({ route }) {
  const { storeType } = route.params

  return (
    <View style={styles.Container}>

      <View style={styles.HeaderLaranja}/>    
      <View style={styles.PageContent}>
    
        <Animatable.View animation='fadeInDown' style={styles.MenuTop}>

          <Text style={styles.Title}>{storeType} / Agendamentos</Text>
          <LargeButton placeholder='Criar Agendamento'/>

        </Animatable.View>

        <Text style={styles.SubTitle}>Próximos Agendamentos</Text>

        <ScrollView style={styles.Menu}>

          <DailyCalculation></DailyCalculation>

        </ScrollView>

      </View>
    
    </View>
  )
}
