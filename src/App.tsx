/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  Award, 
  BookOpen, 
  Briefcase,
  ChevronRight,
  Download,
  Sun,
  Moon
} from "lucide-react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.title = "Cristiano Mafra Junior - Resume";
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const skills = [
    { name: "Odoo", icon: <Cpu className="w-4 h-4" /> },
    { name: "Python", icon: <Code2 className="w-4 h-4" /> },
    { name: "Django", icon: <Terminal className="w-4 h-4" /> },
    { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
    { name: "Docker", icon: <Terminal className="w-4 h-4" /> },
    { name: "Git", icon: <Github className="w-4 h-4" /> },
    { name: "APIs REST", icon: <ExternalLink className="w-4 h-4" /> },
    { name: "XML/JSON", icon: <Code2 className="w-4 h-4" /> },
    { name: "Linux", icon: <Terminal className="w-4 h-4" /> },
  ];

  const experiences = [
    {
      company: "Escodoo | ERP & CRM Open Source",
      role: "Desenvolvedor Odoo",
      period: "Julho de 2025 - Presente",
      location: "Ribeirão Preto, São Paulo, Brasil",
      description: "Atuo no desenvolvimento, customização e evolução de soluções ERP sob medida. Foco em qualidade, performance e aderência aos processos do cliente.",
      tasks: [
        "Desenvolvimento e manutenção de módulos Odoo",
        "Implementação de regras de negócio complexas",
        "Integrações fiscais e governamentais (NF-e, CT-e, NFSe, PNCP, CNAB)",
        "Customizações em módulos financeiros, contábeis, vendas e CRM",
        "Escrita de testes automatizados e otimização de código"
      ]
    },
    {
      company: "Engenere",
      role: "Desenvolvedor Odoo",
      period: "Dezembro de 2023 - Julho de 2025",
      location: "São João Batista, Santa Catarina, Brasil",
      description: "Desenvolvimento de soluções back-end especializadas em Odoo para atender regras de negócio específicas.",
      tasks: [
        "Atuação direta em projetos da localização brasileira da OCA",
        "Desenvolvimento da biblioteca open source BrazilFiscalReport",
        "Migração de módulos entre versões Odoo 14 e 16",
        "Geração e impressão de documentos fiscais (DANFE, DACTE, DAMDFE)"
      ]
    }
  ];

  const ocaRankings = [
    { month: "Novembro", rank: "8º lugar" },
    { month: "Dezembro", rank: "11º lugar" },
    { month: "Outubro", rank: "13º lugar" },
    { year: "Anual", rank: "29º lugar" }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-[#F8F9FA] dark:bg-zinc-950 text-[#1A1A1A] dark:text-zinc-100 font-sans selection:bg-emerald-100 dark:selection:bg-emerald-900 selection:text-emerald-900 dark:selection:text-emerald-100 transition-colors duration-300`}>
      {/* Navigation / Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">Cristiano<span className="text-emerald-600">.</span></span>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-500 dark:text-zinc-400">
            <a href="#about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sobre</a>
            <a href="#experience" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Experiência</a>
            <a href="#skills" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contato</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-gray-500 dark:text-zinc-400"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <Download className="w-4 h-4" />
              PDF
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-24">
        
        {/* Hero Section */}
        <section id="about" className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-6">
            <motion.div {...fadeIn}>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Cristiano <br />
                <span className="text-emerald-600">Mafra Junior</span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 font-medium">
                Desenvolvedor Odoo & Python | Especialista em Integrações ERP
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.2 }}
              className="prose prose-lg text-gray-600 dark:text-zinc-400 leading-relaxed"
            >
              <p>
                Sou Desenvolvedor Odoo e Python com foco em ERP, integrações fiscais e automação de processos empresariais. 
                Atuo no desenvolvimento de soluções robustas, escaláveis e alinhadas às regras de negócio dos clientes.
              </p>
              <p>
                Tenho forte atuação em integrações fiscais brasileiras, lidando diretamente com XML, regras municipais, 
                webservices e tratamento de erros em produção.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 pt-4">
              <a href="mailto:cristiano.mafracontanto@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm">
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a href="https://www.linkedin.com/in/cristiano-mafra-junior-887aab285" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href="https://github.com/CristianoMafraJunior" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg text-gray-500 dark:text-zinc-400 shadow-sm">
                <MapPin className="w-4 h-4" />
                Canelinha, SC
              </div>
            </motion.div>
          </div>

          <motion.div 
            {...fadeIn} 
            transition={{ delay: 0.4 }}
            className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 rounded-3xl p-8 space-y-6"
          >
            <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400 font-bold">
              <Award className="w-5 h-5" />
              <span>OCA Contributor</span>
            </div>
            <p className="text-sm text-emerald-800/80 dark:text-emerald-300/80 leading-relaxed">
              Participante ativo da Odoo Community Association, contribuindo com código e revisões em módulos da comunidade.
            </p>
            <div className="space-y-3">
              {ocaRankings.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm border-b border-emerald-200/50 dark:border-emerald-800/50 pb-2 last:border-0">
                  <span className="text-emerald-700/70 dark:text-emerald-400/70">{item.month || `Ranking ${item.year}`}</span>
                  <span className="font-bold text-emerald-800 dark:text-emerald-300">{item.rank}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Tecnologias & Competências</h2>
            <div className="h-px flex-1 bg-gray-200 dark:bg-zinc-800"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-lg">
                  {skill.icon}
                </div>
                <span className="font-medium text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Experiência Profissional</h2>
            <div className="h-px flex-1 bg-gray-200 dark:bg-zinc-800"></div>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="relative pl-8 border-l-2 border-emerald-100 dark:border-emerald-900/30 space-y-4"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white dark:border-zinc-950 shadow-sm"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100">{exp.role}</h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-zinc-400 bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-zinc-400 max-w-3xl">{exp.description}</p>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                  {exp.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2 text-sm text-gray-500 dark:text-zinc-500">
                      <ChevronRight className="w-4 h-4 mt-0.5 text-emerald-400 dark:text-emerald-600 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold tracking-tight">Formação</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-zinc-800"></div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
                <BookOpen className="w-5 h-5" />
                <span className="font-bold">UNIFEBE</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-zinc-100">Bacharelado, Sistema de Informações</h3>
                <p className="text-sm text-gray-500 dark:text-zinc-400">Centro Universitário de Brusque</p>
                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-2">2022 — 2026 (Em andamento)</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold tracking-tight">Certificações</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-zinc-800"></div>
            </div>
            <div className="space-y-4">
              {[
                "Odoo ERP para Desenvolvedores",
                "Java 2022 Completo: Do Zero ao Profissional",
                "Criando Robôs com Python - Automação"
              ].map((cert, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-sm">
                  <Award className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-zinc-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <section id="contact" className="pt-12 border-t border-gray-200 dark:border-zinc-800 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Vamos conversar?</h2>
            <p className="text-gray-500 dark:text-zinc-400 max-w-md mx-auto">
              Estou sempre em busca de novos desafios e oportunidades para contribuir com projetos inovadores.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:cristiano.mafracontanto@gmail.com"
              className="group flex items-center gap-3 text-lg font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 rounded-full group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
                <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              cristiano.mafracontanto@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/cristiano-mafra-junior-887aab285"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-lg font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              LinkedIn
            </a>
            <a 
              href="https://github.com/CristianoMafraJunior"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-lg font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-full group-hover:bg-zinc-100 dark:group-hover:bg-zinc-700 transition-colors">
                <Github className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
              </div>
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-sm text-gray-400 dark:text-zinc-500 border-t border-gray-100 dark:border-zinc-900">
        <p>© {new Date().getFullYear()} Cristiano Mafra Junior. Desenvolvido com React & Tailwind.</p>
      </footer>
    </div>
  );
}
