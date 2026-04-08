import { Bell } from 'lucide-react';

export function TopAppBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center overflow-hidden">
            <img
              alt="User avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEFM2yBx5TBUC-HGi_JVJcUyJU4vFqRGF-msLE-Wg_amGdV3ebdOFgKTRNUhkJy9MSPZUTF4aek41d3JkUhRA8_gK-H9MGSx4sfG3IvKmVvcq9HLmTNo5Exlp6ZUnIVZxqPhAWDClI9HvQtgBbzDxmPr6bGkXR9_bIOEJ5iifeUZP7j_PWGF-yfOi_KIuXnH5jCUd0BDfoM8-BzL3w7P4F4x8FDkRRHJVqyWuFp516Sgu4oMHEkormf0GZzDPcgJmUvXr3Px2pfaA"
            />
          </div>
          <h1 className="font-headline font-extrabold tracking-tight text-indigo-950 text-lg">Ram Studio</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-black/5 transition-all active:scale-95">
            <Bell className="text-indigo-900" />
          </button>
        </div>
      </div>
    </header>
  );
}
