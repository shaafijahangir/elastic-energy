import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
    title: string;
    onPress: () => void;
    kind?: 'filled' | 'outline' | 'dark' | 'card';
};

export default function CTAButton({ title, onPress, kind = 'filled' }: Props) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.base,
                kind === 'outline' && styles.outline,
                kind === 'dark' && styles.dark,
                kind === 'card' && styles.card,
                kind === 'filled' && styles.filled,
            ]}
        >
            <Text
                style={[
                    styles.text,
                    (kind === 'outline' && styles.textOutline) ||
                    (kind === 'dark' && styles.textDark) ||
                    (kind === 'card' && styles.textCard) ||
                    styles.textFilled,
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    base: {
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 140,
    },
    filled: { backgroundColor: '#B04630' },
    outline: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#B04630' },
    dark: { backgroundColor: '#1A2A3A' },
    text: { fontWeight: '700', fontSize: 12 },
    textFilled: { color: '#fff' },
    textOutline: { color: '#B04630' },
    textDark: { color: '#fff' },
    card: {
        backgroundColor: 'rgba(255,255,255,0.1)', // semi-transparent overlay
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 18,
    },
    textCard: {
        color: '#fff',
        fontWeight: '700',
    },
});
