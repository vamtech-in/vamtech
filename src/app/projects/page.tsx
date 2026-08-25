import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  ['01', 'Operations, made visible', 'Business Management System', 'A calm command center for teams replacing disconnected tools with one shared operating picture.', ['Product design', 'Next.js', 'Node.js']],
  ['02', 'More useful intelligence', 'AI Productivity Assistant', 'A focused AI workspace that helps people find context, make decisions, and keep work moving.', ['AI product', 'Python', 'OpenAI']],
  ['03', 'A better way to buy', 'E-commerce Platform', 'A flexible commerce experience designed around discovery, confidence, and repeat customers.', ['E-commerce', 'React', 'PostgreSQL']],
];

export const metadata = { title: 'Projects | VAM|Tech', description: 'Selected VAM|Tech product and engineering work.' };

export default function ProjectsPage() {
  return <main className="subpage"><div className="container subpage-hero"><span className="kicker">Selected work</span><h1>Small details. <em>Meaningful</em> outcomes.</h1><p>These are representative projects and editable placeholders for the work we are proud to share. Every engagement starts with a real problem and ends with something useful in the world.</p></div><div className="container projects-list">{projects.map(([number, title, name, text, tags]) => <article className="project-row" key={String(number)}><div className="project-row-art"><span>{number}</span><div /></div><div><span className="kicker">{title as string}</span><h2>{name as string}</h2><p>{text as string}</p><div className="tag-row">{(tags as string[]).map(tag => <span key={tag}>{tag}</span>)}</div><Link href="/contact" className="card-link">Discuss a similar project <ArrowRight size={16} /></Link></div></article>)}</div></main>;
}
