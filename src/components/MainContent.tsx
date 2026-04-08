import { Wallet, ReceiptText, TrendingDown, PiggyBank, Info } from 'lucide-react';

export function MainContent() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center pt-20 pb-32 px-6">
      <div className="w-full max-w-md text-center">
        <div className="relative mb-10 group">
          <div className="absolute inset-0 bg-indigo-900/5 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700"></div>
          <div className="relative flex justify-center">
            <div className="bg-white p-10 rounded-full shadow-[0_24px_48px_rgba(0,6,102,0.08)]">
              <Wallet className="text-indigo-900/20 w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <ReceiptText className="text-indigo-900 w-20 h-20 relative z-10" />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-headline font-extrabold text-3xl text-indigo-950 tracking-tight">
            Aún no tienes gastos cargados
          </h2>
          <p className="text-slate-600 text-lg px-4 leading-relaxed">
            Comienza a gestionar tus finanzas hoy mismo. Registra tus movimientos para tener un control total de tu capital.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center gap-6">
          <button className="w-full max-w-xs py-4 px-8 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white rounded-xl font-headline font-bold text-lg shadow-lg shadow-indigo-900/20 hover:scale-[1.02] active:scale-98 transition-all">
            Agregar mi primer gasto
          </button>
          <div className="flex items-center gap-2 text-green-800 font-medium bg-green-100 px-4 py-2 rounded-full">
            <Info className="w-4 h-4" />
            <span className="text-sm">Tu saldo actual es $0,00</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mt-16">
        <div className="bg-slate-100 p-6 rounded-lg flex items-start gap-4">
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <TrendingDown className="text-indigo-900" />
          </div>
          <div>
            <h3 className="font-headline font-bold text-indigo-950">Control de Flujo</h3>
            <p className="text-slate-600 text-sm">Visualiza hacia dónde se va tu dinero con reportes detallados.</p>
          </div>
        </div>
        <div className="bg-slate-100 p-6 rounded-lg flex items-start gap-4">
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <PiggyBank className="text-green-700" />
          </div>
          <div>
            <h3 className="font-headline font-bold text-indigo-950">Metas de Ahorro</h3>
            <p className="text-slate-600 text-sm">Establece límites y ahorra para lo que realmente importa.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
