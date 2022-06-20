import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { DP, SP } from '../../util/size';

interface Props {}
interface State {

}

export class SearchScreen extends React.Component<Props, State> {

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
                        검색어를 입력 하세요
                    </Text>
                    <Image
                        source={require('../../resources/search.png')}
                        style={styles.search}
                    />
                </View>


                <View style={styles.searchresult_box}>
                    <View style={styles.resultnone_box}>
                        <Text style={styles.resultnone_text}>
                            일정이 없습니다
                        </Text>
                    </View>                  
                </View>


                {/* 검색 결과가 있을 때 시작 */}
                {/* <View style={styles.searchresult_box}>
                    <View style={styles.resultresult_box}>
                        <View style={styles.schedulecolor_box}>
                            <View style={styles.schedulecolor}>
                            </View>
                        </View>

                        <Text style={styles.schedule_text}>
                            영화관 1시
                        </Text>
                        
                        <Text style={styles.addschedule_text}>
                            +3
                        </Text>
                        
                        <Text style={styles.date_text}>
                            22.10.02
                        </Text>
                       
                        <Image
                            source={require('../../resources/fold.png')}
                            style={styles.fold}
                        />
                    </View> 

                    <View style={styles.resultresult_box}>
                        <View style={styles.schedulecolor_box}>
                            <View style={styles.schedulecolor}>
                            </View>
                        </View>

                        <Text style={styles.schedule_text}>
                            영화관 1시
                        </Text>
                        
                        <Text style={styles.addschedule_text}>
                            +3
                        </Text>
                        
                        <Text style={styles.date_text}>
                            22.10.02
                        </Text>
                       
                        <Image
                            source={require('../../resources/fold.png')}
                            style={styles.fold}
                        />
                    </View> 

                    <View style={styles.resultresult_box}>
                        <View style={styles.schedulecolor_box}>
                            <View style={styles.schedulecolor}>
                            </View>
                        </View>

                        <Text style={styles.schedule_text}>
                            영화관 1시
                        </Text>
                        
                        <Text style={styles.addschedule_text}>
                            +3
                        </Text>
                        
                        <Text style={styles.date_text}>
                            22.10.02
                        </Text>
                       
                        <Image
                            source={require('../../resources/fold.png')}
                            style={styles.fold}
                        />
                    </View> 

                </View> */}
                {/* 검색 결과가 있을 때 끝 */}


           
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
        height: DP(24+24),
        width: DP(280),
        paddingLeft: DP(16),
        fontSize: SP(16),
        color: '#777777',
        textAlignVertical: 'center',
    },

    search: {
        // backgroundColor: 'yellow',
        height: DP(24),
        width: DP(24),
    },

    searchresult_box: {
        // backgroundColor: 'green',
        height: '100%',
        marginTop: DP(8),
        alignItems: 'center',
    },

    resultnone_box: {
        // backgroundColor: 'yellow',
        height: DP(43),
        width: DP(328),
        marginTop: DP(8),
        alignItems: 'center',
        justifyContent: 'center', 
    },
    
    resultnone_text: {
        // backgroundColor: 'orange',
        height: DP(19),
        width: DP(107),
        fontSize: SP(16),
        lineHeight: SP(18.75),
        color: '#777777',
        textAlign: 'center',
    },
   
    // 검색 결과가 있을 때

    resultresult_box: {
        // backgroundColor: 'yellow',
        height: DP(48),
        marginTop: DP(8),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    schedulecolor_box: {
        // backgroundColor: 'blue',
        height: DP(24),
        width: DP(24),
        alignItems: 'center',
        justifyContent: 'center',
    },

    schedulecolor: {
        backgroundColor: '#F2ECB7',
        height: DP(24),
        width: DP(8),
        borderRadius: DP(2),
    },
    
    schedule_text: {
        // backgroundColor: 'orange',
        height: DP(19),
        width: DP(72),
        marginLeft: DP(8),
        fontSize: SP(16),
        lineHeight: SP(18.75),
        color: '#444444',
        textAlign: 'center',
    },

    addschedule_text: {
        // backgroundColor: 'pink',
        height: DP(20),
        width: DP(22),
        marginLeft: DP(8),
        fontSize: SP(14),
        color: '#9489CD',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    date_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(69),
        marginLeft: DP(95),
        fontSize: SP(14),
        lineHeight: SP(24),
        color: '#CCCCCC',
        textAlign: 'center',
    },

    fold: {
        height: DP(24),
        width: DP(24),
        marginLeft: DP(8),
    },


})