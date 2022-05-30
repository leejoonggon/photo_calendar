import React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity, TextInput, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'; //네비게이션
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'; //네비게이션
import { SwipeMenuView } from './commonViews/SwipeMenuView';
import AppNavigation from './AppNavigation';
import { DateExportScreen } from './screens/dataExport/DateExportScreen';
import { NewInputScreen } from './screens/newInput/NewInputScreen';
import { SplashScreen } from './screens/SplashScreen';
import { SearchScreen } from './screens/SearchScreen';
import { PurchaseScreen } from './screens/PurchaseScreen';
import { InquireScreen } from './screens/InquireScreen';
import { EditInputScreen } from './screens/EditInputScreen';
import { ImageClickScreen } from './screens/ImageClickScreen';
import { TotalCalendarScreen } from './screens/TotalCalendarScreen';





















interface Props {}
interface State {}

const Drawer = createDrawerNavigator(); // 드로우 네비게이션 생성 및 선언

const test1 = ()=> {}; //const는 상수 선언이다 ( 상수란 한번 값을 정하면 변경할 수 없는 것 )
let test2: any = []; // 클래스 외부에서는 let 또는 var 변수 선언 가능

export default class App extends React.Component<Props, State> { // 클래스 시작

    // let test3 = ''; 클래스 내부에서는 let 또는 var 선언 불가능

    // 클래스내부에서는 아래 4가지 방식 변수선언만 가능
    private test4 = '1'; // 본인 클래스에서만 사용가능한 변수
    protected test5 = {}; // 본인 클래스이거나 상속된 클래스에서만 사용가능한 변수
    test6 = 1; // 은 페키지(앱) 안에서만 사용가능한 변수
    public test7 = false; // 같은 패키지(앱)이 아닌 외부 제3 프로그램에서 접근 가능한 변수

    constructor(props) { // 생성자 : 페이지가 처음 로딩 될 때 실행된다. 생성자 > 렌더 > componentDidMount 순서로 로딩
        super(props);
    }
    
    componentDidMount(): void { // 페이지가 렌더링 된 후 자동 실행되는 함수
        let test8 = ''; //클래스 내부이지만 함수 안에서는 let 또는 var 선언 가능

        // test1 = 1; // 한번 값이 정해진 const 는 값이 변경될 수 없다 ( 오류 )
        test2 = '2'; // const 가 아니면 값을 바꿀 수 있다. test2는 let 변수..이
    }


    componentWillUnmount(): void { // 페이지 생명 주기가 끝난 후 실행되어지는 함수
        
    }

 
    render(): React.ReactNode { // 렌더 함수
        return(
            <View style={styles.container}>
                <StatusBar 
                    hidden={true}
                />
                {
                    // 네비게이션을 쓰기위한 최상위 컨테이너 ( 필수임 ) 스택이던 드로우던 상관없이 필수 ( 최상단에 1번만 사용 )
                }
                {/* <NavigationContainer> 
                    <Drawer.Navigator //드로우 네비게이션 생성
                        screenOptions={ // 스크린 옵션들
                            {
                                drawerPosition: 'left', // 메뉴가 왼쪽에 열릴건지 오른쪽에 열린건지 
                                headerShown: false, // 드로우메뉴가 열렸을에 상단에 헤더가 존재할것인지
                                drawerStyle: { // 메뉴 전체 스타일
                                    width: 200,
                                    backgroundColor: 'yellow'
                                },
                                swipeEnabled: true // 제스처로 ( 스와이프 ) 메뉴를 열수있게 할것인지 
                            }
                        }
                        drawerContent={ (props)=>  // 드로우네비게이션에 기본 메뉴구성을 안쓰고 커스터마이징 메뉴를 쓸때 사용하는 프로퍼티
                            <SwipeMenuView /> 
                        }
                        initialRouteName='navigation' // 초기 스크린 
                        defaultStatus='closed' // 처음 앱이 켜졌을때 닫혀있을것인가 열려있을것인가 closed 가 닫혀잇는거
                        backBehavior='history' // 뒤로가기 버튼을 눌렀을때 행동방식 이전 스크린으로 돌아감 ( history )
                    >
                        {
                            // 드로우 네비게이션 스크린들
                        }  
                        <Drawer.Screen
                            name='navigation' 
                            component={ AppNavigation } 
                        />
                    </Drawer.Navigator>
                </NavigationContainer> */}

                < PurchaseScreen />
            </View>
        )
    }
} // 클래스 끝


export class OtherClass { // 한 페이지 안에 여러 클래스 생성 가능

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#876543'
    },
})