import React from 'react';
import { useForm } from 'react-hook-form';
import { useEmail } from '../context/EmailContext';
import { toast } from 'sonner';
import { Save, CheckCircle2, Shield, Zap } from 'lucide-react';

export function SettingsPage() {
  const { settings, updateSettings } = useEmail();
  
  const { register, handleSubmit, watch, formState: { isDirty } } = useForm({
    defaultValues: settings,
  });

  const onSubmit = (data: typeof settings) => {
    updateSettings(data);
    toast.success('Settings saved', {
      description: 'Your provider configuration is active.',
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    });
  };

  const selectedProvider = watch('defaultProvider');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
          Provider Settings
        </h1>
        <p className="text-slate-500 mt-2 text-lg">Manage your API keys and default sending service.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Provider Cards */}
        <section>
          <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">Default Service</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className={`relative group cursor-pointer`}>
              <input
                type="radio"
                value="sendgrid"
                {...register('defaultProvider')}
                className="sr-only peer"
              />
              <div className={`h-full p-6 rounded-3xl border-2 transition-all duration-300 ${
                selectedProvider === 'sendgrid'
                  ? 'bg-white border-blue-500 shadow-xl shadow-blue-500/10 scale-[1.02]'
                  : 'bg-white/50 border-white hover:border-blue-200 hover:bg-white'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    selectedProvider === 'sendgrid' ? 'bg-blue-500' : 'bg-slate-100 group-hover:bg-blue-100'
                  }`}>
                    <svg viewBox="0 0 24 24" className={`w-6 h-6 ${selectedProvider === 'sendgrid' ? 'fill-white' : 'fill-slate-400 group-hover:fill-blue-500'}`} xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S16.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6-9.6-4.298-9.6-9.6 4.298-9.6 9.6-9.6zm5.174 4.54a.97.97 0 00-.97.97v3.064c0 .536.434.97.97.97h2.366c.536 0 .97-.434.97-.97V7.91a.97.97 0 00-.97-.97h-2.366zm-5.174 0a.97.97 0 00-.97.97v8.068c0 .536.434.97.97.97h2.366c.536 0 .97-.434.97-.97V7.91a.97.97 0 00-.97-.97H12zm-5.174 0a.97.97 0 00-.97.97v8.068c0 .536.434.97.97.97h2.366c.536 0 .97-.434.97-.97V7.91a.97.97 0 00-.97-.97H6.826z"/></svg>
                  </div>
                  {selectedProvider === 'sendgrid' && (
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900">SendGrid</h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Best for transactional emails and marketing campaigns. High deliverability.
                </p>
              </div>
            </label>

            <label className={`relative group cursor-pointer`}>
              <input
                type="radio"
                value="aws-ses"
                {...register('defaultProvider')}
                className="sr-only peer"
              />
              <div className={`h-full p-6 rounded-3xl border-2 transition-all duration-300 ${
                selectedProvider === 'aws-ses'
                  ? 'bg-white border-orange-500 shadow-xl shadow-orange-500/10 scale-[1.02]'
                  : 'bg-white/50 border-white hover:border-orange-200 hover:bg-white'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    selectedProvider === 'aws-ses' ? 'bg-orange-500' : 'bg-slate-100 group-hover:bg-orange-100'
                  }`}>
                    <svg viewBox="0 0 24 24" className={`w-6 h-6 ${selectedProvider === 'aws-ses' ? 'fill-white' : 'fill-slate-400 group-hover:fill-orange-500'}`} xmlns="http://www.w3.org/2000/svg"><path d="M17.584 10.422h-5.228v3.138h3.048c-.144 1.258-1.04 2.228-2.922 2.228-2.022 0-3.328-1.572-3.328-3.794s1.306-3.794 3.328-3.794c1.196 0 1.944.472 2.372.944l2.126-2.222c-1.282-1.39-3.262-2.188-4.498-2.188C8.58 4.734 5.5 7.55 5.5 11.994c0 4.444 3.08 7.26 7.08 7.26 3.65 0 5.76-2.588 5.76-6.094 0-.644-.06-1.122-.156-1.738z"/></svg>
                  </div>
                  {selectedProvider === 'aws-ses' && (
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900">Amazon SES</h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Cost-effective scalable email service. Good for high-volume applications.
                </p>
              </div>
            </label>
          </div>
        </section>

        {/* Credentials Form */}
        <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-slate-900 rounded-xl text-white">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Security Credentials</h2>
          </div>

          <div className="space-y-8">
            {/* SendGrid Inputs */}
            <div className={`transition-all duration-500 ${selectedProvider === 'sendgrid' ? 'opacity-100' : 'opacity-40 grayscale pointer-events-none'}`}>
              <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                SendGrid API Configuration
              </h3>
              <div className="relative group">
                <input
                  type="password"
                  placeholder="SG.xxxxxxxxxxxxxxxxxxxxxxxx"
                  {...register('sendGridApiKey')}
                  className="w-full bg-white border-0 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <div className="absolute right-3 top-3 text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded">API Key</div>
              </div>
            </div>

            <div className="w-full h-px bg-slate-200/50" />

            {/* AWS Inputs */}
            <div className={`transition-all duration-500 ${selectedProvider === 'aws-ses' ? 'opacity-100' : 'opacity-40 grayscale pointer-events-none'}`}>
               <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                AWS IAM Configuration
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                   <input
                    type="text"
                    placeholder="Access Key ID (AKIA...)"
                    {...register('awsAccessKeyId')}
                    className="w-full bg-white border-0 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="password"
                    placeholder="Secret Access Key"
                    {...register('awsSecretAccessKey')}
                    className="w-full bg-white border-0 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                </div>
                <div>
                  <select
                    {...register('awsRegion')}
                    className="w-full bg-white border-0 rounded-xl px-4 py-3 text-slate-900 shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-orange-500 transition-all appearance-none"
                  >
                    <option value="us-east-1">US East (N. Virginia)</option>
                    <option value="us-east-2">US East (Ohio)</option>
                    <option value="us-west-1">US West (N. California)</option>
                    <option value="us-west-2">US West (Oregon)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              disabled={!isDirty}
              className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-slate-900/20 active:scale-95"
            >
              <Save className="h-4 w-4" />
              Save Configuration
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
