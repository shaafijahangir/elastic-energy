import { SafeAreaView, StyleSheet, View } from 'react-native';
import LandingPage from '../components/LandingPage';

export default function Home() {
    return (
        <View style={styles.container}>
            <LandingPage />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F4EF',
    },
});
