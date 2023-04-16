import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    logo: {
        marginTop: 30,
        height: 100,
        width: 100,
    },
    headingText: {
        fontSize: 50,
        color: 'black',
    },
    headingView: {
        marginTop: 30,
    },
    textInput: {
        height: 40,
        width: '100%',
        margin: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        fontSize: 20,
        marginTop: 20,
    },
    buttonView: {
        borderRadius: 10,
        width: 260,
    },
    textView: {
        marginVertical: 30,

    },
    iconView: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 20,
        justifyContent: 'space-between',
    },
    iconS: {
        height: 50,
        width: 50,
        margin: 10,
    },
    text: {
        fontSize: 20,
    },
    textS: {
        fontSize: 20,
        color: 'blue'
    }

})

export default style;