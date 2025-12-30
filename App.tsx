import React, { useState } from 'react';
import { UserState, DeviceType, NugAmount, AppStep } from './types';
import Hero from './components/Hero';
import GeneratorForm from './components/GeneratorForm';
import ConsoleOutput from './components/ConsoleOutput';
import VerificationModal from './components/VerificationModal';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [step, setStep] = useState<AppStep>(AppStep.FORM);
  const [userState, setUserState] = useState<UserState>({
    username: '',
    device: DeviceType.QUEST2,
    nugs: NugAmount.MAX,
    rareItems: false
  });

  const startGeneration = () => {
    setStep(AppStep.GENERATING);
  };

  const finishGeneration = () => {
    setStep(AppStep.VERIFY);
  };

  return (
    <div className="min-h-screen font-sans text-slate-200 selection:bg-yellow-500/30 selection:text-yellow-200 flex flex-col">
      {/* Background Texture */}
      <div className="fixed inset-0 z-[-1] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none z-[-1]"></div>

      <main className="flex-grow pt-8 pb-12 px-4 md:px-0">
        <Hero />

        <div className="mt-8 transition-all duration-500 ease-in-out">
          {step === AppStep.FORM && (
            <GeneratorForm 
              state={userState} 
              setState={setUserState} 
              onGenerate={startGeneration} 
            />
          )}

          {step === AppStep.GENERATING && (
            <ConsoleOutput 
              state={userState} 
              onComplete={finishGeneration} 
            />
          )}

          {step === AppStep.VERIFY && (
            <div className="relative">
              {/* Blur underlying content to simulate lock */}
              <div className="absolute inset-0 z-0 opacity-20 filter blur-sm pointer-events-none transform scale-95">
                 <ConsoleOutput state={userState} onComplete={() => {}} />
              </div>
              <VerificationModal />
            </div>
          )}
        </div>

        <SocialProof />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;