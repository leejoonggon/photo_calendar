import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { displayPartsToString } from 'typescript';
import { DP, SP } from '../../util/size';

interface Props {}
interface State {

}

export class ConditionsAgreeScreen extends React.Component<Props, State> {

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
                    <Text style={styles.headertitle_text}>
                        {
                            '약관에 동의하시면\n회원가입이 완료됩니다.'
                        }
                    </Text>
                </View>           

                <View style={styles.allcontent_box}>

                    <View style={styles.content_title_box}>
                        <Image
                            source={require('../../resources/check_off.png')}
                            style={styles.check_off}
                        />
                        <Text style={styles.content_title_text}>
                            모두 동의하기
                        </Text>
                    </View>

                    <View style={styles.line}>
                    </View>

                    <View style={styles.content_subtitle_box}>
                        <Image
                            source={require('../../resources/saveicon_20.png')}
                            style={styles.saveicon}
                        />
                        <Text style={styles.content_subtitle_text}>
                            서비스 이용약관 (필수)
                        </Text>
                        <Text style={styles.content_pre_text}>
                            보기
                        </Text>
                    </View>

                    <View style={styles.content_subtitle_box}>
                        <Image
                            source={require('../../resources/saveicon_20.png')}
                            style={styles.saveicon}
                        />
                        <Text style={styles.content_subtitle_text}>
                            개인정보 처리방침 (필수)
                        </Text>
                        <Text style={styles.content_pre_text}>
                            보기
                        </Text>
                    </View>
                    

                    <View style={styles.content_subtitle_box}>
                        <Image
                            source={require('../../resources/saveicon_20.png')}
                            style={styles.saveicon}
                        />
                        <Text style={styles.content_subtitle_text}>
                            위치기반 서비스 이용약관 (필수)
                        </Text>
                        <Text style={styles.content_pre_text}>
                            보기
                        </Text>
                    </View>

                    <View style={styles.content_subtitle_box}>
                        <Image
                            source={require('../../resources/saveicon_20.png')}
                            style={styles.saveicon}
                        />
                        <Text style={styles.content_subtitle_text}>
                            마케팅 정보 수신 동의 (선택)
                        </Text>
                        <Text style={styles.content_pre_text}>
                            보기
                        </Text>
                    </View>

                    <View style={styles.subtitle_box}>
                        <Text style={styles.subtitle_text}>
                            할인쿠폰, 이벤트 알림받기
                        </Text>
                    </View>
                  
                </View>

                <View style={styles.confirm_btn_box}>
                    <Text style={styles.confirm_btn_text}>
                        동의하고 가입하기
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
        height: DP(58),
        marginTop: DP(48),
        alignItems: 'center',
        justifyContent: 'center',
    },

    headertitle_text: {
        // backgroundColor: 'orange',
        height: DP(58),
        width: DP(312),
        fontSize: SP(20),
        lineHeight: SP(23.4+5),
        color: '#383838',
        // textAlignVertical: 'center',
    },

    allcontent_box: {
        // backgroundColor: 'brown',
        height: DP(243),
        marginTop: DP(155),
        paddingTop: DP(16),
    },

    content_title_box: {
        // backgroundColor: 'yellow',
        height: DP(30),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    check_off: {
        // backgroundColor: 'white',
        height: DP(20),
        width: DP(20),
    },

    content_title_text: {
        // backgroundColor: 'orange',
        height: DP(30),
        width: DP(284),
        marginLeft: DP(16),
        fontSize: SP(18),
        color: '#444444',
        textAlignVertical: 'center',
    },

    line: {
        backgroundColor: '#E8E8E8',
        height: DP(1),
        width: DP(328),
        marginTop: DP(14),
        marginLeft: DP(16),
    },


    content_subtitle_box: {
        // backgroundColor: 'green',
        height: DP(20),
        marginTop: DP(14),
        alignItems: 'center',
        flexDirection: 'row',
    },

    saveicon: {
        // backgroundColor: 'white',
        height: DP(20),
        width: DP(20),
        marginLeft: DP(16),
    },

    content_subtitle_text: {
        // backgroundColor: 'orange',
        height: DP(16),
        width: DP(261),
        marginLeft: DP(8),
        fontSize: SP(14),
        lineHeight: SP(16.41),
        color: '#444444',
    },

    content_pre_text: {
        // backgroundColor: 'orange',
        height: DP(16),
        width: DP(26),
        marginLeft: DP(8),
        fontSize: SP(14),
        lineHeight: SP(16.41),
        color: '#444444',
    },

    subtitle_box: {
        // backgroundColor: 'green',
        height: DP(20),
        marginTop: DP(2),
        alignItems: 'center',
        flexDirection: 'row',
    },

    subtitle_text: {
        // backgroundColor: 'pink',
        height: DP(16),
        width: DP(261),
        marginLeft: DP(44),
        fontSize: SP(14),
        lineHeight: SP(16.41),
        color: '#444444',
    },    

    confirm_btn_box: {
        // backgroundColor: 'skyblue',
        backgroundColor: '#F8F8F8',
        height: DP(47),
        width: DP(312),
        marginTop: DP(21),
        marginLeft: DP(24),
        justifyContent: 'center',
        alignItems: 'center',  
        borderRadius: DP(4), 
    },

    confirm_btn_text: {
        //  backgroundColor: 'orange',
         height: DP(35),
         width: DP(122),
         fontSize: SP(16),
         lineHeight: SP(35),  
         color: '#444444',
         textAlign: 'center',
    },

  

})