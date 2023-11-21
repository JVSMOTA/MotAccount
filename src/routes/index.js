import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SingIn from '../pages/SingIn'
import SingInAdm from '../pages/SingInAdm'
import Menu from '../pages/Menu'
import Amount from '../pages/Amount'
import Schedules from '../pages/Schedules'
import Expenses from '../pages/Expenses'
import MenuAdm from '../pages/MenuAdm'

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>

            <Stack.Screen name="SingIn" 
                component={SingIn} 
                options={{ headerShown: false }}/>

            <Stack.Screen name="SingInAdm" 
                component={SingInAdm} 
                options={{ headerShown: false }}/>

            <Stack.Screen name="Menu" 
                component={Menu} 
                options={{ headerShown: false }}/>

            <Stack.Screen name="MenuAdm" 
                component={MenuAdm} 
                options={{ headerShown: false }}/>

            <Stack.Screen name="Amount" 
                component={Amount} 
                options={{ headerShown: false }}/>

            <Stack.Screen name="Schedules" 
                component={Schedules} 
                options={{ headerShown: false }}/>

            <Stack.Screen name="Expenses"
                component={Expenses} 
                options={{ headerShown: false }}/>

        </Stack.Navigator>
    )
}
