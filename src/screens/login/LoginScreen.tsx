import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, Pressable } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { DP, SP } from '../../util/size';

interface Props {
    navigation,
    route
}
interface State {

}

export class LoginScreen extends React.Component<Props, State> {

    constructor(props) {
        super(props);     
    }
    
    componentDidMount(): void {
        
    }


    componentWillUnmount(): void {
        
    }

    setNavigationScreen(name) {
        this.props.navigation.push(name);
    } 
        
    render(): React.ReactNode {
        console.log(this.props.aa)

        return(
            <View style={styles.container}>
                <StatusBar 
                    hidden={true}
                />
                <Text>
                   {this.props.aa}
                </Text>
                {/* <TouchableOpacity 
                    style={{width: 100, height: 100, backgroundColor: 'blue'}}
                    onPress = { () => {
                        //this.props.navigation.toggleDrawer();

                        console.log(this.props.route.params.name)
                    } }
                />
                
               

                <TouchableOpacity 
                    style={{width: 100, height: 100, backgroundColor: 'red'}}
                    onPress = { () => {
                        this.props.navigation.push('setting');
                    } }
                /> */}

     
                {/* <View style={styles.mainicon_box}>
                    <View style={styles.mainicon}>
                        <Image
                            source={require('../../resources/mainicon.png')}
                            style={styles.mainicon}
                        />
                    </View>
                </View>

                <View style={styles.apptitle_box}>
                    <Text style={styles.apptitle_text}>
                        {
                            "Photo\ncalendar"
                        }
                    </Text>
                </View>

                <View style={styles.guestlogin_box}>
                    <Pressable
                        onPress={()=> {
                            this.props.navigation.push('main')
                        } }
                    >
                        <Text style={styles.guestlogin_text}>
                            로그인 / 회원가입 안할래요:)
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.googlelogin_box}>
                    <View style={styles.googlelogin_back}>
                        <Image
                            source={require('../../resources/googleicon.png')}
                            style={styles.googleimage}
                        />
                        <Text style={styles.googlelogin_text}>
                            구글 로그인
                        </Text>
                    </View>
                </View>

                <View style={styles.naverlogin_box}>
                    <View style={styles.naverlogin_back}>
                        <Image
                            source={require('../../resources/navericon.png')}
                            style={styles.naverimage}
                        />
                        <Text style={styles.naverlogin_text}>
                            네이버 로그인
                        </Text>
                    </View>
                </View>

                <View style={styles.kakaologin_box}>
                    <View style={styles.kakaologin_back}>
                        <Image
                            source={require('../../resources/kakaotalkicon.png')}
                            style={styles.kakaoimage}
                        />
                        <Text style={styles.kakaologin_text}>
                            카카오 로그인
                        </Text>
                    </View>
                </View>
                
                <Pressable
                    onPress = { () => {
                       this.setNavigationScreen('loginput');
                    }}
                >
                   
                    <View style={styles.login_box}>
                        <Text style={styles.login_text}>
                            이메일로 로그인 / 회원가입
                        </Text>
                    </View>
                </Pressable> */}
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    mainicon_box: {
        // backgroundColor: 'green',
        height: DP(50),
        marginTop: DP(136),
        alignItems: 'center',
    },

    mainicon: {
        // backgroundColor: 'red',
        height: DP(50),
        width: DP(50),
    },

    apptitle_box: {
        // backgroundColor: 'grey',
        height: DP(48),
        marginTop: DP(4),
        justifyContent: 'center',
        alignItems: 'center',
    },

    apptitle_text: {
        // backgroundColor: 'yellow',
        height: DP(48),
        width: DP(108),
        fontSize: SP(20),
        color: '#383838',
        fontFamily: 'Roboto',
        textAlign: 'center',
    },

    guestlogin_box: {
        // backgroundColor: 'pink',
        height: DP(47),
        marginTop: DP(79),
        justifyContent: 'center',
        alignItems: 'center',
    },

    guestlogin_text: {
        // backgroundColor: 'orange',
        height: DP(35),
        width: DP(201),
        fontSize: SP(16),
        color: '#383838',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    
    googlelogin_box: {
        // backgroundColor: 'brown',
        height: DP(47),
        marginTop: DP(16),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    googlelogin_back: {
        backgroundColor: '#F8F8F8',
        height: DP(47),
        width: DP(312),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    googleimage: {
        // backgroundColor: 'red',
        height: DP(24),
        width: DP(24),
        // alignItems: 'center',
        justifyContent: 'center',
    },

    googlelogin_text: {
        // backgroundColor: 'orange',
        height: DP(35),
        width: DP(97),
        marginLeft: DP(16),
        fontSize: SP(16),
        color: '#383838',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
         
    naverlogin_box: {
        // backgroundColor: 'brown',
        height: DP(47),
        marginTop: DP(16),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    
    naverlogin_back: {
        backgroundColor: '#F8F8F8',
        height: DP(47),
        width: DP(312),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    naverimage: {
        // backgroundColor: 'red',
        height: DP(24),
        width: DP(24),
    },

    naverlogin_text: {
        // backgroundColor: 'orange',
        height: DP(35),
        width: DP(97),
        marginLeft: DP(16),
        fontSize: SP(16),
        color: '#383838',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    
    kakaologin_box: {
        // backgroundColor: 'brown',
        height: DP(47),
        marginTop: DP(16), 
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'row',     
    },

    kakaologin_back: {
        backgroundColor: '#F8F8F8',
        height: DP(47),
        width: DP(312),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    kakaoimage: {
        // backgroundColor: 'red',
        height: DP(24),
        width: DP(24),
    },

    kakaologin_text: {
        // backgroundColor: 'orange',
        height: DP(35),
        width: DP(97),
        marginLeft: DP(16),
        fontSize: SP(16),
        color: '#383838',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    login_box: {
        // backgroundColor: 'brown',
        height: DP(47),
        marginTop: DP(16),
        justifyContent: 'center',
        alignItems: 'center',
    },

    login_text: {
        // backgroundColor: '#F8F8F8',
        height: DP(35),
        width: DP(190),
        fontSize: SP(16),
        color: '#CCCCCC',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

})