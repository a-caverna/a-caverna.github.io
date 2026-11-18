import { Activity, BookOpen, BrainCircuit, CalendarCheck, ChartNoAxesCombined, Dumbbell, Heart, LayoutDashboard, Target, Wallet } from 'lucide-react';

const modules = [
  { name: 'Rotina', description: 'Hábitos, tarefas e compromissos', icon: CalendarCheck },
  { name: 'Treino', description: 'Fichas, sessões e progressão', icon: Dumbbell },
  { name: 'Biblioteca', description: 'Leitura, notas e conhecimento', icon: BookOpen },
  { name: 'Gratidão', description: 'Diário e reflexões pessoais', icon: Heart },
  { name: 'Evolução física', description: 'Medidas e histórico corporal', icon: Activity },
  { name: 'Finanças', description: 'Orçamento, dívidas e objetivos', icon: Wallet },
  { name: 'Metas', description: 'Projetos e marcos pessoais', icon: Target },
  { name: 'Evolução', description: 'Calendário, XP e conquistas', icon: ChartNoAxesCombined },
  { name: 'Mentor', description: 'Acompanhamento e prestação de contas', icon: BrainCircuit },
];

export default function App() {
  return <div className="shell">
    <aside className="sidebar">
      <div className="brand"><span className="brand-mark">C</span><div><strong>CAVERNA</strong><small>LIFE SYSTEM 2.0</small></div></div>
      <div className="nav-label">WORKSPACE</div>
      <a className="nav-item active"><LayoutDashboard size={17}/> Overview</a>
      {modules.map(({name, icon: Icon}) => <a className="nav-item" key={name}><Icon size={17}/>{name}</a>)}
      <div className="sidebar-footer"><span className="status-dot"/> FOUNDATION / ALPHA</div>
    </aside>
    <main className="main">
      <header className="topbar"><span>PERSONAL COMMAND CENTER</span><span className="avatar">D</span></header>
      <section className="hero"><div className="eyebrow">YOUR LIFE. YOUR SYSTEM.</div><h1>Uma vida.<br/><em>Várias dimensões.</em></h1><p>A nova fundação da Caverna está pronta para começar.</p></section>
      <section className="section-head"><div><div className="eyebrow">MODULES</div><h2>Seu espaço de evolução</h2></div><span className="module-count">09 ÁREAS PLANEJADAS</span></section>
      <section className="module-grid">{modules.map(({name, description, icon: Icon}, index) => <article className="module-card" key={name}><div className="module-icon"><Icon size={20}/></div><div className="module-index">0{index + 1}</div><h3>{name}</h3><p>{description}</p><span className="card-arrow">↗</span></article>)}</section>
      <footer> CAVERNA 2.0 <span>NEON NOIR · API FIRST · MODULAR FOUNDATION</span></footer>
    </main>
  </div>;
}
