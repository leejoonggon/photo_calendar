import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { DP, SP } from '../../util/size';

interface Props {}
interface State {

}

export class LockSettingScreen extends React.Component<Props, State> {

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
                        잠금 설정
                    </Text>
                </View>

                <View style={styles.subtitle_box}>
                    <Text style={styles.subtitle_text}>
                        잠금 설정
                    </Text>

                    <Image
                        source={require('../../resources/toggle_off.png')}
                        style={styles.toggle_off}
                    />
                </View>

                <View style={styles.subtitle_box}>
                    <Text style={styles.subtitle_text}>
                        비밀번호 변경
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
    

})