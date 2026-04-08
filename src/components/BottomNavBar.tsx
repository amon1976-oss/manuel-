import { Home, CreditCard, Wallet, Calendar, Gauge } from 'lucide-react';

export function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-3 pb-6 bg-white rounded-t-2xl z-50 shadow-[0_-4px_24px_rgba(0,6,102,0.06)] md:hidden">
      <button className="flex flex-col items-center justify-center text-slate-500 px-3 py-1 hover:opacity-80 transition-opacity scale-95">
        <Home className="w-6 h-6" />
        <span className="font-sans text-[10px] font-medium tracking-wide uppercase mt-1">Inicio</span>
      </button>
      <button className="flex flex-col items-center justify-center bg-indigo-900/10 text-indigo-900 rounded-2xl px-3 py-1 scale-95 duration-200 ease-in-out">
        <CreditCard className="w-6 h-6" />
        <span className="font-sans text-[10px] font-medium tracking-wide uppercase mt-1">Gastos</span>
      </button>
      <button className="flex flex-col items-center justify-center text-slate-500 px-3 py-1 hover:opacity-80 transition-opacity scale-95">
        <Wallet className="w-6 h-6" />
        <span className="font-sans text-[10px] font-medium tracking-wide uppercase mt-1">Deudas</span>
      </button>
      <button className="flex flex-col items-center justify-center text-slate-500 px-3 py-1 hover:opacity-80 transition-opacity scale-95">
        <Calendar className="w-6 h-6" />
        <span className="font-sans text-[10px] font-medium tracking-wide uppercase mt-1">Agenda</span>
      </button>
      <button className="flex flex-col items-center justify-center text-slate-500 px-3 py-1 hover:opacity-80 transition-opacity scale-95">
        <Gauge className="w-6 h-6" />
        <span className="font-sans text-[10px] font-medium tracking-wide uppercase mt-1">Límites</span>
      </button>
    </nav>
  );
}
