import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Footer() {
    const router = useRouter();

    return (
        <View style={styles.root}>
            {/* Top section */}
            <View style={styles.topRow}>
                {/* Left column (logo + tagline + socials) */}
                <View style={styles.leftCol}>
                    <View style={styles.brandRow}>
                        <Image
                            source={require('../assets/elastic-energy-logo.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <Text style={styles.brand}>Elastic Energy</Text>
                    </View>
                    <Text style={styles.tagline}>
                        Elastic Energy unlocks capacity everywhere, turning distributed assets
                        into reliable, revenue-generating infrastructure.
                    </Text>
                    <View style={styles.socialRow}>
                        <TouchableOpacity onPress={() => { }}>
                            <FontAwesome name="twitter" size={18} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <FontAwesome name="linkedin" size={18} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Right column (grouped links) */}
                <View style={styles.rightCol}>
                    <View style={styles.col}>
                        <Text style={styles.heading}>Platform</Text>
                        <TouchableOpacity onPress={() => router.push('/platform')}>
                            <Text style={styles.link}>Overview</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/product')}>
                            <Text style={styles.link}>Energy Router</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/platform')}>
                            <Text style={styles.link}>Energy Cloud</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.col}>
                        <Text style={styles.heading}>Solutions</Text>
                        <TouchableOpacity onPress={() => router.push('/installers')}>
                            <Text style={styles.link}>For Installers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/asset-owners')}>
                            <Text style={styles.link}>For Asset Owners</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/aggregators')}>
                            <Text style={styles.link}>For Aggregators</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/hyperscalers')}>
                            <Text style={styles.link}>For Hyperscalers</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.col}>
                        <Text style={styles.heading}>Company</Text>
                        <TouchableOpacity onPress={() => router.push('/about')}>
                            <Text style={styles.link}>About Us</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/careers')}>
                            <Text style={styles.link}>Careers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/partners')}>
                            <Text style={styles.link}>Partners</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/contact')}>
                            <Text style={styles.link}>Contact</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Bottom row */}
            <View style={styles.bottomRow}>
                <Text style={styles.copy}>© 2025 Elastic Energy, Inc. All rights reserved.</Text>
                <View style={styles.bottomLinks}>
                    <TouchableOpacity onPress={() => router.push('/privacy')}>
                        <Text style={styles.link}>Privacy Policy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/terms')}>
                        <Text style={styles.link}>Terms of Service</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        paddingVertical: 24,
        paddingHorizontal: 32,
        backgroundColor: '#111',
    },

    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
    },

    leftCol: {
        flex: 1,
        paddingRight: 20,
    },

    rightCol: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
        flexShrink: 0,
    },

    brandRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },

    logo: {
        width: 28,
        height: 28,
        marginRight: 6,
    },

    brand: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '700',
    },

    tagline: {
        color: '#aaa',
        fontSize: 12,
        lineHeight: 18,
        marginBottom: 10,
        maxWidth: 360,
    },

    socialRow: {
        flexDirection: 'row',
        gap: 14,
    },

    col: {
        gap: 4,
        minWidth: 110,
    },

    heading: {
        color: '#fff',
        fontWeight: '700',
        marginBottom: 4,
        fontSize: 13,
    },

    link: {
        color: '#ccc',
        fontSize: 13,
    },

    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#333',
        paddingTop: 12,
        marginTop: 20,
    },

    copy: {
        color: '#777',
        fontSize: 11,
    },

    bottomLinks: {
        flexDirection: 'row',
        gap: 18,
    },
});
