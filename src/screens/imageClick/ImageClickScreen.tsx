import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { formatDiagnosticsWithColorAndContext } from 'typescript';
import { DP, SP } from '../../util/size';

interface Props {}
interface State {

}

export class ImageClickScreen extends React.Component<Props, State> {

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
                        source={require('../../resources/menuicon_white.png')}
                        style={styles.menuicon}
                    />
                    <View style={styles.photonumber_box}>
                        <Text style={styles.photonumber_text}>
                            1
                        </Text>
                    </View>
                   
                    <Image
                        source={require('../../resources/upload.png')}
                        style={styles.upload}
                    />

                    <Image
                        source={require('../../resources/imagecancel.png')}
                        style={styles.imagecancel}
                    />
                </View>
                            
                <View style={styles.photo_box}>                
                    <View style={styles.photo}>
                        
                    </View>
                </View>
                {/*  사진 눌렀을 때 기본 정보 제공 */}
                
                {/* <View style={styles.basicinfo_text_box}>
                    <View style={styles.basicinfo_text}>
                        <Text style={styles.basicinfo}>
                            {
                            '24년 10월 20일\n기본 캘린더\n2 / 99'
                            }
                        </Text>
                    </View>
                </View> */}
                
                  
           
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
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
        height: DP(48+24),
        paddingTop: DP(24),
        alignItems: 'center',
        flexDirection: 'row',
    },

    menuicon: {
        // backgroundColor: 'black',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },

    photonumber_box: {
        backgroundColor: 'rgba(56, 56, 56, 0.5)',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(200),
        borderRadius: DP(18),
    },

    photonumber_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(24),
        fontSize: SP(16),
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    
    upload: {
        // backgroundColor: 'black',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },

    imagecancel: {
        // backgroundColor: 'black',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },

    photo_box: {
        backgroundColor: 'rgba(51, 51, 51, 0.3)',
        flex: 1,
        
    },

    photo: {
        backgroundColor: 'yellow',
        height: DP(281),
        marginTop: DP(108),
    },

    basicinfo_text_box: {
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    basicinfo_text: {
        // backgroundColor: 'grey',
        height: DP(72),
        width: DP(120),
        marginLeft: DP(16),
        marginTop: DP(88),
    },

    basicinfo: {
        // backgroundColor: 'orange',
        fontSize: SP(18),
        color: '#ffffff',
        lineHeight: DP(24),
        textAlignVertical: 'center',
    },


})