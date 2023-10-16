import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingIn from '../pages/SingIn'
import SingInAdm from '../pages/SingInAdm'

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
            {/* Acima, é como criamos as várias telas. */}
        </Stack.Navigator>
    )
}
