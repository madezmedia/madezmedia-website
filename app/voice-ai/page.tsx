import './voice-ai.css';
import { VoiceHero } from './_components/VoiceHero';
import { UseCases } from './_components/UseCases';
import { Pricing } from './_components/Pricing';
import { HowItWorks } from './_components/HowItWorks';
import { FAQ } from './_components/FAQ';
import { IntakeCTA } from './_components/IntakeCTA';

export default function VoiceAIPage() {
  return (
    <main className="voice-ai-page">
      <VoiceHero />
      <UseCases />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <IntakeCTA />
    </main>
  );
}
