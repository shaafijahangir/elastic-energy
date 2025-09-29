import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CTAButton from './CTAButton';

export default function EnergyStackSection() {
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
      <Text style={styles.heading}>Upgrade Your Energy Stack</Text>
      <View style={styles.grid}>
        {cards.map((card) => (
          <LinearGradient
            key={card.title}
            colors={card.colors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.card}
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
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 35,
    fontWeight: '500',
    color: '#C34B36',
    marginBottom: 42,
    marginTop: 22,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },
  card: {
    width: '48%',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between', // pushes button to bottom
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
  },
  cardBody: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)', // softer white
    lineHeight: 20,
    marginBottom: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 8,
  },
});
