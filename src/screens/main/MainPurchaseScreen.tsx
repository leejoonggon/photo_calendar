import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { formatDiagnosticsWithColorAndContext } from 'typescript';
import { DP, SP } from '../../util/size';

interface Props { navigation }
interface State {

}

export class MainPurchaseScreen extends React.Component<Props, State> {

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
                        } }
                    >
                        <Image
                            source={require('../../resources/backicon.png')}
                            style={styles.backicon}
                        />
                    </Pressable>
                   

                    <Pressable
                        onPress={ () => {
                            this.props.navigation.push('setting')
                        } }
                    >
                        <Image
                            source={require('../../resources/menu.png')}
                            style={styles.menuicon}
                        />
                    </Pressable>
                </View>
            
                {/* <ScrollView> */}
                    <View style={styles.menubox}>
                        <View style={styles.menutop}>
                            <Image
                                source={require('../../resources/search.png')}
                                style={styles.searchicon}
                            />
                            <Image
                                source={require('../../resources/set.png')}
                                style={styles.seticon}
                            />
                        </View>

                        <View style={styles.nicknamebox}>
                            <Text style={styles.nickname}>
                                ryuryuu030@naver.com
                            </Text>
                        </View>

                        <View style={styles.myimage}/>
                        
                        <View style={styles.menutitlebox}>
                            <Text style={styles.menutitle}>
                                사진
                            </Text>

                            <Image
                                source={require('../../resources/toggle_on.png')}
                                style={styles.toggleonicon}
                            />
                        </View>

                        <View style={styles.menutitlebox}>
                            <Text style={styles.menutitle}>
                                일정
                            </Text>

                            <Image
                                source={require('../../resources/toggle_off.png')}
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
                            <Text style={styles.menutitle}>
                                일 별 보기
                            </Text>
                        </View>

                        <View style={styles.line}/>

                        <View style={styles.menutitlebox}>
                            <Text style={styles.menutitle}>
                                기본 캘린더
                            </Text>
                        </View>

                        <View style={styles.menutitlebox}>
                            <Text style={styles.menutitle}>
                                다이어트
                            </Text>
                        </View>

                        <View style={styles.calendaraddbox}>
                            <Text style={styles.calendaradd}>
                                + 캘린더 추가
                            </Text>
                        </View>

                     </View>
                {/* </ScrollView>          */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FFFFFF', 
        backgroundColor: '#C4C4C4',
    },

    header_box: {
        // backgroundColor: '#FFFFFF',
        backgroundColor: 'yellow',
        height: DP(48),
        marginTop: DP(24),
        alignItems: 'center',
        flexDirection: 'row',
    },

    backicon: {
        // backgroundColor: 'black',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },

    menuicon: {
        // backgroundColor: 'skyblue',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(270),
    },

    menubox: {
        backgroundColor: 'white',
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
        backgroundColor: 'purple',
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

    calendaraddbox: {
        // backgroundColor: 'brown',
        height: DP(32),
        width: '100%', 
        flexDirection: 'row',
        alignItems: 'center',
    },

    calendaradd: {
        // backgroundColor: 'red',
        height: DP(24),
        width: DP(138),
        marginLeft: DP(16),
        fontSize: SP(16),
        color: '#9489CD',
        textAlignVertical: 'center',
    },



})