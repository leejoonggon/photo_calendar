import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS, Pressable } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { DP, SP } from '../../util/size';

interface Props { navigation }
interface State {

}

export class MyProfileScreen extends React.Component<Props, State> {

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

                <View style={styles.header_box}>
                    <Pressable
                        onPress={ () => {
                            this.props.navigation.pop()
                        }}
                    >
                        <Image
                            source={require('../../resources/backicon.png')}
                            style={styles.backicon}
                        />
                    </Pressable>

                    <Text style={styles.headertitle_text}>
                        내정보
                    </Text>
                </View>
                            
                <View style={styles.profile_box}>
                    {/* <View style={styles.profileimage_box}>
                    </View> */}

                    <View style={styles.profileimage_box}>
                    </View>

                    <Text style={styles.profile_text}>
                        사진 변경
                    </Text>
                </View>

                <View style={styles.nickname_box}>
                    <Text style={styles.nickname_text}>
                        닉네임은6글
                    </Text>

                    <Text style={styles.change_text}>
                        변경
                    </Text>
                </View>

                <View style={styles.mail_box}>
                    <Text style={styles.mail_text}>
                        ryuryuu030@naver.com
                    </Text>

                    <Text style={styles.change_text}>
                        변경
                    </Text>
                </View>

                <View style={styles.password_box}>
                    <Text style={styles.password_text}>
                        비밀번호
                    </Text>

                    <Text style={styles.change_text}>
                        변경
                    </Text>
                </View>

                <View style={styles.line_box}>
                    <View style={styles.line}>
                    </View>
                </View>

                <View style={styles.logout_box}>
                    <Text style={styles.logout_text}>
                        로그아웃
                    </Text>
                </View>

                <View style={styles.withdrawal_box}>
                    <Text style={styles.withdrawal_text}>
                        회원탈퇴
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

    header_box: {
        // backgroundColor: 'grey',
        height: DP(48),
        marginTop: DP(24),
        alignItems: 'center',
        flexDirection: 'row',
    },

    backicon: {
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },

    headertitle_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(140),
        marginLeft: DP(70),
        fontSize: SP(20),
        color: '#383838',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    profile_box: {
        backgroundColor: 'green',
        height: DP(94),        
        marginTop: DP(16),
        flexDirection: 'row',
        alignItems: 'center',
    },

    profileimage_box: {
        backgroundColor: 'red',
        height: DP(62),
        Width: DP(62),
    },

    profile_text: {
        backgroundColor: 'grey',
        height: DP(40),
        marginLeft: DP(18),
        fontSize: SP(18),
        color: '#444444',
        fontFamily: 'Roboto',
        textAlignVertical: 'center',
    },
  
    nickname_box: {
        // backgroundColor: 'blue',
        height: DP(40),
        marginTop: DP(10),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    nickname_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(274),
        fontSize: SP(18),
        color: '#444444',
        textAlignVertical: 'center',
    },

    change_text: {
        // backgroundColor: 'black',
        height: DP(24),
        width: DP(38),
        marginLeft: DP(16),
        fontSize: SP(16),
        color: '#BBBBBB',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    
    mail_box: {
        // backgroundColor: 'blue',
        height: DP(40),
        marginTop: DP(8),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    mail_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(274),
        fontSize: SP(18),
        color: '#444444',
        textAlignVertical: 'center',
    },

    password_box: {
        // backgroundColor: 'blue',
        height: DP(40),
        marginTop: DP(8),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    password_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(274),
        fontSize: SP(18),
        color: '#444444',
        textAlignVertical: 'center',
    },

    line_box: {
        // backgroundColor: 'pink',
        height: DP(1),
        marginTop: DP(208), 
        alignItems: 'center',
    },

    line: {
        backgroundColor: '#EEEEEE',
        height: DP(1),
        width: DP(328),
    },

    logout_box: {
        // backgroundColor: 'brown',
        height: DP(40),
        marginTop: DP(8),
        justifyContent: 'center',
        alignItems: 'center',
    },

    logout_text: {
        backgroundColor: '#F8F8F8',
        height: DP(24),
        width: DP(328),
        fontSize: SP(18),
        color: '#444444',
        textAlignVertical: 'center',
    },

    withdrawal_box: {
        // backgroundColor: 'brown',
        height: DP(40),
        marginTop: DP(8),
        justifyContent: 'center',
        alignItems: 'center',
    },

    withdrawal_text: {
        backgroundColor: '#F8F8F8',
        height: DP(24),
        width: DP(328),
        fontSize: SP(18),
        color: '#ED6D6D',
        textAlignVertical: 'center',
    },


})