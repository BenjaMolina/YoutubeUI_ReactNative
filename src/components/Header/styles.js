import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header:{
        height: 55,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 1,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    logoyt: {
        height: 55,
        width: 130,
        resizeMode: 'cover',       
    },
    bottomRight: {
        flex: 1,
        height:60,
        flexDirection: 'row-reverse',
        paddingHorizontal: 10,
        alignItems: 'center',      
    },
    button:{
        marginLeft: 20,
    }
    
}); 