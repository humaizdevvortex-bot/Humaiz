/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AiExperience } from './components/AiExperience';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('WordPress Website Development');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-200 selection:bg-orange-500/30 selection:text-orange-300">
      {/* Sticky Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <Skills />
        <Projects />
        <AiExperience />
        <ExperienceTimeline />
        <Process />
        <Contact initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
