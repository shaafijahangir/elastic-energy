import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function PlatformCapabilities() {
  const { width } = useWindowDimensions();
  const isMobile = width < 430;

  const items = [
    {
      title: 'Instant Orchestration',
      description:
        'Coordinate DERs such as solar, batteries, HVAC and EVs in real time with no rewiring.',
      icon: <MaterialIcons name="bolt" size={20} color="#fff" />,
    },
    {
      title: 'Universal Compatibility',
      description:
        'Works across any OEM or protocol with no lock in or firmware changes.',
      icon: <FontAwesome5 name="plug" size={18} color="#fff" />,
    },
    {
      title: 'Grid Monetization',
      description:
        'Enroll assets automatically in demand response, TOU and capacity programs.',
      icon: <FontAwesome5 name="coins" size={18} color="#fff" />,
    },
    {
      title: 'Edge + Cloud Intelligence',
      description:
        'On-device control combined with cloud optimization for reliable operation, even offline.',
      icon: <FontAwesome5 name="cloud" size={18} color="#fff" />,
    },
    {
      title: 'Portfolio Scale',
      description:
        'Manage one site or a fleet of thousands of assets from a single dashboard.',
      icon: <FontAwesome5 name="chart-line" size={18} color="#fff" />,
    },
    {
      title: 'Installer Ready',
      description:
        'Fast installs with zero code setup, device discovery and streamlined verification.',
      icon: <FontAwesome5 name="tools" size={18} color="#fff" />,
    },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Platform Capabilities</Text>
      <Text style={styles.subheading}>
        Orchestrate distributed energy systems in real time across sites, fleets and portfolios.
        Elastic connects devices, automates control and unlocks new revenue.
      </Text>
      <View style={[styles.grid, isMobile && styles.gridMobile]}>
        {items.map((item) => (
          <View key={item.title} style={[styles.card, isMobile && styles.cardMobile]}>
            <View style={styles.iconContainer}>{item.icon}</View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 23,
    fontWeight: '700',
    color: '#111',
    marginBottom: 8,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 32,
    maxWidth: 620,
    alignSelf: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',   // ✅ keep cards clustered
    gap: 15,                    // ✅ spacing between them
    maxWidth: 1000,             // ✅ constrain overall width
    alignSelf: 'center',        // ✅ center the whole grid
  },
  gridMobile: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 280,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  cardMobile: {
    width: '90%',
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#C34B36',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 11,
    color: '#444',
    lineHeight: 18,
  },
});
