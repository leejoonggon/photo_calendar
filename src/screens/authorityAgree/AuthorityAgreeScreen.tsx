import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { displayPartsToString } from 'typescript';
import { DP, SP } from '../../util/size';

interface Props {}
interface State {

}

export class AuthorityAgreeScreen extends React.Component<Props, State> {

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
                            '포토 캘린더 이용을 위해\n아래 권한이 필요합니다.'
                        }
                    </Text>
                    <Text style={styles.headertitle_subtext}>
                        선택 권한은 동의하지 않아도 서비스 이용이 가능합니다.
                    </Text>
                </View>           

                <View style={styles.content_box}>
                    <View style={styles.content_title_box}>
                        <Image
                            source={require('../../resources/saveicon.png')}
                            style={styles.saveicon}
                        />
                        <Text style={styles.content_title_text}>
                            사진첩 (필수)
                        </Text>
                    </View>
                    <View style={styles.content_subtitle_box}>
                        <Text style={styles.content_subtitle_text}>
                            프로필 사진 등록, 사진 첨부등을 위해 사용
                        </Text>
                    </View>

                    <View style={styles.content_title_box}>
                        <Image
                            source={require('../../resources/saveicon.png')}
                            style={styles.saveicon}
                        />
                        <Text style={styles.content_title_text}>
                            알림 (선택)
                        </Text>
                    </View>
                    <View style={styles.content_subtitle_box}>
                        <Text style={styles.content_subtitle_text}>
                            서비스 필수 정보, 기타 안내를 위해 사용
                        </Text>
                    </View>

                    <View style={styles.content_title_box}>
                        <Image
                            source={require('../../resources/saveicon.png')}
                            style={styles.saveicon}
                        />
                        <Text style={styles.content_title_text}>
                            위치 (선택)
                        </Text>
                    </View>
                    <View style={styles.content_subtitle_box}>
                        <Text style={styles.content_subtitle_text}>
                            백그라운드 위치 사용
                        </Text>
                    </View>

                </View>

                <View style={styles.confirm_btn_box}>
                    <Text style={styles.confirm_btn_text}>
                        확인
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
        height: DP(58+32),
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

    headertitle_subtext: {
        // backgroundColor: 'orange',
        height: DP(16),
        width: DP(312),
        marginTop: DP(16),
        fontSize: SP(12),
        color: '#444444',
        textAlignVertical: 'center',
    },

    content_box: {
        // backgroundColor: 'yellow',
        height: DP(204),
        paddingTop: DP(10),
    },

    content_title_box: {
        // backgroundColor: 'pink',
        height: DP(24),
        justifyContent: 'center',
        flexDirection: 'row',
    },

    saveicon: {
        // backgroundColor: 'white',
        height: DP(24),
        width: DP(24),
    },

    content_title_text: {
        // backgroundColor: 'white',
        height: DP(24),
        width: DP(280),
        marginLeft: DP(8),
        fontSize: SP(16),
        color: '#444444',
        textAlignVertical: 'center',
    },

    content_subtitle_box: {
        // backgroundColor: 'green',
        height: DP(16),
        marginBottom: DP(20),
    },

    content_subtitle_text: {
        // backgroundColor: 'orange',
        height: DP(16),
        width: DP(280),
        marginLeft: DP(56),
        fontSize: SP(12),
        color: '#444444',
        textAlignVertical: 'center',
    },

    confirm_btn_box: {
        // backgroundColor: 'skyblue',
        backgroundColor: '#F8F8F8',
        height: DP(47),
        width: DP(312),
        marginTop: DP(177),
        marginLeft: DP(24),
        justifyContent: 'center',
        alignItems: 'center',  
        borderRadius: DP(4), 
    },

    confirm_btn_text: {
        //  backgroundColor: 'orange',
         height: DP(35),
         width: DP(31),
         fontSize: SP(16),
         lineHeight: SP(35),  
         color: '#444444',
         textAlign: 'center',
    },




  

})