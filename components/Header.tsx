import { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    useWindowDimensions,
    Animated,
    Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const isMobile = width < 600;

    const [menuOpen, setMenuOpen] = useState(false);

    // animation for dropdown
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const toggleMenu = () => {
        if (menuOpen) {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => setMenuOpen(false));
        } else {
            setMenuOpen(true);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }).start();
        }
    };

    return (
        <View style={styles.headerWrapper}>
            {/* Constrains width */}
            <View style={styles.headerContainer}>
                {/* Top header row */}
                <View style={styles.header}>
                    {/* Logo + Brand */}
                    <TouchableOpacity
                        onPress={() => router.push('/')}
                        style={styles.brandRow}
                    >
                        <Image
                            source={require('../assets/elastic-energy-logo-dark.png')}
                            style={styles.logoImage}
                            resizeMode="contain"
                        />
                        {!isMobile && <Text style={styles.logoText}>Elastic Energy</Text>}
                    </TouchableOpacity>

                    {/* Desktop nav */}
                    {!isMobile && (
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
                    )}

                    {/* Right Side */}
                    <View style={styles.actions}>
                        {isMobile ? (
                            <TouchableOpacity onPress={toggleMenu} style={styles.iconButton}>
                                <FontAwesome name="bars" size={20} color="#111" />
                            </TouchableOpacity>
                        ) : (
                            <>
                                <TouchableOpacity onPress={() => { }} style={styles.iconButton}>
                                    <FontAwesome name="search" size={16} color="#111" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { }} style={styles.iconButton}>
                                    <FontAwesome name="power-off" size={16} color="#111" />
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </View>

                {/* Mobile dropdown menu */}
                {isMobile && menuOpen && (
                    <Animated.View
                        style={[
                            styles.dropdown,
                            {
                                opacity: fadeAnim,
                                transform: [
                                    {
                                        translateY: fadeAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [-10, 0], // slight slide down
                                        }),
                                    },
                                ],
                            },
                        ]}
                    >
                        <TouchableOpacity onPress={() => router.push('/product')}>
                            <Text style={styles.dropdownLink}>Product</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/platform')}>
                            <Text style={styles.dropdownLink}>Platform</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/about')}>
                            <Text style={styles.dropdownLink}>About</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/contact')}>
                            <Text style={styles.dropdownLink}>Contact</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dropdownAction}>
                            <FontAwesome name="power-off" size={16} color="#111" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.dropdownAction}>
                            <FontAwesome name="search" size={16} color="#111" />
                        </TouchableOpacity>
                    </Animated.View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerWrapper: {
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255,255,255,0.95)',
        zIndex: 999,

        // shadow always visible for separation
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerContainer: {
        maxWidth: 1000, // ✅ constrain header width
        width: '100%',
        alignSelf: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        height: 60,
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
    dropdown: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingVertical: 12,
        alignItems: 'center',
    },
    dropdownLink: {
        fontSize: 14,
        fontWeight: '500',
        color: '#111',
        marginVertical: 10,
        textAlign: 'center',
    },
    dropdownAction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
});
