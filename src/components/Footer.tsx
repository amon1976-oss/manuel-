import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white py-12 px-6 mb-20 md:mb-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-200 pt-8">
        <div className="text-center md:text-left">
          <p className="font-headline font-extrabold text-indigo-950 text-xl">Ram Studio</p>
          <p className="text-slate-600 font-medium mt-1">Ponemos tus ideas en accion !!!</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <a className="flex items-center gap-2 text-indigo-900 hover:opacity-80 transition-opacity" href="mailto:amon1976@gmail.com">
            <Mail className="w-4 h-4" />
            <span className="font-medium">amon1976@gmail.com</span>
          </a>
          <p className="text-slate-400 text-xs">© 2024 Ram Studio Financial Management</p>
        </div>
      </div>
    </footer>
  );
}
