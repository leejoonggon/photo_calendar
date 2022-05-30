import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { DP, SP } from './../util/size';

interface Props {}
interface State {

}

export class InquireScreen extends React.Component<Props, State> {

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
                        source={require('./../resources/backicon.png')}
                        style={styles.backicon}
                    />
                    <Text style={styles.headertitle_text}>
                        문의하기
                    </Text>
                </View>

                <View style={styles.category_box}>
                    <View style={styles.category}>
                        <Text style={styles.category_text}>
                            메일주소
                        </Text>
                    </View>
                    <View style={styles.input_box}>
                        <Text style={styles.input_text}>
                            example@ex.com
                        </Text>
                    </View>                   
                </View>

                <View style={styles.category_box}>
                    <View style={styles.category}>
                        <Text style={styles.category_text}>
                            문의유형
                        </Text>
                    </View>
                    <View style={styles.input_box}>
                        <Text style={styles.input_text}>
                            문의유형을 선택해주세요.
                        </Text>

                        <Image
                        source={require('./../resources/fold.png')}
                        style={styles.fold}
                        />
                    </View>                   
                </View>

                <View style={styles.category_content_box}>
                    <View style={styles.category}>
                        <Text style={styles.category_text}>
                            문의사항
                        </Text>
                    </View>
                    <View style={styles.input_content_box}>
                        <Text style={styles.input_content_text}>
                            문의 내용을 입력해주세요.
                        </Text>
                    </View>                   
                </View>


                <View style={styles.send_btn_box}>
                        <Text style={styles.send_btn_text}>
                            보내기
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

    category_box: {
        // backgroundColor: 'yellow',
        height: DP(88),
        marginTop: DP(16),
    },

    category: {
        // backgroundColor: 'pink',
        height: DP(39),
        paddingLeft: DP(20),
        justifyContent: 'center',
    },


    category_text: {
        // backgroundColor: 'orange',
        height: DP(21),
        width: DP(67),
        fontSize: SP(18),
        lineHeight: SP(21.09),
        color: '#9489CD',
    },

    input_box: {
        backgroundColor: '#FFFFFF',
        height: DP(48),
        width: DP(328),
        marginLeft: DP(16),
        borderColor: '#E3E3E3',
        borderWidth: DP(2),
        borderRadius: DP(8),
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    input_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(264),
        marginLeft: DP(16),
        fontSize: SP(18),
        color: '#CCCCCC',
        textAlignVertical: 'center',
    },

    fold: {
        // backgroundColor: 'pink',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(8),
    },

    category_content_box: {
        // backgroundColor: 'blue',
        height: DP(256),
        justifyContent: 'center',
    },

    input_content_box: {
        backgroundColor: '#FFFFFF',
        height: DP(216),
        width: DP(328),
        marginLeft: DP(16),
        borderColor: '#E3E3E3',
        borderWidth: DP(2),
        borderRadius: DP(8),
    },

    input_content_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(264),
        marginTop: DP(12),
        marginLeft: DP(16),
        fontSize: SP(18),
        color: '#CCCCCC',
        // textAlignVertical: 'center',
    },

    send_btn_box: {
        // backgroundColor: 'skyblue',
        backgroundColor: '#F8F8F8',
        height: DP(70),
        marginTop: DP(48),
        justifyContent: 'center',
        alignItems: 'center',        
    },

    send_btn_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(78),
        fontSize: SP(20),
        lineHeight: SP(23.44),  
        color: '#9489CD',
        textAlign: 'center',
    },


})