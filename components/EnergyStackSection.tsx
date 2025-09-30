import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CTAButton from './CTAButton';

export default function EnergyStackSection() {
  const { width } = useWindowDimensions();
  const isMobile = width < 570;

  const cards = [
    {
      title: 'Installers',
      description:
        'Win more bids with faster paybacks and plug and play installs. Elastic keeps customers engaged and drives referrals.',
      button: 'Win More Deals',
      colors: ['#B04630', '#86271A'] as const,
    },
    {
      title: 'Asset Owners',
      description:
        'Turn portfolios into predictable revenue. Elastic stacks multiple value streams, reduces risk and provides investor-grade reporting.',
      button: 'Maximize Value',
      colors: ['#8F2E1F', '#5B1710'] as const,
    },
    {
      title: 'Aggregators',
      description:
        'Expand programs without integration headaches. Elastic enables instant enrollment and universal device compatibility.',
      button: 'Scale Programs',
      colors: ['#BA4A32', '#8A2F20'] as const,
    },
    {
      title: 'Hyperscalers',
      description:
        'Protect uptime and gain capacity without upgrades. Elastic supports flexible load shaping and reliability under stress.',
      button: 'Protect Uptime',
      colors: ['#7E2416', '#4C120C'] as const,
    },
  ];

  return (
    <View style={styles.section}>
      {/* ✅ Constrained container */}
      <View style={styles.container}>
        <Text style={styles.heading}>Upgrade Your Energy Stack</Text>
        <View style={[styles.grid, isMobile && styles.gridMobile]}>
          {cards.map((card) => (
            <LinearGradient
              key={card.title}
              colors={card.colors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.card, isMobile && styles.cardMobile]}
            >
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.cardTitle}>{card.title}</Text>
                  <Text style={styles.cardBody}>{card.description}</Text>
                </View>
                <View style={styles.buttonWrapper}>
                  <CTAButton title={card.button} onPress={() => { }} kind="card" />
                </View>
              </View>
            </LinearGradient>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: 1000, // ✅ constrain width
    width: '100%',
    alignSelf: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#C34B36',
    marginBottom: 36,
    marginTop: 12,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  gridMobile: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    width: '45%',
    borderRadius: 10,
    padding: 20,
  },
  cardMobile: {
    width: '95%',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
  },
  cardBody: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 20,
    marginBottom: 10,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 8,
  },
});
