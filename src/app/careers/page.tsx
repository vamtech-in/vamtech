import Link from 'next/link';
import { ArrowRight, Code2, HeartHandshake, Lightbulb } from 'lucide-react';

const values = [['Stay curious', 'We ask better questions before we reach for answers.', Lightbulb], ['Make it human', 'Great work is clearer when people feel seen in the process.', HeartHandshake], ['Own the outcome', 'We care about what ships, not just what is said.', Code2]];

export const metadata = { title: 'Careers | VAM|Tech', description: 'Join VAM|Tech and help build thoughtful digital products.' };

export default function CareersPage() {
  return <main className="subpage"><div className="container subpage-hero"><span className="kicker">Careers</span><h1>Bring your best thinking. <em>Keep learning.</em></h1><p>We are building a small, thoughtful team of engineers, designers, and product thinkers who care about the quality of the work and the way we do it.</p><Link href="mailto:hello@vamtech.io" className="button button-dark">Say hello <ArrowRight size={17} /></Link></div><div className="container careers-values">{values.map(([title, text, Icon]) => <article className="subpage-card" key={title as string}><Icon size={25} /><h2>{title as string}</h2><p>{text as string}</p></article>)}</div><section className="career-note"><div className="container"><h2>No open roles right now.</h2><p>We still like meeting good people. Send a note with what you do and what you want to make next.</p><Link href="mailto:hello@vamtech.io" className="card-link">Introduce yourself <ArrowRight size={16} /></Link></div></section></main>;
}
