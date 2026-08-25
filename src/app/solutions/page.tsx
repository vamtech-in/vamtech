import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, HeartPulse, Landmark, ShoppingBag, Sparkles, Waypoints } from 'lucide-react';

const solutions = [
  ['Startups', 'Move from first idea to a product people want to use.', Sparkles],
  ['FinTech', 'Build trusted, clear, resilient experiences for modern finance.', Landmark],
  ['E-commerce', 'Make every part of the customer journey feel effortless.', ShoppingBag],
  ['Healthcare', 'Create thoughtful digital tools for better outcomes.', HeartPulse],
  ['SaaS', 'Turn a strong product idea into a platform that compounds.', Waypoints],
  ['Enterprise', 'Modernize systems and unlock the next chapter of growth.', BriefcaseBusiness],
];

export const metadata = { title: 'Solutions | VAM|Tech', description: 'Technology solutions shaped around your industry and ambition.' };

export default function SolutionsPage() {
  return <main className="subpage"><div className="container subpage-hero"><span className="kicker">Solutions</span><h1>Technology that understands the <em>context.</em></h1><p>Different industries carry different constraints. We pair strong engineering with a close read of the problem so the result fits the business, not just the brief.</p></div><div className="container subpage-grid">{solutions.map(([title, text, Icon]) => <article className="subpage-card" key={title as string}><Icon size={25} /><h2>{title as string}</h2><p>{text as string}</p><Link href="/contact" className="card-link">Talk to us <ArrowRight size={16} /></Link></article>)}</div></main>;
}
