import React from 'react';
import { useForm } from 'react-hook-form';
import { useEmail } from '../context/EmailContext';
import { toast } from 'sonner';
import { Send, Sparkles, Paperclip, Mic, Image as ImageIcon } from 'lucide-react';

interface EmailForm {
  to: string;
  from: string;
  subject: string;
  body: string;
  provider: 'sendgrid' | 'aws-ses';
}

export function ComposePage() {
  const { settings } = useEmail();
  
  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm<EmailForm>({
    defaultValues: {
      provider: settings.defaultProvider,
      from: 'noreply@example.com'
    }
  });

  const selectedProvider = watch('provider');

  const onSubmit = async (data: EmailForm) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success('Message dispatched', {
      description: 'Your email is on its way.',
    });
    reset({ ...data, to: '', subject: '', body: '' });
  };

  return (
    <div className="h-full flex flex-col max-w-5xl mx-auto">
      <div className="mb-6 flex items-end justify-between">
         <div>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
              New Message
            </h1>
         </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col gap-6">
        
        {/* Top Header Card */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 border border-white/60 shadow-lg space-y-4">
           {/* To / From / Subject Grid */}
           <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              
              {/* Provider Select */}
              <div className="md:col-span-3">
                 <div className="relative h-full">
                    <select
                      {...register('provider')}
                      className="w-full h-full appearance-none bg-slate-50 border-transparent rounded-xl px-4 font-medium text-slate-700 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all cursor-pointer"
                    >
                      <option value="sendgrid">via SendGrid</option>
                      <option value="aws-ses">via AWS SES</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                       {selectedProvider === 'sendgrid' ? (
                          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                       ) : (
                          <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
                       )}
                    </div>
                 </div>
              </div>

              {/* To Input */}
              <div className="md:col-span-9">
                <input
                  type="email"
                  placeholder="To: recipient@example.com"
                  {...register('to', { required: true })}
                  className="w-full bg-white/50 border-0 rounded-xl px-4 py-3 text-lg font-medium text-slate-900 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all"
                />
              </div>

              {/* Subject Line */}
              <div className="md:col-span-12">
                <input
                  type="text"
                  placeholder="Subject: What is this email about?"
                  {...register('subject', { required: true })}
                  className="w-full bg-white/50 border-0 rounded-xl px-4 py-3 text-xl font-bold text-slate-900 placeholder-slate-300 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all"
                />
              </div>
           </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 bg-white rounded-3xl border border-white/60 shadow-xl overflow-hidden flex flex-col relative group">
           <textarea
             {...register('body', { required: true })}
             className="flex-1 w-full p-8 resize-none border-none focus:ring-0 text-lg leading-relaxed text-slate-700 placeholder-slate-300 font-serif"
             placeholder="Start typing your story..."
           />
           
           {/* Floating Action Bar */}
           <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-slate-100 shadow-lg transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex items-center gap-1">
                 <button type="button" className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                    <Paperclip className="w-5 h-5" />
                 </button>
                 <button type="button" className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                    <ImageIcon className="w-5 h-5" />
                 </button>
                 <div className="w-px h-6 bg-slate-200 mx-1" />
                 <button 
                   type="button" 
                   className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors"
                   onClick={() => toast.info('AI Writer initializing...')}
                 >
                    <Sparkles className="w-3 h-3" />
                    Ask AI
                 </button>
              </div>

              <div className="flex items-center gap-3">
                 <span className="text-xs font-medium text-slate-400">
                   Sending as <span className="text-slate-600">John Doe</span>
                 </span>
                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-500/30 active:scale-95"
                 >
                   {isSubmitting ? (
                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                   ) : (
                     <>
                       Send
                       <Send className="w-4 h-4" />
                     </>
                   )}
                 </button>
              </div>
           </div>
        </div>
      </form>
    </div>
  );
}
