import { ScrollView, View } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import EnergyStackSection from './EnergyStackSection';
import PlatformCapabilities from './PlatformCapabilities';
import SmarterEnergySection from './SmarterEnergySection';

/**
 * Top‑level landing page that stitches together all the individual marketing
 * components.  Wraps its contents in a ScrollView to ensure they can scroll
 * vertically on smaller screens.
 */
export default function LandingPage() {
  return (
    <ScrollView>
      <Header />
      <HeroSection />
      <EnergyStackSection />
      <PlatformCapabilities />
      <SmarterEnergySection />
      <Footer />
    </ScrollView>
  );
}