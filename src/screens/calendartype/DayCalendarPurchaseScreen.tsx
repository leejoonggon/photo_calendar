import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { displayPartsToString } from 'typescript';
import { DP, SP } from '../../util/size';

interface Props {}
interface State {

}

export class DayCalendarPurchaseScreen extends React.Component<Props, State> {

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
                        source={require('../../resources/menu.png')}
                        style={styles.menuicon}
                    />
                    <Text style={styles.headertitle_text}>
                        24년 12월
                    </Text>
               
                    <Image
                        source={require('../../resources/shareicon.png')}
                        style={styles.shareicon}
                    />

                    <Image
                        source={require('../../resources/calendaricon.png')}
                        style={styles.calendaricon}
                    />
                </View>

                <ScrollView 
                    // style={{backgroundColor: 'black'}}
                >
 
                    <View style={styles.calendar_box}>                
                        
                    </View>

                    <View style={styles.date_box}>                
                        <Text style={styles.date_text}>
                            10월 20일
                        </Text>

                        <Text style={styles.totalpics_text}>
                            총9장
                        </Text>
                    </View>               

                    <View style={styles.image_box}> 
                        <Image
                            source={require('../../resources/bookmark.png')}
                            style={styles.bookmarkicon}
                        />   

                        <View style={styles.totalpics_box}>
                            <Text style={styles.totalpics}>
                                99
                            </Text>
                        </View>                               
                    </View>               

                    <View style={styles.todo_box}>
                        <View style={styles.color_box}>
                            <View style={styles.color}/>
                        </View>

                        <View style={styles.todotext_box}>
                            <Text style={styles.todo_text}>
                                영어스터디
                            </Text>

                            <Text style={styles.total_todo}>
                                +3
                            </Text>
                        </View>

                        <View style={styles.icon_image_box}> 
                            <Image
                                source={require('../../resources/unfold.png')}
                                style={styles.unfoldicon}
                            /> 

                            <Image
                                source={require('../../resources/menuicon_black.png')}
                                style={styles.menuicon_black}
                            />     
                        </View>
                    </View>

                    <View style={styles.todo_content_box}>
                        <Text style={styles.todo_content_text}>
                            오늘공부하는데 귀여운 고양이가
                        </Text>
                        <Text style={styles.todo_content_text}>
                            옆에 있어서 집중불가능이였다... 보이는건 2줄
                        </Text>
                    </View>

                    <View style={styles.line}/>

                    <View style={styles.todo_box}>
                        <View style={styles.color_box}>
                            <View style={styles.color}/>
                        </View>

                        <View style={styles.todotext_box}>
                            <Text style={styles.todo_text}>
                                영어숙제
                            </Text>

                            <Text style={styles.total_todo}>
                                +3
                            </Text>
                        </View>

                        <View style={styles.icon_image_box}> 
                            <Image
                                source={require('../../resources/fold.png')}
                                style={styles.unfoldicon}
                            /> 

                            <Image
                                source={require('../../resources/menuicon_black.png')}
                                style={styles.menuicon_black}
                            />     
                        </View>
                    </View>

                    <View style={styles.line}/>

                    <View style={styles.todo_box}>
                        <View style={styles.color_box}>
                            <View style={styles.color}/>
                        </View>

                        <View style={styles.todotext_box}>
                            <Text style={styles.todo_text}>
                                영화관 1시
                            </Text>

                            {/* <Text style={styles.total_todo}>
                                +3
                            </Text> */} 
                        </View>
                       
                        <View style={styles.icon_image_box}> 
                            <Image
                                // source={require('../../resources/fold.png')}
                                style={styles.unfoldicon}
                            /> 

                            <Image
                                source={require('../../resources/menuicon_black.png')}
                                style={styles.menuicon_black}
                            />     
                        </View>                      
                    </View>

                    <View style={styles.line}/>

                    <View style={styles.image_box_middle}> 
                            <Image
                                // source={require('../../resources/bookmark.png')}
                                style={styles.bookmarkicon}
                            />   

                            <View style={styles.totalpics_box}>
                                <Text style={styles.totalpics}>
                                    3
                                </Text>
                            </View>                               
                    </View>  

                    {/* <View style={styles.line}/> */}

                    <View style={styles.todo_box}>
                        <View style={styles.color_box}>
                            <View style={styles.color}/>
                        </View>

                        <View style={styles.todotext_box}>
                            <Text style={styles.todo_text}>
                                영어스터디
                            </Text>

                            <Text style={styles.total_todo}>
                                +3
                            </Text>
                        </View>

                        <View style={styles.icon_image_box}> 
                            <Image
                                source={require('../../resources/unfold.png')}
                                style={styles.unfoldicon}
                            /> 

                            <Image
                                source={require('../../resources/menuicon_black.png')}
                                style={styles.menuicon_black}
                            />     
                        </View>
                    </View>

