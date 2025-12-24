import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HajjUmrah from './pages/HajjUmrah';
import TopicPage from './pages/TopicPage';
import ScrollToTop from './components/ScrollToTop';

/* Generic component for sub-pages not yet implemented */
const UnderConstruction = () => (
  <div className="max-w-4xl mx-auto paper-sheet px-8 md:px-16 pb-12">
    <div className="pl-6 pt-12">
      <div className="border-2 dashed border-gray-300 rounded-xl p-12 text-center text-gray-400 mt-8">
        <span className="text-6xl block mb-4">🚧</span>
        <p className="text-2xl handwritten-title">Content Under Construction</p>
        <p className="mt-2">This detailed section is currently being migrated. Please check back later!</p>
        <a href="/" className="inline-block mt-4 text-blue-500 hover:underline">Return Home</a>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen p-4 md:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hajj-umrah" element={<HajjUmrah />} />
          <Route path="/topic/:slug" element={<TopicPage />} />

          {/* Hajj Sub-routes placeholders */}
          <Route path="/hajj-umrah/:subtopic" element={<UnderConstruction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
