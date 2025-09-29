import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
    return (
        <ScrollView>
            <Header />
            <View style={styles.content}>
                <Text style={styles.title}>Privacy Policy</Text>
                <Text style={styles.p}>
                    This is a placeholder for the Privacy Policy page. You can replace this text with the full
                    policy content later.
                </Text>
            </View>
            <Footer />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: { padding: 24, gap: 10 },
    title: { fontSize: 24, fontWeight: '900', marginBottom: 12 },
    p: { fontSize: 16, color: '#444', lineHeight: 22 },
});
