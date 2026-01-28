import React from 'react';
import { Check, X, Clock, MoreHorizontal, Search, Filter, ArrowUpRight } from 'lucide-react';

export function LogsPage() {
  const logs = [
    {
      id: '1',
      status: 'sent',
      subject: 'Welcome to the platform',
      to: 'alex@example.com',
      provider: 'sendgrid',
      timestamp: 'Just now',
      initials: 'AL'
    },
    {
      id: '2',
      status: 'sent',
      subject: 'Password Reset Request',
      to: 'sarah.j@company.com',
      provider: 'aws-ses',
      timestamp: '2 mins ago',
      initials: 'SA'
    },
    {
      id: '3',
      status: 'failed',
      subject: 'Weekly Digest',
      to: 'invalid-email@test',
      provider: 'sendgrid',
      timestamp: '1 hour ago',
      initials: 'IN'
    },
    {
      id: '4',
      status: 'sent',
      subject: 'New Login Detected',
      to: 'mike@startup.io',
      provider: 'aws-ses',
      timestamp: '3 hours ago',
      initials: 'MI'
    },
    {
      id: '5',
      status: 'sent',
      subject: 'Invoice #2023-001',
      to: 'billing@client.com',
      provider: 'sendgrid',
      timestamp: '5 hours ago',
      initials: 'BI'
    },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
            Activity Logs
          </h1>
          <p className="text-slate-500 mt-2 text-lg">Track your email delivery performance.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white/60 backdrop-blur-sm border border-white/60 rounded-xl text-sm font-semibold text-slate-700 hover:bg-white transition-all shadow-sm">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
            Export CSV
          </button>
        </div>
      </div>

      <div className="bg-white/50 backdrop-blur-md rounded-3xl border border-white/60 shadow-xl overflow-hidden">
        {/* Modern Search Bar */}
        <div className="p-6 border-b border-slate-100/50">
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input 
              type="text"
              placeholder="Search by email, subject, or ID..."
              className="block w-full pl-10 pr-4 py-3 bg-white/70 border-none rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-inner"
            />
          </div>
        </div>

        {/* List View */}
        <div className="divide-y divide-slate-100/50">
          {logs.map((log) => (
            <div key={log.id} className="p-4 sm:p-6 hover:bg-white/60 transition-colors group cursor-default">
              <div className="flex items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  {/* Status Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                    log.status === 'sent' 
                      ? 'bg-gradient-to-br from-green-400 to-emerald-600 text-white shadow-green-500/30' 
                      : 'bg-gradient-to-br from-red-400 to-rose-600 text-white shadow-red-500/30'
                  }`}>
                    {log.status === 'sent' ? <Check className="h-6 w-6" /> : <X className="h-6 w-6" />}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-base font-bold text-slate-800 truncate">{log.subject}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        log.status === 'sent' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {log.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">
                          {log.initials}
                        </div>
                        {log.to}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1.5">
                        {log.provider === 'sendgrid' ? (
                           <div className="w-4 h-4 rounded-full bg-[#1A82E2] flex items-center justify-center">
                             <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S16.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6-9.6-4.298-9.6-9.6 4.298-9.6 9.6-9.6zm5.174 4.54a.97.97 0 00-.97.97v3.064c0 .536.434.97.97.97h2.366c.536 0 .97-.434.97-.97V7.91a.97.97 0 00-.97-.97h-2.366zm-5.174 0a.97.97 0 00-.97.97v8.068c0 .536.434.97.97.97h2.366c.536 0 .97-.434.97-.97V7.91a.97.97 0 00-.97-.97H12zm-5.174 0a.97.97 0 00-.97.97v8.068c0 .536.434.97.97.97h2.366c.536 0 .97-.434.97-.97V7.91a.97.97 0 00-.97-.97H6.826z"/></svg>
                           </div>
                        ) : (
                           <div className="w-4 h-4 rounded-full bg-[#FF9900] flex items-center justify-center">
                             <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M17.584 10.422h-5.228v3.138h3.048c-.144 1.258-1.04 2.228-2.922 2.228-2.022 0-3.328-1.572-3.328-3.794s1.306-3.794 3.328-3.794c1.196 0 1.944.472 2.372.944l2.126-2.222c-1.282-1.39-3.262-2.188-4.498-2.188C8.58 4.734 5.5 7.55 5.5 11.994c0 4.444 3.08 7.26 7.08 7.26 3.65 0 5.76-2.588 5.76-6.094 0-.644-.06-1.122-.156-1.738z"/></svg>
                           </div>
                        )}
                        <span className="capitalize font-medium">{log.provider === 'aws-ses' ? 'Amazon SES' : 'SendGrid'}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right hidden sm:block">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                      <Clock className="h-3 w-3" />
                      Time
                    </div>
                    <div className="text-sm font-semibold text-slate-700">{log.timestamp}</div>
                  </div>
                  
                  <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-indigo-600 transition-all opacity-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Simple pagination */}
        <div className="p-4 bg-slate-50/50 border-t border-slate-100 text-center text-xs text-slate-400 font-medium">
          Showing 5 most recent logs
        </div>
      </div>
    </div>
  );
}
