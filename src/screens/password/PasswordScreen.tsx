import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { DP, SP } from '../../util/size';

interface Props { navigation }
interface State {

}

export class PasswordScreen extends React.Component<Props, State> {

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
            <ScrollView>
                <View style={styles.header_box}>
                    <Text style={styles.headertitle_text}>
                        새 비밀번호를 입력해 주세요.
                    </Text> 
                </View>


                <View style={styles.password_box}>
                    <View style={styles.password}>
                        <View style={styles.password_shape}>
                        </View>
                    </View>       

                    <View style={styles.password}>
                        <View style={styles.password_shape}>
                        </View>
                    </View> 

                    <View style={styles.password}>
                        <View style={styles.password_shape}>
                        </View>
                    </View> 

                    <View style={styles.password}>
                        <View style={styles.password_shape}>
                        </View>
                    </View>            
                </View>

                <View style={styles.password_warn}>
                    <Text style={styles.password_text}>
                        {
                            '비밀번호를 잊어버렸을 경우, 비밀번호를\n재설정할 수 없습니다.\n(기존 데이터를 복구할 수 없습니다.)'
                        }
                    </Text> 
                </View>

                <View style={styles.passwordinput}>                      
                    <View style={styles.passwordinput_box}>
                        <Text style={styles.password_number}>
                            1
                        </Text>
                        <Text style={styles.password_number}>
                            2
                        </Text>
                        <Text style={styles.password_number}>
                            3
                        </Text>
                    </View>
                    <View style={styles.passwordinput_box}>
                        <Text style={styles.password_number_second}>
                            4
                        </Text>

                        <Text style={styles.password_number_second}>
                            5
                        </Text>

                        <Text style={styles.password_number_second}>
                            6
                        </Text>
                    </View>
                    <View style={styles.passwordinput_box}>
                        <Text style={styles.password_number_third}>
                            7
                        </Text>

                        <Text style={styles.password_number_third}>
                            8
                        </Text>

                        <Text style={styles.password_number_third}>
                            9
                        </Text>  
                    </View>
                    <View style={styles.passwordinput_box}>                      
                        <Text style={styles.password_number_fourth}>
                            0
                        </Text>  


                        <Pressable
                            style={ {backgroundColor: 'yellow'} }
                            onPress={ () => {
                                this.props.navigation.pop()
                            }}
                        >
                            <Image
                                source={require('../../resources/delete.png')}
                                style={styles.delete}
                            />
                        </Pressable>
                        
                    </View>
                </View>
        
           
            </ScrollView>

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
        height: DP(40),
        marginTop: DP(65),
        alignItems: 'center',
        justifyContent: 'center',
    },

    headertitle_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(242+1),
        fontSize: SP(20),
        lineHeight: SP(23.44),  
        color: '#383838',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    password_box: {
        // backgroundColor: 'yellow',
        height: DP(40),
        marginTop: DP(24),
        paddingLeft: DP(32),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    password: {
        // backgroundColor: 'green',
        height: DP(24),
        width: DP(24),
        marginRight: DP(32),
        alignItems: 'center',
        justifyContent: 'center',
    },

    password_shape: {
        // backgroundColor: '#383838',
        backgroundColor: '#FFFFFF',
        height: DP(20),
        width: DP(20),
        borderRadius: DP(20),
        borderColor: '#383838',
        borderWidth: DP(2),
    },

    password_warn: {
        // backgroundColor: 'orange',
        height: DP(68),
        marginTop: DP(17),
        alignItems: 'center',
        justifyContent: 'center',
    },

    password_text: {
        // backgroundColor: 'skyblue',
        height: DP(52),
        width: DP(248),
        fontSize: SP(14),
        lineHeight: SP(16.41),  
        color: '#ED6D6D',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    passwordinput: {
        // backgroundColor: 'pink',
        height: DP(370),
        marginTop: DP(24),
        alignItems: 'center',
        justifyContent: 'center',
    },

    passwordinput_box: {
        // backgroundColor: 'skyblue',
        width: DP(248),
        flexDirection: 'row',
    },

    password_number: {
        // backgroundColor: 'yellow',
        height: DP(40),
        width: DP(40),
        marginRight: DP(64),
        fontSize: SP(20),
        lineHeight: SP(23.44),  
        color: '#444444',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    password_number_second: {
        // backgroundColor: 'blue',
        height: DP(40),
        width: DP(40),
        marginTop: DP(48),
        marginRight: DP(64),
        fontSize: SP(20),
        lineHeight: SP(23.44),  
        color: '#444444',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    password_number_third: {
        // backgroundColor: 'green',
        height: DP(40),
        width: DP(40),
        marginTop: DP(48),
        marginRight: DP(64),
        fontSize: SP(20),
        lineHeight: SP(23.44),  
        color: '#444444',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    password_number_fourth: {
        // backgroundColor: 'green',
        height: DP(40),
        width: DP(40),
        marginTop: DP(48),
        marginLeft: DP(104),
        marginRight: DP(64),
        fontSize: SP(20),
        lineHeight: SP(23.44),  
        color: '#444444',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    delete: {
        // backgroundColor: 'blue',
        height: DP(40),
        width: DP(40),
        marginTop: DP(48),
    },

    










})