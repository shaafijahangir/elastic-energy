import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import CTAButton from './CTAButton';

export default function HeroSection() {
  const { width } = useWindowDimensions();
  const isMobile = width < 500;

  return (
    <View style={styles.wrapper}>
      {/* Top: headline + subhead + buttons */}
      <View style={styles.content}>
        <Text style={styles.headline}>Universal DER Monetization</Text>
        <Text style={styles.subhead}>
          Elastic Energy makes energy assets orchestrated, verifiable and revenue-ready,
          from homes to hyperscalers.
        </Text>
        <View style={[styles.buttonsRow, isMobile && styles.buttonsRowMobile]}>
          <CTAButton title="Request a Demo" onPress={() => { }} kind="filled" />
          <CTAButton title="How it works" onPress={() => { }} kind="dark" />
        </View>
      </View>

      {/* Bottom: device image on cream background */}
      <View style={styles.imageSection}>
        <Image
          source={require('../assets/elastic-energy-hardware.png')}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff', // white top area
  },
  content: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  headline: {
    fontSize: 42,
    fontWeight: '900',
    color: '#C34B36',
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 80,
  },
  subhead: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: 600,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  buttonsRowMobile: {
    flexDirection: 'column', // ✅ stack vertically
    width: '100%',
    gap: 12,
    alignItems: 'center',
  },
  imageSection: {
    backgroundColor: '#FAF6EF', // cream background for image
    alignItems: 'center',
    paddingVertical: 40,
  },
  heroImage: {
    width: '70%',
    height: 240,
  },
});
