import React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity, TextInput, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { MainScreen } from './screens/MainScreen';

interface Props {}
interface State {

}

const Drawer = createDrawerNavigator();

export default class App extends React.Component<Props, State> {

    constructor(props) {
        super(props);     
    }
    
    componentDidMount(): void {
        
    }


    componentWillUnmount(): void {
        
    }

 
    render(): React.ReactNode {


        return(
            <View style={styles.container}>
                <StatusBar 
                    hidden={true}
                />
                <NavigationContainer>
                    <Drawer.Navigator
                        screenOptions={{
                            drawerPosition: 'left',
                            headerShown: false,
                            drawerStyle: {
                                width: 280, 
                                backgroundColor: '#999999'
                            }
                        }} 
                        drawerContent={(props)=> 
                            <View style={{backgroundColor: 'red', width: 100, height: 100}}>

                            </View>
                        }
                        backBehavior='history'
                        defaultStatus='closed'
                        initialRouteName={'main'}
                    >
                        <Drawer.Screen 
                            name="main" 
                            component={ MainScreen } 
                        />
                    </Drawer.Navigator>
                </NavigationContainer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#876543'
    },

    button: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        marginTop: 30
    }
})