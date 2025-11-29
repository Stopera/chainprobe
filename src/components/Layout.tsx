import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  RiDashboardLine, 
  RiFlowChart, 
  RiWalletLine, 
  RiUserSearchLine, 
  RiGroupLine, 
  RiRadarLine,
  RiMenuLine,
  RiCloseLine,
  RiMoonLine,
  RiSunLine,
  RiShieldCheckLine,
  RiExchangeLine,
  RiQuestionLine,
  RiAlertLine,
  RiShieldStarLine
} from 'react-icons/ri';
import { SiSolana } from 'react-icons/si';
import { GuideModal } from './ui/GuideModal';
import { useGuideModal } from './ui/useGuideModal';

const NavLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={`flex items-center gap-2 px-4 py-3 rounded-none transition-all duration-300 relative overflow-hidden border-2 ${
        isActive 
          ? 'bg-terminal-green text-black border-terminal-green shadow-[4px_4px_0px_0px_rgba(0,255,159,0.3)]' 
          : 'border-border hover:border-terminal-green hover:shadow-[2px_2px_0px_0px_rgba(0,255,159,0.2)] terminal-text'
      }`}
    >
      <div className={`text-xl ${isActive ? 'text-black' : 'text-terminal-green'}`}>
        {icon}
      </div>
      <span className="font-bold mono">{label}</span>
    </Link>
  );
};

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { isOpen: isGuideOpen, onClose: onGuideClose, openGuide } = useGuideModal();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="h-full px-3 py-4 overflow-y-auto neo-card border-r-4 border-border flex flex-col">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 px-4 mb-8 border-2 border-terminal-green rounded-none p-2 shadow-[4px_4px_0px_0px_rgba(0,255,159,0.4)] hover:shadow-[6px_6px_0px_0px_rgba(0,255,159,0.6)] transition-all cursor-pointer">
            <SiSolana className="text-2xl text-terminal-green" />
            <span className="text-xl font-bold mono terminal-text">ChainProbe</span>
          </Link>

          {/* Navigation */}
          <div className="flex-1 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-accent-pink font-bold pl-4 mb-2 mono">Dashboard</p>
              <nav className="space-y-1 relative">
                <NavLink to="/dashboard" icon={<RiDashboardLine />} label="Overview" />
              </nav>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-accent-pink font-bold pl-4 mb-2 mono">Analysis Tools</p>
              <nav className="space-y-1 relative">
                <NavLink to="/transaction-flow" icon={<RiFlowChart />} label="Transaction Flow" />
                {/* <NavLink to="/wallet-analysis" icon={<RiWalletLine />} label="Wallet Analysis" /> */}
                <NavLink to="/transaction-clustering" icon={<RiGroupLine />} label="Clustering" />
                <NavLink to="/pattern-analysis" icon={<RiRadarLine />} label="Pattern Analysis" />
              </nav>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-accent-pink font-bold pl-4 mb-2 mono">Token Security</p>
              <nav className="space-y-1 relative">
                <NavLink to="/token-security/analyzer" icon={<RiShieldCheckLine />} label="Token Analyzer" />
                <NavLink to="/token-security/trending" icon={<RiRadarLine />} label="Trending Tokens" />
                <NavLink to="/token-security/new" icon={<RiAlertLine />} label="New Tokens" />
                <NavLink to="/token-security/verified" icon={<RiShieldCheckLine />} label="Verified Tokens" />
              </nav>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-accent-pink font-bold pl-4 mb-2 mono">Other Tools</p>
              <nav className="space-y-1 relative">
                <NavLink to="/entity-labels" icon={<RiUserSearchLine />} label="Entity Labels" />
                <NavLink to="/smart-contract-scanner" icon={<RiShieldStarLine />} label="Contract Scanner" />
                <NavLink to="/bridge-monitor" icon={<RiExchangeLine />} label="Bridge Monitor" />
              </nav>
            </div>
          </div>

          {/* Settings and Help - Now at the bottom */}
          <div className="pt-4 border-t-4 border-border mt-4">
            <p className="text-xs uppercase tracking-wider text-accent-pink font-bold pl-4 mb-2 mono">Knowledge Base</p>
            <div className="space-y-1 px-4">
              {/* <button
                onClick={toggleDarkMode}
                className="neo-btn w-full justify-start gap-2"
              >
                {isDarkMode ? <RiSunLine className="text-xl" /> : <RiMoonLine className="text-xl" />}
                <span className="mono font-bold">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button> */}
              <button
                onClick={openGuide}
                className="neo-btn w-full justify-start gap-2"
              >
                <RiQuestionLine className="text-xl" />
                <span className="mono font-bold">Guide</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content wrapper */}
      <div className="lg:ml-64 min-h-screen flex flex-col">
        {/* Page content */}
        <main className="flex-1 relative">
          <Outlet />
        </main>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed bottom-4 left-4 z-50 lg:hidden p-3 rounded-none neo-card border-2 border-terminal-green shadow-[4px_4px_0px_0px_rgba(0,255,159,0.4)] hover:shadow-[6px_6px_0px_0px_rgba(0,255,159,0.6)] transition-all"
      >
        {isMobileMenuOpen ? (
          <RiCloseLine className="text-2xl text-terminal-green" />
        ) : (
          <RiMenuLine className="text-2xl text-terminal-green" />
        )}
      </button>

      {/* Guide Modal */}
      <GuideModal isOpen={isGuideOpen} onClose={onGuideClose} />
    </div>
  );
} 