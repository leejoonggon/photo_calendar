import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { formatDiagnosticsWithColorAndContext } from 'typescript';
import { DP, SP } from '../../util/size';

interface Props {}
interface State {

}

export class NewInputScreen extends React.Component<Props, State> {

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
                        24년 12월12일
                    </Text>
                    <Image
                        source={require('../../resources/saveicon.png')}
                        style={styles.saveicon}
                    />
                </View>
                            
                <View style={styles.image_box}>                
                    <View style={styles.imageinput_box}>
                        <Text style={styles.imageinput_text}>
                            +
                        </Text>
                    </View>

                    <View style={styles.imageinput_box}>
                        <Text style={styles.imageinput_text}>
                            +
                        </Text>
                    </View>

                    <View style={styles.imageinput_box}>
                        <Text style={styles.imageinput_text}>
                            +
                        </Text>
                    </View>
                </View>

                <View style={styles.imagetext_box}>                
                    <Text style={styles.imagetext_text}>
                        대표사진
                    </Text>
                </View>

                <View style={styles.input_box}>
                    <View style={styles.inputtext_box}>
                        <Text style={styles.scheduleinput_text}>
                            일정을 입력하세요
                        </Text>
                    </View>

                    <View style={styles.inputtext_box}>
                        <Text style={styles.memoinput_text}>
                            메모를 입력하세요
                        </Text>
                    </View>
                </View>

                <View style={styles.colorselect_box}>
                    <Image
                        source={require('../../resources/colornone.png')}
                        style={styles.colornone}
                    />
                    <Text style={styles.colorselect_text}>
                        컬러 설정
                    </Text>
                    <Image
                        source={require('../../resources/unfold.png')}
                        style={styles.unfold}
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
        width: DP(150),
        marginLeft: DP(16),
        fontSize: SP(20),
        lineHeight: DP(23.44),
        color: '#383838',
    },
    
    saveicon: {
        // backgroundColor: 'red',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(114),
    },

    image_box: {
        // backgroundColor: 'green',
        height: DP(88),        
        marginTop: DP(20),
        paddingLeft: DP(24),
        paddingRight: DP(24),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    imageinput_box: {
        backgroundColor: '#FFFFFF',
        height: DP(80),
        width: DP(80),
        borderColor: '#EEEEEE',
        borderWidth: DP(2),
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageinput_text: {
        // backgroundColor: 'grey',
        height: DP(24),
        width: DP(24),
        fontSize: SP(24),
        lineHeight: DP(26),
        color: '#CCCCCC',
        textAlign: 'center',
    },
 
    imagetext_box: {
        // backgroundColor: 'blue',
        height: DP(24),
        paddingLeft: DP(25),
        justifyContent: 'center',
    },

    imagetext_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(79),
        fontSize: SP(14),
        color: '#777777',
        textAlignVertical: 'center',
        textAlign: 'center',
    },

    input_box: {
        // backgroundColor: 'yellow',
        height: DP(100),
        marginTop: DP(48),
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    inputtext_box: {
        backgroundColor: '#F8F8F8',
        height: DP(46),
        width: DP(328),
        borderRadius: DP(8),
        // justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    scheduleinput_text: {
        // backgroundColor: 'orange',
        height: DP(21),
        width: DP(137+3),
        marginLeft: DP(16),
        fontSize: SP(18),
        lineHeight: DP(21.09),
        color: '#777777',
    },

      memoinput_text: {
        // backgroundColor: 'orange',
        height: DP(19),
        width: DP(126+14),
        marginLeft: DP(16),
        fontSize: SP(16),
        lineHeight: DP(18.75),
        color: '#777777',
    },

    colorselect_box: {
        // backgroundColor: 'green',
        height: DP(48),
        marginTop: DP(24),
        alignItems: 'center',
        // justifyContent: 'space-between',
        flexDirection: 'row',
    },

    colornone: {
        // backgroundColor: 'grey',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },

    colorselect_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(248),
        marginLeft: DP(16),
        fontSize: SP(16),
        color: '#444444',
        textAlignVertical: 'center',
    },

    unfold: {
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },



})