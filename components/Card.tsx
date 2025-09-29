import { View, Text, StyleSheet } from 'react-native';

export default function Card({ title, children }: { title?: string; children: React.ReactNode }) {
    return (
        <View style={styles.card}>
            {title && <Text style={styles.title}>{title}</Text>}
            <View style={styles.body}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        marginVertical: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 12,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#eee',
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 10,
        color: '#111',
    },
    body: {
        gap: 6,
    },
});
