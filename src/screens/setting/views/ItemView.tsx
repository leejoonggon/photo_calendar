import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS, Pressable } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { DP, SP } from '../../../util/size';

interface Props { 
    navigation,
    title,
    naviName

}
interface State {

}

export class ItemView extends React.Component<Props, State> {

    constructor(props) {
        super(props);     
    }
    
    componentDidMount(): void {
        
    }


    componentWillUnmount(): void {
        
    }

 
    render(): React.ReactNode {


        return(
            <Pressable
                onPress={ () => {
                    this.props.navigation.push(this.props.naviName)
                }}
            >
                <View style={styles.subtitle_box}>
                    <Text style={styles.subtitle_text}>
                        {
                            this.props.title
                        }
                    </Text>

                    <Image
                        source={require('../../../resources/nexticon.png')}
                        style={styles.nexticon}
                    />
                </View>
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
   

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
})