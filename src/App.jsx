import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import { Footer } from './components/Sections.jsx';
import PrototypeControls from './components/PrototypeControls.jsx';
import GymflexA from './components/GymflexA.jsx';
import GymflexB from './components/GymflexB.jsx';

// ?view=a shows the current GymFlex page (Version A); no view param shows the proposed page (Version B).
// Neutral names so test participants can't tell which is the redesign.
function readView() {
  return new URLSearchParams(window.location.search).get('view') === 'a' ? 'current' : 'new';
}

export default function App() {
  const [view, setView] = useState(readView);

  useEffect(() => {
    const onPop = () => setView(readView());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const selectView = (v) => {
    const url = new URL(window.location.href);
    if (v === 'current') url.searchParams.set('view', 'a');
    else url.searchParams.delete('view');
    window.history.pushState({}, '', url);
    setView(v);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      {view === 'current' ? <GymflexA /> : <GymflexB />}
      <Footer />
      <PrototypeControls key="prototype-controls" view={view} onView={selectView} />
    </>
  );
}
