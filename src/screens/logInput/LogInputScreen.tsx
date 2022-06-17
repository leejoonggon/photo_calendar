import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS, Pressable } from 'react-native';
import { DP, SP } from '../../util/size';

interface Props {navigation}
interface State {

}

export class LogInputScreen extends React.Component<Props, State> {

    constructor(props) {
        super(props);     
    }
    
    componentDidMount(): void {
        
    }


    componentWillUnmount(): void {
        
    }

    backNavigation() {
        this.props.navigation.pop()
    }

 
    render(): React.ReactNode {


        return(
            <View style={styles.container}>
                <StatusBar 
                    hidden={true}
                />
                <Pressable
                    onPress={ () => {
                        this.backNavigation ()

                    }}
                >
                    <View style={styles.backicon_box}>
                        <Image
                            source={require('../../resources/backicon.png')}
                            style={styles.backicon}
                        />
                    </View>
                </Pressable>

                <View style={styles.mainicon_box}>
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

                <View style={styles.mailinput_box}>
                    <View style={styles.mailinput_text_box}>                
                        <Text style={styles.mailinput_text}>
                            이메일을 입력하세요
                        </Text> 
                    </View>
                </View>

                <View style={styles.passwordinput_box}>
                    <View style={styles.passwordinput_text_box}>  
                        <Text style={styles.passwordinput_text}>
                            비밀번호를 입력하세요
                        </Text> 
                    </View>
                </View>

                <View style={styles.loginbutton_box}>
                    <View style={styles.loginbutton_text_box}>  
                        <Text style={styles.loginbutton_text}>
                            로그인
                        </Text>
                    </View>
                </View>

                <View style={styles.singupbutton_box}>
                    <View style={styles.singupbutton_text_box}>  
                        <Text style={styles.singupbutton_text}>
                            회원가입
                        </Text>
                    </View>
                </View>

                <View style={styles.loginsearch_box}>
                    <Text style={styles.loginsearch_text}>
                        아이디 / 비밀번호 찾기
                    </Text>
                </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', 
    },

    backicon_box: {
        // backgroundColor: 'grey',
        height: DP(48),
        marginTop: DP(24),
        justifyContent: 'center',
    },

    backicon: {
        // backgroundColor: 'red',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },

    mainicon_box: {
        // backgroundColor: 'green',
        height: DP(50),
        marginTop: DP(64),
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

    mailinput_box: {
        // backgroundColor: 'pink',
        height: DP(47),
        marginTop: DP(79),
        justifyContent: 'center',
        alignItems: 'center',
    },

    mailinput_text_box: {
        backgroundColor: '#FFFFFF',
        height: DP(47),
        width: DP(312),
        borderColor: '#F8F8F8',
        borderWidth: DP(2),
        justifyContent: 'center',
    },

    mailinput_text: {
        // backgroundColor: 'orange',
        height: DP(35),
        width: DP(143),
        marginLeft: DP(16),
        fontSize: SP(16),
        color: '#CCCCCC',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    
    passwordinput_box: {
        // backgroundColor: 'brown',
        height: DP(47),
        marginTop: DP(16),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    passwordinput_text_box: {
        backgroundColor: '#FFFFFF',
        height: DP(47),
        width: DP(312),
        borderColor: '#F8F8F8',
        borderWidth: DP(2),
        justifyContent: 'center',
    },

    passwordinput_text: {
        // backgroundColor: 'orange',
        height: DP(35),
        width: DP(158),
        marginLeft: DP(16),
        fontSize: SP(16),
        color: '#CCCCCC',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
         
    loginbutton_box: {
        // backgroundColor: 'blue',
        height: DP(47),
        marginTop: DP(16),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    loginbutton_text_box: {
        backgroundColor: '#F8F8F8',
        height: DP(47),
        width: DP(312),
        justifyContent: 'center',
        alignItems: 'center',
    },


    loginbutton_text: {
        // backgroundColor: 'orange',
        height: DP(35),
        width: DP(46),
        marginLeft: DP(16),
        fontSize: SP(16),
        color: '#383838',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    
    singupbutton_box: {
        // backgroundColor: 'brown',
        height: DP(47),
        marginTop: DP(16), 
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'row',     
    },

    singupbutton_text_box: {
        backgroundColor: '#F8F8F8',
        height: DP(47),
        width: DP(312),
        justifyContent: 'center',
        alignItems: 'center',
    },

    singupbutton_text: {
        // backgroundColor: 'orange',
        height: DP(35),
        width: DP(61),
        marginLeft: DP(16),
        fontSize: SP(16),
        color: '#383838',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    loginsearch_box: {
        // backgroundColor: 'brown',
        height: DP(47),
        marginTop: DP(16),
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    loginsearch_text: {
        // backgroundColor: '#F8F8F8',
        height: DP(35),
        width: DP(190),
        fontSize: SP(16),
        color: '#CCCCCC',
        textAlign: 'center',
        textAlignVertical: 'center',
    },


})