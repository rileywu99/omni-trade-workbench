import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Globe2, ShoppingCart, Route, ShieldCheck, Wallet, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import port from '@/assets/omnitrade-port.jpg';

const workspaces = [
  { number: '01', title: 'Procurement, without the back-and-forth.', description: 'Bring vendor conversations, purchase orders, and delivery commitments into one connected workflow.', icon: ShoppingCart, to: '/vendors', label: 'Vendor & PO Automation' },
  { number: '02', title: 'A clear view of every mile.', description: 'Follow shipments across borders and evaluate alternative routes when plans change.', icon: Route, to: '/logistics', label: 'Logistics Orchestrator' },
  { number: '03', title: 'Cross borders with confidence.', description: 'Review trade documents, investigate classification discrepancies, and stay on top of regulatory changes.', icon: ShieldCheck, to: '/compliance', label: 'Trade Compliance' },
  { number: '04', title: 'Close the loop on every invoice.', description: 'Connect purchase orders, goods receipts, and invoices with multi-currency reconciliation.', icon: Wallet, to: '/finance', label: 'Financial Reconciliation' },
] as const;

export function Landing() {
  return <div className="marketing-page">
    <header className="marketing-header"><Link to="/" className="brand"><span className="brand-mark"><Globe2/></span><span>OmniTrade <b>AI</b></span></Link><span className="marketing-nav-label">CROSS-BORDER OPERATIONS</span><Button asChild variant="outline"><Link to="/dashboard">Open workspace<ArrowUpRight/></Link></Button></header>
    <main>
      <section className="marketing-hero">
        <img src={port} width={1920} height={1024} alt="Container ships and cranes at a global shipping terminal" className="marketing-cover"/>
        <div className="marketing-shade"/>
        <div className="marketing-hero-content"><span className="marketing-kicker"><span/> INTELLIGENCE BEYOND BORDERS</span><h1>OmniTrade AI</h1><p className="marketing-statement">Global trade.<br/>One connected workspace.</p><p className="marketing-description">Bring procurement, logistics, compliance, and finance together. Keep your team focused on the decisions that move business forward.</p><div className="marketing-actions"><Button asChild size="lg"><Link to="/dashboard">Explore the workspace<ArrowRight/></Link></Button><span>Interactive product demo</span></div></div>
        <div className="marketing-hero-bottom"><span>FROM PURCHASE ORDER TO FINAL SETTLEMENT</span><span>Connected at every step <ArrowRight size={16}/></span></div>
      </section>
      <section className="marketing-platform">
        <div className="marketing-section-heading"><div><span className="eyebrow">THE OMNITRADE WORKSPACE</span><h2>One operation.<br/>Not a dozen disconnected tools.</h2></div><p>Your supply chain doesn’t stop at a department boundary. Your workspace shouldn’t either.</p></div>
        <div className="marketing-workspaces">{workspaces.map(item=><article key={item.to}><div className="marketing-module-top"><item.icon size={25}/><span>{item.number}</span></div><h3>{item.title}</h3><p>{item.description}</p><Button asChild variant="ghost"><Link to={item.to}>{item.label}<ArrowUpRight size={16}/></Link></Button></article>)}</div>
      </section>
      <section className="marketing-command"><div><span className="eyebrow">THE BIG PICTURE</span><h2>Every signal.<br/>One command center.</h2><p>See shipment performance, open exceptions, and financial health in a single view. Move from the overview to the work that needs your attention.</p><Button asChild><Link to="/dashboard"><LayoutDashboard size={17}/>View command center<ArrowRight size={17}/></Link></Button></div><div className="marketing-flow">{['Purchase order','Shipment tracking','Compliance review','Invoice reconciliation'].map((text,i)=><div key={text}><span>0{i+1}</span><strong>{text}</strong><ArrowRight size={20}/></div>)}</div></section>
      <section className="marketing-cta"><span className="eyebrow">YOUR NEXT MOVE</span><h2>See your global operation,<br/>differently.</h2><Button asChild size="lg"><Link to="/dashboard">Explore OmniTrade AI<ArrowUpRight/></Link></Button></section>
    </main>
    <footer className="marketing-footer"><Link to="/" className="brand"><Globe2 size={22}/><span>OmniTrade <b>AI</b></span></Link><span>Global operations, intelligently connected.</span><Button asChild variant="ghost"><Link to="/dashboard">Workspace<ArrowUpRight size={16}/></Link></Button></footer>
  </div>;
}