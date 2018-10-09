import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    
    card:{
        backgroundColor: 'white',
        padding: 14,
        justifyContent: 'center',
        borderBottomColor: '#1f232b',
        elevation: 1,
        borderStyle: 'dotted',
        borderBottomColor: '#2a2f3a',
        marginBottom: 1,
    },
    footerCard: {
        flexDirection: 'row',
        marginTop: 8,
        
    },
    imageCover:{
        width: null,
        height: 180,
        resizeMode: 'cover',
    },
    avatar:{
        width: 45,
        height: 45,
        resizeMode: 'cover',
        borderRadius: 50,
    },
    description: {
        flex: 1,
        flexWrap: 'nowrap',
        paddingHorizontal: 15,
        
    },
    description_title: {
        textAlign: 'auto',
        color: 'black',
        fontWeight: 'normal',
        textAlign: 'justify',
    },
    description_channel: {
        fontSize: 13,
    },
    description_date:{
        fontSize: 12,
    },
    btnOptions: {

    }
});
