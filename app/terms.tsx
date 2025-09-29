import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
    return (
        <ScrollView>
            <Header />
            <View style={styles.content}>
                <Text style={styles.title}>Terms of Service</Text>
                <Text style={styles.p}>
                    This is a placeholder for the Terms of Service page. You can replace this text with the
                    full terms later.
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
