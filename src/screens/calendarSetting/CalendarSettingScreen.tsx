import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { DP, SP } from '../../util/size';

interface Props {}
interface State {

}

export class CalendarSettingScreen extends React.Component<Props, State> {

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
                    <Image
                        source={require('../../resources/backicon.png')}
                        style={styles.backicon}
                    />
                    <Text style={styles.headertitle_text}>
                        캘린더 설정
                    </Text>
                </View>

                 {/* 팝업 메세지  */}
                {/* <View style={styles.popup}>
                    <Text style={styles.edit_text}>
                        수정
                    </Text>

                    <Text style={styles.delete_text}>
                        삭제
                    </Text>
                </View> */}
               
                <View style={styles.subtitle_box}>
                    <Text style={styles.subtitle_text}>
                        기본 캘린더
                    </Text>

                    <Image
                        source={require('../../resources/menuicon.png')}
                        style={styles.menuicon}
                    />
                    <Image
                        source={require('../../resources/positionchange.png')}
                        style={styles.positionchange}
                    />
                </View>

                <View style={styles.subtitle_box}>
                    <Text style={styles.subtitle_text}>
                        다이어트
                    </Text>

                    <Image
                        source={require('../../resources/menuicon.png')}
                        style={styles.menuicon}
                    />
                    <Image
                        source={require('../../resources/positionchange.png')}
                        style={styles.positionchange}
                    />
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
        marginBottom: DP(8),
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

    subtitle_box: {
        // backgroundColor: 'blue',
        height: DP(40),
        marginTop: DP(8),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    subtitle_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(100),
        fontSize: SP(18),
        color: '#555555',
        textAlignVertical: 'center',
    },

    menuicon: {
        // backgroundColor: 'black',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(164),
    },

    positionchange: {
        // backgroundColor: 'red',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },
    
// 팝업 메세지
    // popup: {
    //     position: 'absolute',
    //     backgroundColor: 'black',
    //     height: DP(120),
    //     width: DP(100),
    //     justifyContent: 'center',
    //     marginLeft: DP(180),
    //     marginTop: DP(90),
    // },

    // edit_text: {
    //     // backgroundColor: 'black',
    //     height: DP(44),
    //     width: DP(100),
    //     color: '#777777',
    //     fontSize: SP(18),
    //     textAlign: 'center',
    //     textAlignVertical: 'center',
    // },

    // delete_text: {
    //     // backgroundColor: 'black',
    //     height: DP(44),
    //     width: DP(100),
    //     color: '#777777',
    //     fontSize: SP(18),
    //     textAlign: 'center',
    //     textAlignVertical: 'center',
    // },

}) 