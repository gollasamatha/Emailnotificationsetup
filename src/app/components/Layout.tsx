import React from 'react';
import { Mail, Settings, LayoutDashboard, History, Sparkles, Code2, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: 'compose' | 'settings' | 'logs' | 'developers';
  onTabChange: (tab: 'compose' | 'settings' | 'logs' | 'developers') => void;
}

export function Layout({ children, activeTab, onTabChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#f3f4f6] relative overflow-hidden font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Creative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-200/40 blur-[100px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-indigo-200/40 blur-[100px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-blue-200/40 blur-[100px]" />
      </div>

      <div className="relative z-10 flex h-screen max-w-[1600px] mx-auto p-4 gap-4">
        {/* Floating Glass Sidebar */}
        <aside className="w-20 lg:w-64 bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-3xl flex flex-col justify-between py-6 px-3 transition-all duration-300">
          <div>
            <div 
              className="flex items-center gap-3 px-3 mb-10 justify-center lg:justify-start cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.location.reload()}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 text-white">
                <Mail className="h-5 w-5" />
              </div>
              <span className="hidden lg:block font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                MailFlow
              </span>
            </div>
            
            <nav className="space-y-2">
              {[
                { id: 'compose', label: 'Compose', icon: LayoutDashboard },
                { id: 'logs', label: 'History Logs', icon: History },
                { id: 'developers', label: 'API & Docs', icon: Code2 },
                { id: 'settings', label: 'Settings', icon: Settings },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id as any)}
                  className={`relative w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group overflow-hidden ${
                    activeTab === item.id
                      ? 'text-indigo-600 shadow-md bg-white'
                      : 'text-slate-500 hover:bg-white/50 hover:text-slate-900'
                  }`}
                >
                  {/* Active Indicator Line */}
                  {activeTab === item.id && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-r-full" />
                  )}
                  
                  <item.icon className={`h-5 w-5 transition-transform group-hover:scale-110 ${activeTab === item.id ? 'fill-indigo-100' : ''}`} />
                  <span className="hidden lg:block">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="px-3 space-y-3">
             <div className="hidden lg:flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 border border-white/60 shadow-sm backdrop-blur-sm">
                <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shadow-md">
                  JD
                </div>
                <div className="text-sm overflow-hidden">
                  <p className="font-bold text-slate-800 truncate">John Doe</p>
                  <p className="text-slate-500 text-xs">Pro Plan</p>
                </div>
             </div>
             
             <button 
               onClick={() => window.location.reload()}
               className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors justify-center lg:justify-start group"
             >
                <LogOut className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="hidden lg:block">Sign Out</span>
             </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 rounded-3xl bg-white/40 backdrop-blur-md border border-white/40 shadow-xl overflow-hidden relative">
          <div className="h-full overflow-auto p-6 lg:p-10 custom-scrollbar">
             {children}
          </div>
        </main>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.3);
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}
