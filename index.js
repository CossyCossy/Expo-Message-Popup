
import {
    View,
    Text,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { COLORS, SIZES } from './constants';

function MessagePopup(title, description, messageType, icon) {

    const message_type = messageType ? messageType : 'success'

    const message_title = title ? title : ''

    const message_description = description ? description : ''

    const message_icon = icon ? icon : null

    return (
        <Animatable.View
            animation="fadeInDownBig"
            style={{
                width: SIZES.width,
                position: 'absolute',
                top: 0,
                backgroundColor: message_type === 'success' ? COLORS.success : COLORS.error,
                borderRadius: 5,
                elevation: 10,
            }}
        >

            <View
                style={{
                    marginTop: SIZES.padding * 1.5,
                    marginBottom: SIZES.radius,
                    marginHorizontal: SIZES.radius
                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ marginTop: SIZES.radius * 0.5 }}>
                        {/* <SvgImage
                            containerStyle={{
                                width: `${25}px`,
                                height: `${25}px`,
                                icon_name: icon_name
                            }}
                        /> */}
                        {typeof message_icon !== "undefined" && message_icon !== null &&
                            message_icon
                        }
                    </View>

                    <View
                        style={{
                            marginLeft: SIZES.radius,
                            marginRight: SIZES.radius
                        }}
                    >

                        <Text
                            style={{
                                fontSize: 20,
                                //...FONTS.semiBoldFont,
                                lineHeight: 30
                            }}
                        >{message_title}</Text>

                        <Text
                            style={{
                                fontSize: 16,
                                //...FONTS.regularFont,
                                lineHeight: 30,
                                color: COLORS.black
                            }}
                        >{message_description}</Text>

                    </View>
                </View>

            </View>


        </Animatable.View>
    )
}

module.exports = MessagePopup
