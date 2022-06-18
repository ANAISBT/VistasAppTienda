import { Categorias, Details, Products } from '../screen/index';

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();//iniciar el Stack

const ShopNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName='Categorias'>
            {/* dentro del stack */}
            <Stack.Screen name='Categorias' component={Categorias} />
            <Stack.Screen name='Products' component={Products} />
            <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
    )
}
export default ShopNavigator;

