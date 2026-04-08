import { TopAppBar } from './components/TopAppBar';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { BottomNavBar } from './components/BottomNavBar';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <TopAppBar />
      <MainContent />
      <Footer />
      <BottomNavBar />
    </div>
  );
}
