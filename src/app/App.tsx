import React, { useState } from 'react';
import { Toaster } from 'sonner';
import { EmailProvider } from './context/EmailContext';
import { Layout } from './components/Layout';
import { SettingsPage } from './components/SettingsPage';
import { ComposePage } from './components/ComposePage';
import { LogsPage } from './components/LogsPage';
import { DevelopersPage } from './components/DevelopersPage';
import { LandingPage } from './components/LandingPage';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'compose' | 'settings' | 'logs' | 'developers'>('compose');

  const handleLogin = () => {
    // Simple state simulation of logging in
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <LandingPage onLogin={handleLogin} />;
  }

  return (
    <EmailProvider>
      <Toaster position="top-right" richColors />
      <Layout activeTab={activeTab} onTabChange={setActiveTab}>
        {activeTab === 'compose' && <ComposePage />}
        {activeTab === 'settings' && <SettingsPage />}
        {activeTab === 'logs' && <LogsPage />}
        {activeTab === 'developers' && <DevelopersPage />}
      </Layout>
    </EmailProvider>
  );
}
