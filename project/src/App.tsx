import { CustomCursor } from '@/components/CustomCursor';
import { FloatingBackground } from '@/components/FloatingBackground';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Navbar } from '@/components/Navbar';
import { GuideAvatar } from '@/components/GuideAvatar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { DesignExperiments } from '@/components/sections/DesignExperiments';
import { DesignApproach } from '@/components/sections/DesignApproach';
import { Activity } from '@/components/sections/Activity';
import { CreativeInterests } from '@/components/sections/CreativeInterests';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background layers */}
      <FloatingBackground />
      <CustomCursor />
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />
      <GuideAvatar />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <FeaturedWork />
        <DesignExperiments />
        <DesignApproach />
        <Activity />
        <CreativeInterests />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
