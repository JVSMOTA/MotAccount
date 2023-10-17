import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingIn from '../pages/SingIn'
import SingInAdm from '../pages/SingInAdm'
import Filial from '../pages/Filial'
import Matriz from '../pages/Matriz'
import MenuAdm from '../pages/MenuAdm'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SingInAdm"
                component={SingInAdm}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Matriz"
                component={Matriz}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Filial"
                component={Filial}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MenuAdm"
                component={MenuAdm}
                options={{ headerShown: false }}
            />
            {/* Acima, é como criamos as várias telas. */}
        </Stack.Navigator>
    )
}
