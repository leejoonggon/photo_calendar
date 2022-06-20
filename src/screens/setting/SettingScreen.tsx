import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS, Pressable } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { DP, SP } from '../../util/size';
import { ItemView } from './views/ItemView';

interface Props { navigation }
interface State {

}

// const MENU_DATA = [
//     {
//         title: '내 정보',
//         naviName: 'myprofile'
//     },
//     {
//         title: '내 정보',
//         naviName: 'myprofile'
//     },
//     {
//         title: '내 정보',
//         naviName: 'myprofile'
//     },
//     {
//         title: '내 정보',
//         naviName: 'myprofile'
//     },
//     {
//         title: '내 정보',
//         naviName: 'myprofile'
//     },
//     {
//         title: '내 정보',
//         naviName: 'myprofile'
//     },
//     {
//         title: '내 정보',
//         naviName: 'myprofile'
//     }
// ]

export class SettingScreen extends React.Component<Props, State> {

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
                    // style={{width: 100, height: 100, backgroundColor: 'red'}}
                    onPress = { () => {
                        this.props.navigation.pop();
                    } }
                >
                    <Image
                        source={require('../../resources/backicon.png')}
                        style={styles.backicon}
                    />
                </Pressable>
                    
                    <Text style={styles.headertitle_text}>
                        설정
                    </Text>
                </View>
                {/* {
                    MENU_DATA.map((data, index)=> {
                        return(
                            <ItemView
                                key={data.title}
                                navigation={this.props.navigation}
                                naviName={data.naviName}
                                title={data.title}
                            />
                        )
                    })
                } */}


                <Pressable
                    onPress={ () => {
                        this.props.navigation.push('myprofile')
                    }}
                >
                    <View style={styles.subtitle_box}>
                        <Text style={styles.subtitle_text}>
                            내정보
                        </Text>

                        <Image
                            source={require('../../resources/nexticon.png')}
                            style={styles.nexticon}
                        />
                    </View>
                </Pressable>
                <ItemView
                    navigation={this.props.navigation}
                    naviName={'myprofile'}
                    title={'내 정보'}
                />

                <View style={styles.subtitle_box}>
                    <Text style={styles.subtitle_text}>
                        테마 변경
                    </Text>

                    <Image
                        source={require('../../resources/toggle_off.png')}
                        style={styles.toggle_off}
                    />
                </View>

                <Pressable
                    onPress={ () => {
                        this.props.navigation.push('password')
                    }}
                >
                    <View style={styles.subtitle_box}>
                        <Text style={styles.subtitle_text}>
                            잠금 설정
                        </Text>

                        <Image
                            source={require('../../resources/nexticon.png')}
                            style={styles.nexticon}
                        />
                    </View>
                </Pressable>
                <ItemView 
                    navigation={this.props.navigation}
                    naviName={'password'}
                    title={'잠금 설정'}
                />

                <Pressable
                    onPress={ () => {
                        this.props.navigation.push('calendarsetting')
                    }}
                >
                    <View style={styles.subtitle_box}>
                        <Text style={styles.subtitle_text}>
                            캘린더 설정
                        </Text>

                        <Image
                            source={require('../../resources/nexticon.png')}
                            style={styles.nexticon}
                        />
                    </View>
                </Pressable>

                <Pressable
                    onPress={ () => {
                        this.props.navigation.push('dataexport')
                    }}
                >
                    <View style={styles.subtitle_box}>
                        <Text style={styles.subtitle_text}>
                            데이터 관리/내보내기
                        </Text>

                        <Image
                            source={require('../../resources/nexticon.png')}
                            style={styles.nexticon}
                        />
                    </View>
                </Pressable>       

                <Pressable
                    onPress={ () => {
                        this.props.navigation.push('inquire')
                    }}
                >
                    <View style={styles.subtitle_box}>
                        <Text style={styles.subtitle_text}>
                            문의하기
                        </Text>

                        <Image
                            source={require('../../resources/nexticon.png')}
                            style={styles.nexticon}
                        />
                    </View>
                </Pressable>

                <View style={styles.subtitle_box}>
                    <Text style={styles.subtitle_text}>
                        앱 평가하기
                    </Text>

                    <Image
                        source={require('../../resources/nexticon.png')}
                        style={styles.nexticon}
                    />
                </View>

                <View style={styles.subtitle_box}>
                    <Text style={styles.subtitle_text}>
                        앱 정보
                    </Text>

                    <Image
                        source={require('../../resources/nexticon.png')}
                        style={styles.nexticon}
                    />
                </View>

                <View style={styles.guide_box}>
                    <Text style={styles.guide_text}>
                        가이드
                    </Text>

                    <Image
                        source={require('../../resources/nexticon.png')}
                        style={styles.nexticon}
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
        backgroundColor: 'blue',
        height: DP(40),
        marginTop: DP(8),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    subtitle_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(264),
        fontSize: SP(18),
        color: '#555555',
        textAlignVertical: 'center',
    },

    nexticon: {
        // backgroundColor: 'black',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(40),
    },

    toggle_off: {
        // backgroundColor: 'red',
        height: DP(22),
        width: DP(46),
        marginLeft: DP(16+2),
    },
    
    guide_box: {
        // backgroundColor: 'blue',
        height: DP(40),
        marginTop: DP(8),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    guide_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(264),
        fontSize: SP(16),
        color: '#555555',
        letterSpacing: DP(0.1+2.9),
        textAlignVertical: 'center',
    },


})