                    <View style={styles.todo_content_box}>
                        <Text style={styles.todo_content_text}>
                            오늘공부하는데 귀여운 고양이가
                        </Text>
                        <Text style={styles.todo_content_text}>
                            옆에 있어서 집중불가능이였다... 2줄보임
                        </Text>
                    </View>

                    <View style={styles.blank}/>

                </ScrollView>

                <Image
                    source={require('../../resources/addbtn_basic.png')}
                    style={styles.addbtn_basic}
                />
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
        backgroundColor: 'grey',
        height: DP(48),
        marginTop: DP(24),
        alignItems: 'center',
        flexDirection: 'row',
    },

    menuicon: {
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },

    headertitle_text: {
        // backgroundColor: 'orange',
        height: DP(23),
        width: DP(88),
        marginLeft: DP(16),
        fontSize: SP(20),
        lineHeight: DP(23.44),
        color: '#383838',
    },

    shareicon: {
        // backgroundColor: 'red',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(132),
    },

    calendaricon: {
        // backgroundColor: 'red',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },

    calendar_box: {
        backgroundColor: 'yellow',
        height: DP(122),        
        marginTop: DP(8),
    },
 
    date_box: {
        backgroundColor: 'orange',
        height: DP(44),
        marginTop: DP(16),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    date_text: {
        backgroundColor: 'white',
        height: DP(24),
        width: DP(252),
        fontSize: SP(18),
        color: '#383838',
        fontWeight: 'bold',
        textAlignVertical: 'center',
    },

    totalpics_text: {
        backgroundColor: 'yellow',
        height: DP(22),
        width: DP(60),
        fontSize: SP(14),
        color: '#7B61FF',
        textAlignVertical: 'center',
        textAlign: 'right',
    },

    image_box: {
        backgroundColor: 'purple',
        height: DP(200),
        width: DP(312),
        marginLeft: DP(24),
        marginTop: DP(12),
        marginBottom: DP(12),
        borderRadius: DP(4),
    },

    bookmarkicon: {
        height: DP(24),
        width: DP(24),
        marginTop: DP(4),
        marginLeft: DP(284),
    },

    totalpics_box: {
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
        height: DP(24),
        width: DP(24),
        marginTop: DP(144),
        marginLeft: DP(284),
        borderRadius: DP(30),
    },

    totalpics: {
        // backgroundColor: 'black',
        fontSize: SP(16),
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },

    todo_box: {
        backgroundColor: 'green',
        height: DP(48),
        width: DP(360),
        // marginTop: DP(12),
        alignItems: 'center',
        flexDirection: 'row',
    },

    color_box: {
        // backgroundColor: 'black',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },   

    color: {
        backgroundColor: 'rgba(242, 236, 183, 0.8)',
        height: DP(24),
        width: DP(8),
        borderRadius: DP(25),
    },

    todotext_box: {
        backgroundColor: 'skyblue',
        height: DP(21),
        width: DP(112),
        flexDirection: 'row'
        // borderRadius: DP(8),
        // justifyContent: 'space-between',
        // alignItems: 'center',
    },

    todo_text: {
        // backgroundColor: 'orange',
        height: DP(21),
        width: DP(83),
        fontSize: SP(18),
        lineHeight: DP(21.09),
        color: '#444444',
    },

    total_todo: {
        // backgroundColor: 'orange',
        height: DP(22),
        width: DP(20),
        marginLeft: DP(9),
        fontSize: SP(14),
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#9489CD',
    },

    icon_image_box: {
        //  backgroundColor: 'orange',
         height: DP(24),
         width: DP(64),
         marginLeft: DP(128),
         flexDirection: 'row',
         justifyContent: 'space-between',
    },

    unfoldicon: {
        // backgroundColor: 'white',
        height: DP(24),
        widht: DP(24),            
    },

    menuicon_black: {
        // backgroundColor: 'red',
        height: DP(24),
        widht: DP(24),  
    },

    image_box_middle:{
        backgroundColor: 'brown',
        height: DP(200),
        width: DP(312),
        marginLeft: DP(24),
        marginTop: DP(12-12),
        marginBottom: DP(12),
        borderRadius: DP(4),
    },

    todo_content_box: {
        backgroundColor: 'blue',
        height: DP(56),
        justifyContent: 'center',
        alignItems: 'center',
    },

    todo_content_text: {
        backgroundColor: 'white',
        height: DP(48-24),
        width: DP(312),
        fontSize: SP(14),
        color: '#444444',
        textAlignVertical: 'center',
    },

    line: {
        backgroundColor: '#E8E8E8',
        // backgroundColor: 'black',
        height: DP(1),
        width: '100%',
        marginTop: DP(20),
        marginBottom: DP(20),
    },

    blank: {
        height: DP(64),
        // backgroundColor: 'yellow',
    },

    addbtn_basic: {
        position: 'absolute',
        marginTop: DP(550+16-6),
        marginLeft: DP(294-16),
        backgroundColor: 'red',
        // height: DP(50),
        // width: DP(50),
    },

    













})