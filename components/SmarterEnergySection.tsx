import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CTAButton from './CTAButton';

/**
 * Build Smarter Energy Systems
 * - Desktop: side-by-side buttons (Outline + Filled)
 * - Mobile: stacked buttons (Outline + Filled), no dark/black variant
 * - Gradient background lives on the section
 */
export default function SmarterEnergySection() {
  const { width } = useWindowDimensions();
  const isMobile = width < 430;

  return (
    <LinearGradient
      colors={['#e65837', '#f0ddcc']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0, 10.8]}
      style={styles.wrapper}
    >
      <View style={styles.content}>
        <Text style={styles.heading}>Build Smarter Energy Systems</Text>
        <Text style={styles.description}>
          Elastic turns fragmented devices into orchestrated assets that deliver new revenue, lower
          risk and lasting customer value. Whether you are an installer, TPO, aggregator or
          hyperscaler, Elastic provides the infrastructure layer to grow faster and earn more.
        </Text>

        {/* Buttons */}
        <View style={[styles.buttonsRow, isMobile && styles.buttonsRowMobile]}>
          {/* Mobile & Desktop both use the 'outline' system (no black) */}
          <CTAButton title="Request a Demo" onPress={() => { }} kind="outline" />
          <CTAButton title="Partner With Us" onPress={() => { }} kind="filled" />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 36,
    paddingHorizontal: 20,
  },
  content: {
    maxWidth: 540,
    alignSelf: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: '#fff',
    lineHeight: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  buttonsRowMobile: {
    flexDirection: 'column',
    width: '100%',
    gap: 12,
    alignItems: 'stretch',
  },
});
