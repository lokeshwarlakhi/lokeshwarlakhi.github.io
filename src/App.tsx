import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BlogArchive from './pages/BlogArchive'
import BlogDetail from './pages/BlogDetail'
import Leo from './pages/Leo'
import Interests from './pages/Interests'
import DigitalRecs from './pages/DigitalRecs'
import Thanks from './pages/Thanks'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { CursorGlow } from './components/ui/CursorGlow'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  return (
    <div className="relative min-h-screen">
      <ScrollToTop />
      <ScrollProgress />
      <CursorGlow />
      
      {/* Subtle Noise Texture */}
      <div className="fixed inset-0 pointer-events-none z-[9999] noise-bg opacity-[0.03]" />
      
      {/* Background Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-posts" element={<BlogArchive />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/leo" element={<Leo />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/recs" element={<DigitalRecs />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
