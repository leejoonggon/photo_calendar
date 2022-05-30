import React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity, TextInput, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; //네비게이션
import { LoginScreen } from './screens/login/LoginScreen';
import { LogInputScreen } from './screens/logInput/LogInputScreen';
import { SignUpScreen } from './screens/signUp/SignUpScreen';
import { SettingScreen } from './screens/setting/SettingScreen';
import { MyProfileScreen } from './screens/myProfile/MyProfileScreen';

interface Props {}
interface State {}

const Stack = createStackNavigator(); // 스택 네비게이션 생성 및 선언

export default class AppNavigation extends React.Component<Props, State> { 

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
                
                    <Stack.Navigator // 스택 네비게이션 생성
                        screenOptions={{
                            headerShown: false
                        }}
                        initialRouteName='setting' 
                    > 
                        {
                            // 스택 네비게이션 스크린들
                        }  
                        <Stack.Screen
                            name='login'
                            component={ LoginScreen }
                        />
                        <Stack.Screen
                            name='loginput'
                            component={ LogInputScreen }
                        />
                        <Stack.Screen
                            name='signup'
                            component={ SignUpScreen }
                        />
                        <Stack.Screen
                            name='setting'
                            component={ SettingScreen }
                        />
                        <Stack.Screen
                            name='myprofile'
                            component={ MyProfileScreen }
                        />
                    </Stack.Navigator>

            </View>
        )
    }
}


export class OtherClass { // 한 페이지 안에 여러 클래스 생성 가능

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#876543'
    },
})