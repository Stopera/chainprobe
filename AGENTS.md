# ChainProbe - Agent Guidelines

## Commands
- **Dev server**: `npm run dev` (frontend) or `cd backend && npm run dev` (backend)
- **Build**: `npm run build` (runs TypeScript compiler + Vite build)
- **Lint**: `npm run lint` (ESLint with TypeScript)
- **Preview**: `npm run preview` (preview production build)
- **Backend tests**: `cd backend && npm run test` (test API endpoints)

## Architecture
- **Frontend**: React 18 + TypeScript + Vite; React Router for routing; TanStack Query for data fetching
- **Backend**: Express.js API proxy (`/backend`) for Helius, Webacy, RugCheck, Dune APIs
- **Components**: `src/components/` (Dashboard, TransactionFlow, WalletAnalysis, TokenSecurity, etc.)
- **Services**: `src/services/` (solana.ts, webacy.ts, dune.ts, patternDetection.ts)
- **Visualization**: force-graph, react-force-graph-3d, reactflow, chart.js for interactive 3D graphs
- **Styling**: Tailwind CSS + Framer Motion; use existing theme and component patterns

## Code Style
- **TypeScript strict mode**: All code in TypeScript; use proper types from `src/types/`
- **Imports**: Use ES6 imports; React components use named exports
- **Component patterns**: Functional components with hooks; follow existing patterns in `/src/components/`
- **Error handling**: Implement try-catch with graceful fallbacks; use error boundaries for components
- **Naming**: PascalCase for components, camelCase for functions/variables, UPPER_CASE for constants
- **No comments**: Code should be self-documenting unless complex algorithms require explanation
