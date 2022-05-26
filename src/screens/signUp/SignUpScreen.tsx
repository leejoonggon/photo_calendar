import React from 'react';
import { StyleSheet, Image, View, StatusBar, TouchableOpacity, TextInput, Text, ViewBase } from 'react-native';
import { DP, SP } from '../../util/size';

interface Props {}
interface State {

}

export class SignUpScreen extends React.Component<Props, State> {

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

                            
                <View style={styles.welcome_box}>
                    <Text style={styles.welcome_text}>
                        Welcome :)
                    </Text>
                </View>
        
                <View style={styles.mainicon_box}>
                    <View style={styles.mainicon}>
                        <Image
                            source={require('../../resources/mainicon.png')}
                            style={styles.mainicon}
                        />
                    </View>
                </View>

                <View style={styles.apptitle_box}>
                    <Text style={styles.apptitle_text}>
                        {
                            "Photo\ncalendar"
                        }
                    </Text>
                </View>

                <View style={styles.signupcomplete_box}>
                    <Text style={styles.signupcomplete_text}>
                        가입완료
                    </Text>
                </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    welcome_box: {
        // backgroundColor: 'grey',
        height: DP(42),
        marginTop: DP(160),
        justifyContent: 'center',
        alignItems: 'center',

    },

    welcome_text: {
        // backgroundColor: 'yellow',
        fontSize: SP(20),
        color: '#383838',
    },

    mainicon_box: {
        // backgroundColor: 'green',
        height: DP(50),
        marginTop: DP(32),
        alignItems: 'center',
    },

    mainicon: {
        // backgroundColor: 'red',
        height: DP(50),
        width: DP(50),
    },

    apptitle_box: {
        // backgroundColor: 'grey',
        height: DP(48),
        justifyContent: 'center',
        alignItems: 'center',
    },

    apptitle_text: {
        // backgroundColor: 'yellow',
        fontSize: SP(20),
        color: '#383838',
        textAlign: 'center',
    },
    
    signupcomplete_box: {
        // backgroundColor: 'blue',
        height: DP(47),
        marginTop: DP(197),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',      
    },

    signupcomplete_text: {
        backgroundColor: '#F8F8F8',
        height: DP(47),
        width: DP(312),
        fontSize: SP(16),
        color: '#444444',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 4,
    },

})