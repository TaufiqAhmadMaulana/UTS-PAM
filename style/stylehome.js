import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Judul: {
        fontFamily: "Cochin",
        fontSize: 40,
        fontWeight: "bold",
        color: '#6b9bb0',
    },    
    Input: {
        height: 40,
        width: 250,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '#6b9bb0',
        paddingLeft: 15,
        borderRadius: 20,
    },
    box: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 450,
    },
    
    margins: {
        margin: 20,
        alignItems:'flex-start',
    },
    
    Pilihan: {
        fontFamily: "Cochin",
        fontSize: 16,
        fontWeight: "bold",
    },
    centerView: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '100%',
        height: 500,
        backgroundColor: 'white',
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: '#6b9bb0'
    },
    page2view: {
        backgroundColor: 'white',
        flex: 1,
    },
    View: {
        backgroundColor: 'white',
        borderColor: "#6b9bb0",
        height: '50%',
        borderWidth: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#6b9bb0',
        paddingLeft: 15,
        borderRadius: 20,

    },
    text: {
        fontFamily: "Cochin",
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
    marginbutton: {
        margin: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
        
    },
    back: {
        margin: 20,
        flexDirection: "row",
        justifyContent: 'center',
        
    }



});

export default styles;