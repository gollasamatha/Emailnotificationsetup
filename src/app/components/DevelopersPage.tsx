import React, { useState } from 'react';
import { Copy, Eye, EyeOff, Terminal, Code2, PlayCircle, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export function DevelopersPage() {
  const [showKey, setShowKey] = useState(false);
  const [activeLang, setActiveLang] = useState<'curl' | 'node' | 'python'>('curl');

  const apiKey = "sk_live_51Mx........................";
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };

  const codeSnippets = {
    curl: `curl -X POST https://api.mailflow.com/v1/send \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "user@example.com",
    "subject": "Hello world",
    "text": "Sent via MailFlow API",
    "provider": "sendgrid" 
  }'`,
    node: `const mailflow = require('mailflow-node')('${apiKey}');

await mailflow.send({
  to: 'user@example.com',
  subject: 'Hello world',
  text: 'Sent via MailFlow API',
  provider: 'sendgrid' // or 'aws-ses'
});`,
    python: `import mailflow

client = mailflow.Client('${apiKey}')

client.send(
    to='user@example.com',
    subject='Hello world',
    text='Sent via MailFlow API',
    provider='sendgrid'
)`
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
          API Reference
        </h1>
        <p className="text-slate-500 mt-2 text-lg">Integrate email capabilities directly into your codebase.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* API Keys Section */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-lg h-fit">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-500/30">
              <Terminal className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Your API Keys</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-slate-900 rounded-2xl border border-slate-700/50 shadow-inner group relative">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Live Key</label>
              <div className="flex items-center justify-between gap-4">
                <code className="font-mono text-indigo-400 text-sm truncate">
                  {showKey ? "sk_live_51Mx92jKls829sL29s1002" : "sk_live_••••••••••••••••••••••••"}
                </code>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setShowKey(!showKey)}
                    className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors"
                  >
                    {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  <button 
                    onClick={() => copyToClipboard("sk_live_51Mx92jKls829sL29s1002")}
                    className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Use this key to authenticate your API requests. Keep it secret! Do not share it in client-side code.
            </p>
          </div>
        </div>

        {/* Integration Section */}
        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl overflow-hidden relative">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/10 rounded-xl text-white backdrop-blur-sm">
                  <Code2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white">Quick Start</h2>
              </div>
              
              <div className="flex bg-slate-800 p-1 rounded-lg">
                {(['curl', 'node', 'python'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase transition-all ${
                      activeLang === lang 
                        ? 'bg-indigo-600 text-white shadow-lg' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-black/50 rounded-xl p-4 overflow-x-auto border border-white/5 font-mono text-sm relative group">
              <button 
                onClick={() => copyToClipboard(codeSnippets[activeLang])}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all"
              >
                <Copy className="w-4 h-4" />
              </button>
              <pre>
                <code className="language-bash text-slate-300">
                  {codeSnippets[activeLang]}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Endpoints Documentation */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/60 shadow-lg">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Available Endpoints</h3>
        <div className="space-y-4">
          <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-slate-100">
            <span className="px-3 py-1 rounded-lg bg-green-100 text-green-700 text-xs font-bold font-mono mt-1">POST</span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <code className="text-slate-900 font-bold">/v1/send</code>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">Core</span>
              </div>
              <p className="text-slate-500 text-sm">Dispatches a single transactional email using the default or specified provider.</p>
            </div>
            <button className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg flex items-center gap-2 transition-all">
              <PlayCircle className="w-3 h-3" />
              Test
            </button>
          </div>

          <div className="w-full h-px bg-slate-100" />

          <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-slate-100">
            <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold font-mono mt-1">GET</span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <code className="text-slate-900 font-bold">/v1/logs</code>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">Analytics</span>
              </div>
              <p className="text-slate-500 text-sm">Retrieves a paginated list of email delivery logs and provider statuses.</p>
            </div>
             <button className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg flex items-center gap-2 transition-all">
              <PlayCircle className="w-3 h-3" />
              Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
