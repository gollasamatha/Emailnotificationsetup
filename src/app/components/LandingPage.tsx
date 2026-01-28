import React from 'react';
import { ArrowRight, CheckCircle2, Globe2, Shield, Zap, Code2, Cpu } from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
}

export function LandingPage({ onLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900 font-sans text-slate-900">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 text-white">
              <Zap className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              MailFlow
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#developers" className="hover:text-indigo-600 transition-colors">Developers</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onLogin} className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors hidden sm:block">
              Log in
            </button>
            <button 
              onClick={onLogin}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 active:scale-95"
            >
              Start for free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] overflow-hidden -z-10 pointer-events-none opacity-40">
           <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-300 blur-[120px]" />
           <div className="absolute top-[20%] right-[20%] w-[500px] h-[500px] rounded-full bg-purple-300 blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wide mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            v2.0 is now live
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Email infrastructure for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">modern developers</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop worrying about deliverability. Connect SendGrid, AWS SES, and more in one unified API. Build notification systems in minutes, not days.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onLogin}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/30 active:scale-95"
            >
              Get API Key
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl text-lg font-bold border border-slate-200 hover:bg-slate-50 transition-all active:scale-95">
              View Documentation
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-50">
             {/* Simple tech logos simulation */}
             <div className="text-xl font-black text-slate-400">ACME Corp</div>
             <div className="text-xl font-black text-slate-400">Stripe</div>
             <div className="text-xl font-black text-slate-400">Vercel</div>
             <div className="text-xl font-black text-slate-400 hidden sm:block">Linear</div>
          </div>
        </div>
      </header>

      {/* Code Demo Section */}
      <section id="developers" className="py-20 px-6 bg-slate-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Developers first, <br />
                <span className="text-indigo-400">Marketing second.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                We built MailFlow because we were tired of wrestling with complex email configurations. Our SDKs are typed, documented, and ready to drop into your Next.js, Python, or Go app.
              </p>
              
              <ul className="space-y-4">
                {[
                  '99.99% Uptime SLA',
                  'Real-time delivery logs',
                  'Universal API for all providers',
                  'Drag-and-drop template builder'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="p-1 rounded-full bg-green-500/20 text-green-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
           </div>
           
           <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-[#0F172A] border border-slate-700 rounded-3xl p-6 shadow-2xl font-mono text-sm">
                 <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-auto text-slate-500 text-xs">send-email.ts</div>
                 </div>
                 <div className="text-slate-300 space-y-1">
                    <p><span className="text-purple-400">import</span> {'{'} MailFlow {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@mailflow/sdk'</span>;</p>
                    <p className="h-4" />
                    <p><span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> MailFlow(process.env.API_KEY);</p>
                    <p className="h-4" />
                    <p><span className="text-purple-400">await</span> client.send({'{'}</p>
                    <p className="pl-4">to: <span className="text-green-400">'alex@example.com'</span>,</p>
                    <p className="pl-4">subject: <span className="text-green-400">'Welcome aboard!'</span>,</p>
                    <p className="pl-4">template: <span className="text-green-400">'onboarding-v1'</span>,</p>
                    <p className="pl-4">data: {'{'} name: <span className="text-green-400">'Alex'</span> {'}'}</p>
                    <p>{'}'});</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to send emails</h2>
            <p className="text-slate-600 text-lg">Powerful features to help you manage your email infrastructure with ease.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe2, title: "Global CDN", desc: "Ensure low latency delivery with our edge network spanning 30+ regions." },
              { icon: Shield, title: "Enterprise Security", desc: "SOC2 Type II certified. We take data privacy and security seriously." },
              { icon: Cpu, title: "Smart Routing", desc: "Automatically route emails through the best provider based on success rates." },
              { icon: Code2, title: "Webhooks", desc: "Receive real-time events for delivery, bounce, open, and click tracking." },
              { icon: Zap, title: "Instant Setup", desc: "Get up and running in less than 5 minutes with our intuitive CLI tool." },
              { icon: ArrowRight, title: "Analytics", desc: "Deep dive into your email performance with granular reporting tools." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
              <Zap className="h-4 w-4" />
            </div>
            <span className="font-bold text-lg text-slate-900">MailFlow</span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2024 MailFlow Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
