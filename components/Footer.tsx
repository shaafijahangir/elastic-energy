import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default function Footer() {
    const { width } = useWindowDimensions();
    const isMobile = width < 650;

    return (
        <View style={styles.footer}>
            {/* Constrain everything in a centered container */}
            <View style={styles.container}>
                {/* Top Row: Logo + Description + Links */}
                <View style={[styles.topRow, isMobile && styles.topRowMobile]}>
                    {/* Logo + Company Info */}
                    <View style={styles.companyInfo}>
                        <View style={styles.logoRow}>
                            <Image
                                source={require('../assets/elastic-energy-logo.png')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                            <Text style={styles.companyName}>Elastic Energy</Text>
                        </View>
                        <Text style={styles.description}>
                            Elastic Energy unlocks capacity everywhere, turning distributed
                            assets into reliable, revenue-generating infrastructure.
                        </Text>
                        <View style={styles.socialRow}>
                            <FontAwesome6 name="x-twitter" size={15} color="#ccc" />
                            <FontAwesome6 name="linkedin" size={15} color="#ccc" />
                        </View>
                    </View>

                    {/* Navigation Links */}
                    <View style={[styles.linksRow, isMobile && styles.linksRowMobile]}>
                        <View style={styles.linkGroup}>
                            <Text style={styles.linkHeading}>PLATFORM</Text>
                            <Text style={styles.link}>Overview</Text>
                            <Text style={styles.link}>Energy Router</Text>
                            <Text style={styles.link}>Energy Cloud</Text>
                        </View>
                        <View style={styles.linkGroup}>
                            <Text style={styles.linkHeading}>SOLUTIONS</Text>
                            <Text style={styles.link}>For Installers</Text>
                            <Text style={styles.link}>For Asset Owners</Text>
                            <Text style={styles.link}>For Aggregators</Text>
                            <Text style={styles.link}>For Hyperscalers</Text>
                        </View>
                        <View style={styles.linkGroup}>
                            <Text style={styles.linkHeading}>COMPANY</Text>
                            <Text style={styles.link}>About Us</Text>
                            <Text style={styles.link}>Careers</Text>
                            <Text style={styles.link}>Partners</Text>
                            <Text style={styles.link}>Contact</Text>
                        </View>
                    </View>
                </View>

                {/* Divider */}
                <View style={styles.divider} />

                {/* Bottom Row: Copyright + Legal */}
                <View style={[styles.bottomRow, isMobile && styles.bottomRowMobile]}>
                    <Text style={styles.copy}>© 2025 Elastic Energy, Inc. All rights reserved.</Text>
                    <View style={styles.bottomLinks}>
                        <Text style={styles.bottomLinkText}>Privacy Policy</Text>
                        <View style={styles.dot} />
                        <Text style={styles.bottomLinkText}>Terms of Service</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#111',
        paddingVertical: 32,
        paddingHorizontal: 16,
    },
    container: {
        width: '100%',
        maxWidth: 1000,       // ✅ keeps content centered on wide screens
        alignSelf: 'center',  // ✅ centers the container itself
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    topRowMobile: {
        flexDirection: 'column',
        gap: 24,
    },
    companyInfo: {
        flex: 1,
        marginRight: 32,
    },
    logoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    logo: {
        width: 28,
        height: 28,
        marginRight: 8,
    },
    companyName: {
        fontWeight: '700',
        color: '#fff',
        fontSize: 15,
    },
    description: {
        color: '#aaa',
        fontSize: 13,
        lineHeight: 18,
        marginBottom: 12,
        maxWidth: 380,
    },
    socialRow: {
        flexDirection: 'row',
        gap: 12,
    },
    socialIcon: {
        color: '#ccc',
        fontSize: 15,
    },
    linksRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end', // 👈 pushes the whole group to the right
        gap: 40,
    },
    linksRowMobile: {
        flexDirection: 'column',
        alignItems: 'flex-start', // 👈 for mobile, stack and align left
        gap: 20,
        paddingTop: 15,
    },
    linkGroup: {
        flex: 1,
        minWidth: 90,
    },
    linkHeading: {
        fontSize: 11,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 8,
    },
    link: {
        fontSize: 11.5,
        color: '#ccc',
        marginBottom: 6,
    },
    divider: {
        height: 1,
        backgroundColor: '#222',
        marginVertical: 16,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomRowMobile: {
        flexDirection: 'column',
        gap: 12,
        alignItems: 'center',
    },
    copy: {
        color: '#888',
        fontSize: 12,
    },
    bottomLinks: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    bottomLinkText: {
        color: '#9CA3AF',
        fontSize: 12,
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#374151',
    },
});
