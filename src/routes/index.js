import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingIn from '../pages/SingIn'
import SingInAdm from '../pages/SingInAdm'
import Filial from '../pages/Filial'
import FilialApurados from '../pages/FilialApurados'
import FilialAgendamentos from '../pages/FilialAgendamentos'
import FilialDespesas from '../pages/FilialDespesas'
import Matriz from '../pages/Matriz'
import MatrizApurados from '../pages/MatrizApurados'
import MatrizAgendamentos from '../pages/MatrizAgendamentos'
import MatrizDespesas from '../pages/MatrizDespesas'
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
                name="MatrizApurados"
                component={MatrizApurados}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MatrizAgendamentos"
                component={MatrizAgendamentos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MatrizDespesas"
                component={MatrizDespesas}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Filial"
                component={Filial}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FilialApurados"
                component={FilialApurados}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FilialAgendamentos"
                component={FilialAgendamentos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FilialDespesas"
                component={FilialDespesas}
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
