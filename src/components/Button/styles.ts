import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: theme.fonts.text500
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.line
    },
    icon: {
        width: 24,
        height: 24
    },

});