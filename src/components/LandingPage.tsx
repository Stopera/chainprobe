import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [terminalOutput, setTerminalOutput] = useState('# 1. INIT: Advanced blockchain forensics platform for the Solana ecosystem.\n# 2. STATUS: Initializing live data stream...');
  const [contractCopied, setContractCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('9F3xxGwYKdX4eedh1CM39bwVWRmYj1UeXENeUp17pump');
    setContractCopied(true);
    setTimeout(() => setContractCopied(false), 2000);
  };

  const generateRandomSignature = () => {
    let hex = '';
    for (let i = 0; i < 64; i++) {
      hex += Math.floor(Math.random() * 16).toString(16);
    }
    return hex;
  };

  const generateProgramId = () => {
    const prefixes = ["Token", "Compute", "System", "Stake", "Vote"];
    const suffix = generateRandomSignature().substring(0, 10) + '...';
    return `PrgID:${prefixes[Math.floor(Math.random() * prefixes.length)]}${suffix}`;
  };

  useEffect(() => {
    const outputLines = [
      `# 3. STREAM_UP: Live feed established. Latency: 4ms.`,
      `# 4. MONITOR: Starting high-volume transaction scan. Threshold: 1000 SOL.`,
      `${generateRandomSignature()} | ${generateProgramId()} | Status: SUCCESS`,
      `DATA_FEED: [0x${generateRandomSignature().substring(0, 16)}...] TX_FEE: 0.000005 SOL`,
      `${generateRandomSignature()} | ${generateProgramId()} | Status: SUCCESS`,
      `DATA_FEED: [0x${generateRandomSignature().substring(0, 16)}...] TX_FEE: 0.000002 SOL`,
      `# 5. ALERT: ANOMALY detected at slot 239487123. Analyzing pattern...`,
      `${generateRandomSignature()} | ${generateProgramId()} | Status: FAILED (Low Priority)`,
      `# 6. READY: System stabilized. Awaiting user command.`,
      `${generateRandomSignature()} | ${generateProgramId()} | Status: SUCCESS`,
      `${generateRandomSignature()} | ${generateProgramId()} | Status: SUCCESS`,
      `${generateRandomSignature()} | ${generateProgramId()} | Status: SUCCESS`
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let currentContent = terminalOutput;

    const typeWriter = () => {
      if (lineIndex < outputLines.length) {
        const line = outputLines[lineIndex];
        if (charIndex < line.length) {
          currentContent += line.charAt(charIndex);
          setTerminalOutput(currentContent);
          charIndex++;
          setTimeout(typeWriter, 15);
        } else {
          currentContent += '\n';
          setTerminalOutput(currentContent);
          lineIndex++;
          charIndex = 0;
          setTimeout(typeWriter, 200);
        }
      } else {
        setTimeout(() => {
          setTerminalOutput('# 1. INIT: Advanced blockchain forensics platform for the Solana ecosystem.\n# 2. STATUS: Initializing live data stream...');
          setTimeout(() => {
            lineIndex = 0;
            charIndex = 0;
            currentContent = '# 1. INIT: Advanced blockchain forensics platform for the Solana ecosystem.\n# 2. STATUS: Initializing live data stream...';
            typeWriter();
          }, 4000);
        }, 8000);
      }
    };

    setTimeout(typeWriter, 2000);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="text-center mb-16">
        <h1 className="text-6xl font-black uppercase text-white tracking-widest leading-none">
          CHAIN<span style={{ color: 'var(--color-accent)' }}>PROBE</span>
        </h1>
        <p className="text-xl terminal-text mt-2 text-white">&gt;&gt; SOLANA FORENSICS ENGINE V4.1.2</p>
        <p className="text-sm terminal-text mt-2 text-gray-400">contract address: <span className="cursor-pointer text-white hover:text-accent transition-colors" onClick={copyToClipboard} title="Click to copy">{contractCopied ? 'Copied!' : '9F3xxGwYKdX4eedh1CM39bwVWRmYj1UeXENeUp17pump'}</span></p>
        <div className="h-1 w-24 mx-auto mt-4 terminal-text" style={{ backgroundColor: 'var(--color-text)' }}></div>
      </header>

      <div className="terminal-hero text-center mb-24">
        <div className="terminal-text text-left max-w-4xl mx-auto">
          <p className="text-sm md:text-lg">
            <span className="font-bold" style={{ color: 'var(--color-accent)' }}>chainprobe@solana $ </span>
            <span className="text-white">fetch --target=anomaly_detection --network=mainnet</span>
            <span className="cursor">█</span>
          </p>
          <pre className="whitespace-pre-wrap text-xs md:text-sm mt-4 p-4 bg-[#0d0d0d] border border-border rounded-sm overflow-x-auto overflow-y-scroll h-64 terminal-text">
            {terminalOutput}
          </pre>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-10">
            <button 
              className="neo-btn neo-btn-primary text-2xl"
              onClick={() => navigate('/dashboard')}
            >
              LAUNCH INVESTIGATION <span className="ml-2 text-white/70">→</span>
            </button>
            <button 
              className="neo-btn terminal-text"
              style={{ 
                backgroundColor: 'var(--color-bg)', 
                color: 'var(--color-text)', 
                borderColor: 'var(--color-text)',
                boxShadow: '4px 4px 0 0 var(--color-text)'
              }}
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              EXPLORE FEATURES
            </button>
          </div>
        </div>
      </div>

      <div className="skew-divider"></div>

      <section className="max-w-7xl mx-auto mb-20" id="features">
        <h2 className="text-3xl font-black text-white mb-8 section-heading">
          <span className="terminal-text" style={{ color: 'var(--color-text)' }}>[CHAINPROBE] </span> CORE BENEFITS
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="neo-card p-6 rounded-none">
            <h3 className="text-xl font-bold terminal-text mb-2" style={{ color: 'var(--color-text)' }}>Enterprise-grade Security</h3>
            <p className="text-sm text-gray-300">Advanced security protocols for sensitive, mission-critical blockchain analyses, air-gapped from public view.</p>
            <div className="mt-4 text-right font-bold terminal-text" style={{ color: 'var(--color-accent)' }}>SECURE//</div>
          </div>
          <div className="neo-card p-6 rounded-none">
            <h3 className="text-xl font-bold terminal-text mb-2" style={{ color: 'var(--color-text)' }}>Real-time Data Streams</h3>
            <p className="text-sm text-gray-300">Stay current with the latest Solana blockchain activities, indexed and searchable within milliseconds of finality.</p>
            <div className="mt-4 text-right font-bold terminal-text" style={{ color: 'var(--color-accent)' }}>STREAM//</div>
          </div>
          <div className="neo-card p-6 rounded-none">
            <h3 className="text-xl font-bold terminal-text mb-2" style={{ color: 'var(--color-text)' }}>Open SDK & API Access</h3>
            <p className="text-sm text-gray-300">Programmatic access to all data and clustering algorithms for custom scripting and integration into existing tooling.</p>
            <div className="mt-4 text-right font-bold terminal-text" style={{ color: 'var(--color-accent)' }}>API_HOOK//</div>
          </div>
        </div>
      </section>

      <div className="skew-divider"></div>

      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-black text-white mb-8 section-heading">
          <span className="terminal-text" style={{ color: 'var(--color-text)' }}>[MODULES] </span> CORE TOOLSET
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="neo-card p-5 rounded-none group">
            <span className="text-4xl block mb-3" style={{ color: 'var(--color-accent)' }}>🛠️</span>
            <h3 className="text-lg font-bold text-white mb-1">Advanced Tx Analysis</h3>
            <p className="text-xs text-gray-400">Deep dive into Solana transactions with powerful visualization and pattern recognition.</p>
          </div>
          <div className="neo-card p-5 rounded-none group">
            <span className="text-4xl block mb-3" style={{ color: 'var(--color-accent)' }}>🔬</span>
            <h3 className="text-lg font-bold text-white mb-1">Forensic Investigation</h3>
            <p className="text-xs text-gray-400">Identify suspicious activities and trace transaction flows with state-of-the-art forensic tools.</p>
          </div>
          <div className="neo-card p-5 rounded-none group">
            <span className="text-4xl block mb-3" style={{ color: 'var(--color-accent)' }}>📡</span>
            <h3 className="text-lg font-bold text-white mb-1">Real-time Monitoring</h3>
            <p className="text-xs text-gray-400">Monitor Solana blockchain activities in real-time with instant alerts and notifications.</p>
          </div>
          <div className="neo-card p-5 rounded-none group">
            <span className="text-4xl block mb-3" style={{ color: 'var(--color-accent)' }}>🧩</span>
            <h3 className="text-lg font-bold text-white mb-1">Multi-dimensional Insights</h3>
            <p className="text-xs text-gray-400">Gain insights from transaction patterns through advanced clustering algorithms.</p>
          </div>
          <div className="neo-card p-5 rounded-none group">
            <span className="text-4xl block mb-3" style={{ color: 'var(--color-accent)' }}>👤</span>
            <h3 className="text-lg font-bold text-white mb-1">Entity Identification</h3>
            <p className="text-xs text-gray-400">Uncover hidden relationships and identify entities across the Solana ecosystem.</p>
          </div>
        </div>
      </section>

      <div className="skew-divider"></div>

      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-black text-white mb-8 section-heading">
          <span className="terminal-text" style={{ color: 'var(--color-text)' }}>[ANALYSIS] </span> DATA PIPELINES
        </h2>
        
        <div className="space-y-6">
          <button 
            onClick={() => navigate('/transaction-flow')}
            className="pipeline-item w-full"
          >
            <div>
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">Transaction Flow</h3>
              <p className="text-sm text-gray-400">Track the movement of funds across the blockchain with interactive visualization layers. <span className="terminal-text" style={{ color: 'var(--color-text)' }}>[VISUALIZE]</span></p>
            </div>
            <span className="text-3xl font-black terminal-text group-hover:text-terminal-green transition-colors" style={{ color: 'var(--color-accent)' }}>-&gt;</span>
          </button>

          <button 
            onClick={() => navigate('/wallet-analysis')}
            className="pipeline-item w-full"
          >
            <div>
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">Wallet Behavior Mapping</h3>
              <p className="text-sm text-gray-400">Deep-dive into wallet behavior, transaction patterns, and historical activity profiles. <span className="terminal-text" style={{ color: 'var(--color-text)' }}>[PROFILE]</span></p>
            </div>
            <span className="text-3xl font-black terminal-text group-hover:text-terminal-green transition-colors" style={{ color: 'var(--color-accent)' }}>-&gt;</span>
          </button>

          <button 
            onClick={() => navigate('/pattern-analysis')}
            className="pipeline-item w-full"
          >
            <div>
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">Pattern Anomaly Detection</h3>
              <p className="text-sm text-gray-400">Detect suspicious activities like wash trading, circular transfers, and unknown behavioral anomalies. <span className="terminal-text" style={{ color: 'var(--color-text)' }}>[ALERT]</span></p>
            </div>
            <span className="text-3xl font-black terminal-text group-hover:text-terminal-green transition-colors" style={{ color: 'var(--color-accent)' }}>-&gt;</span>
          </button>

          <button 
            onClick={() => navigate('/dashboard')}
            className="pipeline-item w-full"
          >
            <div>
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">Raw Data Export (JSON/CSV)</h3>
              <p className="text-sm text-gray-400">Export filtered, clustered, and attributed data directly for external computational analysis. <span className="terminal-text" style={{ color: 'var(--color-text)' }}>[EXPORT]</span></p>
            </div>
            <span className="text-3xl font-black terminal-text group-hover:text-terminal-green transition-colors" style={{ color: 'var(--color-accent)' }}>-&gt;</span>
          </button>
        </div>
      </section>

      <div className="skew-divider"></div>

      <footer className="max-w-7xl mx-auto mt-20 text-center py-6 border-t-2" style={{ borderColor: 'var(--color-border)' }}>
        <p className="text-xs terminal-text text-gray-500">
          POWERED BY <span style={{ color: 'var(--color-text)' }}>SOLANA </span>
        </p>
        <p className="text-xs terminal-text mt-1 text-gray-500">
          © 2025 CHAINPROBE - ALL RIGHTS RESERVED | <span style={{ color: 'var(--color-accent)' }}>E.O.D.</span>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
