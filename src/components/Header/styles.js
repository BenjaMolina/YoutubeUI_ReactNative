import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header:{
        height: 50,
        backgroundColor: '#eaebec',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 1,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        paddingLeft: 5,
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
        paddingHorizontal: 18,
        alignItems: 'center',      
    },
    button:{
        marginLeft: 20,
    }
    
}); 