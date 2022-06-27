import React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity, TextInput, Text, Image, Pressable } from 'react-native';
import { DP, SP } from '../util/size';


interface Props { navigation }
interface State {}

export class SwipeMenuView extends React.Component<Props, State> {

    constructor(props) {
        super(props);     
    }
    
    componentDidMount(): void { //여기 화면이 열리는건데 여기보면 최상위 뷰에
        console.log(this.props)
    }


    componentWillUnmount(): void {
        
    }

 
    render(): React.ReactNode {


        return(
            <View style={styles.container}>
                {/* <ScrollView> */}
                <View style={styles.menubox}>
                        <View style={styles.menutop}>
                            <Image
                                source={require('../resources/search.png')}
                                style={styles.searchicon}
                            />
                            <Image
                                source={require('../resources/set.png')}
                                style={styles.seticon}
                            />
                        </View>

                        <View style={styles.nicknamebox}>
                            <Text style={styles.nickname}>
                                닉네임은이정도의길이면될듯
                            </Text>
                        </View>

                        <View style={styles.myimage}/>
                        
                        <View style={styles.menutitlebox}>
                            <Text style={styles.menutitle}>
                                사진
                            </Text>

                            <Image
                                source={require('../resources/toggle_on.png')}
                                style={styles.toggleonicon}
                            />
                        </View>

                        <View style={styles.menutitlebox}>
                            <Text style={styles.menutitle}>
                                일정
                            </Text>

                            <Image
                                source={require('../resources/toggle_off.png')}
                                style={styles.toggleofficon}
                            />
                        </View>

                        <View style={styles.line}/>

                        <View style={styles.menutitlebox}>
                            <Text style={styles.menutitle}>
                                전체 사진 보기
                            </Text>
                        </View>

                        <View style={styles.menutitlebox}>
                            <Text style={styles.menutitle}>
                                월 별 보기
                            </Text>
                        </View>

                        <View style={styles.menutitlebox}>
                            <Pressable
                                onPress={ () => {                                  
                                    this.props.navigation.navigate('daycalendar')
                                }}
                            >
                                <Text style={styles.menutitle}>
                                    일 별 보기
                                </Text>
                            </Pressable>
                        </View>

                        <View style={styles.menutitlebox}>
                            <Text style={styles.menutitle}>
                                기본 캘린더
                            </Text>
                        </View>
                        
                        <View style={styles.line}/>                      

                        <View style={styles.menutitlebox}>
                            <Text style={styles.menutitle}>
                                가이드
                            </Text>
                        </View>

                        <View style={styles.menutitlebox}>
                            <Pressable
                                onPress={() => {
                                    this.props.navigation.navigate('mainmenupurchase')
                                } }
                            >                           
                                <Text style={styles.menutitle}>
                                    구매하기
                                </Text>
                            </Pressable>
                        </View>

                        <View style={styles.adline}/>

                        <View style={styles.adbox_top}/>

                        <View style={styles.adbox_bottom}/>



                     </View>
                {/* </ScrollView>          */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple'
    },

    button: {
        backgroundColor: 'red', 
        width: 100, 
        height: 100
    },

    menubox: {
        backgroundColor: 'pink',
        height: '100%',
        position: 'absolute',
        width: DP(256),
        borderTopRightRadius: DP(16),
        borderBottomRightRadius: DP(16),
        // alignItems: 'center',
    },

    menutop: {
        // backgroundColor: 'skyblue',
        height: DP(48),
        width: '100%',
        marginTop: DP(24),
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },

    searchicon: {
        height: DP(24),
        width: DP(24),
        marginLeft: DP(176),
        // backgroundColor: 'red',        
    },

    seticon: {
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
        // backgroundColor: 'orange',
    },

    nicknamebox: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: '100%', 
        marginBottom: DP(30),
    },

    nickname: {
        // backgroundColor: 'white',
        height: DP(24),
        width: DP(154),
        marginLeft: DP(86),
        fontSize: SP(12),
        color: '#383838',
        textAlignVertical: 'center',
    },

    myimage: {
        backgroundColor: 'green',
        position: 'absolute',
        height: DP(60),
        width: DP(60),
        marginLeft: DP(16),
        marginTop: DP(36),
        borderRadius: DP(70),
    },

    menutitlebox: {
        // backgroundColor: 'brown',
        height: DP(32),
        width: '100%', 
        flexDirection: 'row',
        alignItems: 'center',
    },

    menutitle: {
        // backgroundColor: 'red',
        height: DP(24),
        width: DP(138),
        marginLeft: DP(16),
        fontSize: SP(16),
        color: '#383838',
        textAlignVertical: 'center',
    },

    toggleonicon: {
        height: DP(22),
        width: DP(46),
        marginLeft: DP(40),
    },

    toggleofficon: {
        height: DP(22),
        width: DP(46),
        marginLeft: DP(40),
    },

    line: {
        backgroundColor: '#EEEEEE',
        height: DP(1),
        width: DP(224),
        marginLeft: DP(16),
        marginTop: DP(8),
        marginBottom: DP(8),
    },

    adline: {
        backgroundColor: '#EEEEEE',
        height: DP(1),
        width: DP(224),
        marginLeft: DP(16),
        marginTop: DP(74),
    },

    adbox_top: {
        backgroundColor: 'yellow',
        height: DP(56),
        width: DP(182),
        marginLeft: DP(37),
        marginTop: DP(16),
        borderRadius: DP(4),
    },

    adbox_bottom: {
        backgroundColor: 'orange',
        height: DP(56),
        width: DP(182),
        marginLeft: DP(37),
        marginTop: DP(8),
        borderRadius: DP(4),
    },


})