import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const router = useRouter();

    return (
        <View style={styles.header}>
            {/* Logo + Brand */}
            <TouchableOpacity onPress={() => router.push('/')} style={styles.brandRow}>
                <Image
                    source={require('../assets/elastic-energy-logo-dark.png')}
                    style={styles.logoImage}
                    resizeMode="contain"
                />
                <Text style={styles.logoText}>Elastic Energy</Text>
            </TouchableOpacity>

            {/* Center Navigation */}
            <View style={styles.centerNav}>
                <TouchableOpacity onPress={() => router.push('/product')}>
                    <Text style={styles.link}>Product</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/platform')}>
                    <Text style={styles.link}>Platform</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/about')}>
                    <Text style={styles.link}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/contact')}>
                    <Text style={styles.link}>Contact</Text>
                </TouchableOpacity>
            </View>

            {/* Right Side Icons */}
            <View style={styles.actions}>
                <TouchableOpacity onPress={() => { }} style={styles.iconButton}>
                    <FontAwesome name="search" size={16} color="#111" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.iconButton}>
                    <FontAwesome name="power-off" size={16} color="#111" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
        paddingHorizontal: 24,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    brandRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    logoImage: {
        width: 36,
        height: 32,
    },
    logoText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#111',
    },
    centerNav: {
        flexDirection: 'row',
        gap: 24,
    },
    link: {
        color: '#111',
        fontWeight: '500',
        fontSize: 11,
    },
    actions: {
        flexDirection: 'row',
        gap: 16,
    },
    iconButton: {
        padding: 6,
    },
});
