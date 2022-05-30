import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { formatDiagnosticsWithColorAndContext } from 'typescript';
import { DP, SP } from '../util/size';

interface Props {}
interface State {

}

export class SplashScreen extends React.Component<Props, State> {

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

                <View style={styles.apptitle_box}>
                    <Image
                        source={require('./../resources/mainicon.png')}
                        style={styles.mainicon}
                    />
                    <Text style={styles.apptitle_text}>
                        {
                            'Photo\ncalendar'
                        }
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

    apptitle_box: {
        backgroundColor: 'grey',
        height: DP(102),
        marginTop: DP(234),
        alignItems: 'center',
        justifyContent: 'space-between',      
    },

    mainicon: {
        height: DP(50),
        width: DP(50),
    },

    apptitle_text: {
        backgroundColor: 'orange',
        height: DP(48),
        width: DP(108),
        fontSize: SP(20),
        lineHeight: DP(23.44),
        color: '#383838',
        textAlign: 'center',
    },
    
  
})