import React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity, TextInput, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; //네비게이션
import { LoginScreen } from './screens/login/LoginScreen';
import { LogInputScreen } from './screens/logInput/LogInputScreen';
import { SignUpScreen } from './screens/signUp/SignUpScreen';
import { SettingScreen } from './screens/setting/SettingScreen';
import { MyProfileScreen } from './screens/myProfile/MyProfileScreen';
import { NewInputScreen } from './screens/newInput/NewInputScreen';
import { CalendarSettingScreen } from './screens/calendarSetting/CalendarSettingScreen';
import { DataExportScreen } from './screens/dataExport/DataExportScreen';
import { LockSettingScreen } from './screens/lockSetting/LockSettingScreen';
import { AuthorityAgreeScreen } from './screens/authorityAgree/AuthorityAgreeScreen';
import { ConditionsAgreeScreen } from './screens/conditionsAgree/ConditionsAgreeScreen';
import { EditInputScreen } from './screens/editInput/EditInputScreen';
import { ImageClickScreen } from './screens/imageClick/ImageClickScreen';
import { InquireScreen } from './screens/inquire/InquireScreen';
import { MonthPhotoScreen } from './screens/monthPhoto/MonthPhotoScreen';
import { PasswordScreen } from './screens/password/PasswordScreen';
import { PurchaseScreen } from './screens/purchase/PurchaseScreen';
import { SearchScreen } from './screens/search/SearchScreen';
import { SplashScreen } from './screens/splash/SplashScreen';
import { TotalCalendarScreen } from './screens/totalCalendar/TotalCalendarScreen';
import { MainScreen } from './screens/main/MainScreen';



import { ScreenStackHeaderLeftView } from 'react-native-screens';





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
                        initialRouteName='login' 
                    > 
                        {
                            // 스택 네비게이션 스크린들
                        }  
                        <Stack.Screen
                            name='login'
                            component={ LoginScreen }
                            initialParams={{
                                name: '이유진',
                                age: 30
                            }}
                        />

                        <Stack.Screen
                            name= 'splash'
                            component={ SplashScreen }
                        />
                        <Stack.Screen
                            name= 'main'
                            component={ MainScreen }
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

                        <Stack.Screen
                            name='newinput'
                            component={ NewInputScreen }
                        />

                        <Stack.Screen
                            name='calendarsetting'
                            component={ CalendarSettingScreen }
                        />

                        <Stack.Screen
                            name='dataexport'
                            component={ DataExportScreen }
                        />

                        <Stack.Screen  
                            name= 'locksetting'
                            component={ LockSettingScreen}
                        />

                        <Stack.Screen
                            name= 'authorityagree'
                            component={ AuthorityAgreeScreen }
                        />

                        <Stack.Screen
                            name= 'conditionsagree'
                            component={ ConditionsAgreeScreen }
                        />

                        <Stack.Screen 
                            name= 'editinput'
                            component={ EditInputScreen }
                        />
                        
                        <Stack.Screen 
                            name= 'imageclick'
                            component={ ImageClickScreen }
                        />

                        <Stack.Screen   
                            name= 'inquire'
                            component={ InquireScreen }
                        />

                        <Stack.Screen   
                            name= 'monthphoto'
                            component={ MonthPhotoScreen }
                        />

                        <Stack.Screen
                            name= 'password'
                            component={ PasswordScreen }
                        />

                        <Stack.Screen
                            name= 'purchase'
                            component={ PurchaseScreen }
                        />

                        <Stack.Screen 
                            name= 'search'
                            component={ SearchScreen }
                        /> 

                        <Stack.Screen
                            name= 'totalcalendar'
                            component={ TotalCalendarScreen }
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