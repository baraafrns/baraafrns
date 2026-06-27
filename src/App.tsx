import { AppProvider, useAppContext } from './context/AppContext';
import Cursor from './components/Cursor';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import MusicPlayer from './components/MusicPlayer';

function MainApp() {
  const { currentView } = useAppContext();

  return (
    <div className="min-h-screen selection:bg-current selection:text-[var(--bg-color)]">
      <Cursor />
      <Navigation />
      
      <main>
        {currentView === 'home' && <Home />}
        {currentView === 'projects' && <Projects />}
      </main>

      <MusicPlayer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}

