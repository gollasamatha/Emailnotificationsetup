import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EmailSettings {
  sendGridApiKey: string;
  awsAccessKeyId: string;
  awsSecretAccessKey: string;
  awsRegion: string;
  defaultProvider: 'sendgrid' | 'aws-ses';
}

interface EmailContextType {
  settings: EmailSettings;
  updateSettings: (newSettings: Partial<EmailSettings>) => void;
}

const defaultSettings: EmailSettings = {
  sendGridApiKey: '',
  awsAccessKeyId: '',
  awsSecretAccessKey: '',
  awsRegion: 'us-east-1',
  defaultProvider: 'sendgrid',
};

const EmailContext = createContext<EmailContextType | undefined>(undefined);

export function EmailProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<EmailSettings>(defaultSettings);

  const updateSettings = (newSettings: Partial<EmailSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <EmailContext.Provider value={{ settings, updateSettings }}>
      {children}
    </EmailContext.Provider>
  );
}

export function useEmail() {
  const context = useContext(EmailContext);
  if (context === undefined) {
    throw new Error('useEmail must be used within an EmailProvider');
  }
  return context;
}
