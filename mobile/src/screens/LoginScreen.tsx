import { Text, View, StyleSheet } from 'react-native';



const LoginScreen = () => {
    return (
        <View style={styles.container}>
        <Text>Login Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LoginScreen