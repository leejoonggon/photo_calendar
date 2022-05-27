import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { formatDiagnosticsWithColorAndContext } from 'typescript';
import { DP, SP } from '../util/size';

interface Props {}
interface State {

}

export class MonthPhotoScreen extends React.Component<Props, State> {

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
                        source={require('./../resources/menu.png')}
                        style={styles.menuicon}
                    />

                    <Text style={styles.headertitle_text}>
                        2024년
                    </Text>

                    <Image
                        source={require('./../resources/shareicon.png')}
                        style={styles.shareicon}
                    />

                    <Image
                        source={require('./../resources/calendaricon.png')}
                        style={styles.calendaricon}
                    />
                </View>

                           
                            
                <View style={styles.photo_box}>                
                    <View style={styles.photo}>
                        
                    </View>
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
        // backgroundColor: '#FFFFFF',
        backgroundColor: 'yellow',
        height: DP(48),
        marginTop: DP(24),
        alignItems: 'center',
        flexDirection: 'row',
    },

    menuicon: {
        // backgroundColor: 'black',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },

    headertitle_text: {
        // backgroundColor: 'orange',
        height: DP(23),
        width: DP(64),
        marginLeft: DP(16),
        fontSize: SP(20),
        lineHeight: DP(23.44),
        color: '#383838',
    },

    shareicon: {
        // backgroundColor: 'black',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(160),
    },

    calendaricon: {
        // backgroundColor: 'black',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },

    photo_box: {
        backgroundColor: 'pink',
        height: DP(568),
        // height: '100%',
        width: '100%',
        paddingTop: DP(12),
        paddingBottom: DP(24),        
    },

    photo: {
        backgroundColor: 'skyblue',
        height: '100%',
    },



})