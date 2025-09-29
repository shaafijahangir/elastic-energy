import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CTAButton from './CTAButton';

/**
 * The “Build Smarter Energy Systems” call-out from the Elastic Energy site.
 * Compact typography and buttons to closely match the original design.
 */
export default function SmarterEnergySection() {
  return (
    <LinearGradient
      colors={['#e65837', '#f0ddcc']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.wrapper}
    >
      <View style={styles.content}>
        <Text style={styles.heading}>Build Smarter Energy Systems</Text>
        <Text style={styles.description}>
          Elastic turns fragmented devices into orchestrated assets that deliver new revenue, lower
          risk and lasting customer value. Whether you are an installer, TPO, aggregator or
          hyperscaler, Elastic provides the infrastructure layer to grow faster and earn more.
        </Text>
        <View style={styles.buttonsRow}>
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
});
