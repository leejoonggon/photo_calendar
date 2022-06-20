import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS, Pressable } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { formatDiagnosticsWithColorAndContext } from 'typescript';
import { DP, SP } from '../../util/size';

interface Props { navigation }
interface State {

}

export class MainScreen extends React.Component<Props, State> {

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

    }



})