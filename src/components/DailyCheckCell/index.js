import { View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import { useEffect, useState } from 'react'

export default function DailyCheckCell({options = [], onChange}) {
  const [selected, setSelected] = useState([])

  function toggle(id){
    let index = selected.findIndex((i) => i === id) 
    let arraySelecteds = [...selected]
    if (index !== -1) {
      arraySelecteds.splice(index, 1)
    } else {
      arraySelecteds.push(id)
    }
    setSelected(arraySelecteds)
  }

  useEffect(() => onChange(selected), [selected])
  return (
    <View>
      {options.map((op, index) => (

        <View>

          <View style={styles.ContainerDay}>

            <Text style={styles.Dia}>{op?.dia}</Text>
            <Text style={styles.Data}>{op?.data}</Text>

          </View>      

          <View style={styles.Container}>

            <TouchableOpacity style={[styles.CheckBox,{
              backgroundColor: selected.findIndex(i=> i === op.id) !== -1 ? "#FF9B3F": "#FFFFFF"
            }]} onPress={() => toggle(op?.id)}>
              
              {selected.findIndex(i=> i === op.id) !== -1 ? (
                <Icon name='check-bold' color={'#FFFFFF'} size={20}/> 
              ): null 
              }

            
            </TouchableOpacity>

            <View style={styles.Celula}>

              <Text style={styles.Razao}>{op?.razao}</Text>
              <Text style={styles.Valor}>R$ {op?.valor}</Text>

            </View>
          </View>
        </View>
      ))}
    </View>
  )
}
