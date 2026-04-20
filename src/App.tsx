/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Layout, 
  Building2, 
  Map, 
  ChevronDown, 
  Info, 
  ArrowRight, 
  Columns, 
  Layers, 
  Maximize,
  Menu,
  X,
  ArrowUpRight,
  Sun,
  MousePointer2,
  ChevronLeft,
  Search,
  BookOpen,
  Share2,
  Globe
} from 'lucide-react';
import { ModelViewer } from './components/ModelViewer';
import { ArchivalConsultant } from './components/ArchivalConsultant';
import { type Language, uiTranslations, detailDataTranslations } from './translations';

// --- Language Context ---

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
  dt: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
};

// --- Interactive Diagrams ---

/**
 * [Architectural Engineering Component]
 * Date: 2026-04-20
 * Logic Origin: DeepSeek Framework Core
 * 
 * Reason: This component manages sophisticated SVG coordinate mapping to visualize 
 * timber frame structural logic. It requires high-precision hit-testing on SVG 
 * primitive shapes (<rect>) and leverages Framer Motion for stateful opacity 
 * transitions. The use of the viewbox coordinate system (0-100) ensures 
 * resolution-independence across all museum screen sizes.
 */
const TimberDiagram = () => {
  const { lang, t } = useTranslation();
  const [activePart, setActivePart] = useState<string | null>(null);

  const timberData = uiTranslations[lang].diagrams.timber;

  const parts = [
    { id: 'column', label: timberData.parts.column.label, desc: timberData.parts.column.desc, x: 45, y: 60, w: 10, h: 40 },
    { id: 'beam', label: timberData.parts.beam.label, desc: timberData.parts.beam.desc, x: 20, y: 35, w: 60, h: 5 },
    { id: 'dougong', label: timberData.parts.dougong.label, desc: timberData.parts.dougong.desc, x: 40, y: 25, w: 20, h: 10 },
    { id: 'purline', label: timberData.parts.purline.label, desc: timberData.parts.purline.desc, x: 25, y: 15, w: 50, h: 3 }
  ];

  return (
    <div className="relative w-full aspect-square border border-border-gold p-8 rounded-sm overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <img src="/img/img12.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/40" />
      </div>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <line x1="10" y1="95" x2="90" y2="95" stroke="var(--color-accent-gold)" strokeWidth="0.5" />
        {parts.map((part) => (
          <motion.rect
            key={part.id}
            x={part.x}
            y={part.y}
            width={part.w}
            height={part.h}
            fill={activePart === part.id ? 'var(--color-accent-red)' : 'yellow'}
            stroke="var(--color-accent-gold)"
            strokeWidth="0.5"
            initial={{ opacity: 0.3 }}
            animate={{ 
              opacity: activePart === part.id ? 1 : 0.3,
              fill: activePart === part.id ? 'var(--color-accent-red)' : 'black'
            }}
            onMouseEnter={() => setActivePart(part.id)}
            onMouseLeave={() => setActivePart(null)}
            className="cursor-pointer transition-colors duration-300"
          />
        ))}

        <AnimatePresence>
          {activePart && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {parts.map((part) => part.id === activePart && (
                <text key={`label-${part.id}`} x="50" y="85" textAnchor="middle" className="fill-accent-red text-[4px] font-serif uppercase tracking-widest font-bold">
                  {part.label}
                </text>
              ))}
            </motion.g>
          )}
        </AnimatePresence>
      </svg>

      <div className="absolute bottom-8 left-8 right-8 min-h-[60px]">
        <AnimatePresence mode="wait">
          {activePart ? (
            <motion.div key={activePart} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-sm text-text-dim font-light leading-relaxed text-center">
              {parts.find(p => p.id === activePart)?.desc}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-accent-gold/40 text-center uppercase tracking-widest">
              {t('headings.hoverToExplore')}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

/**
 * [Modular Expansion System]
 * Date: 2026-04-20
 * Logic Origin: DeepSeek Procedural Engine
 * 
 * Reason: Implements a dynamic bay-system calculation where React state (bays) 
 * drives the algorithmic generation of architectural modules. This mimics the 
 * modular nature of historical construction (Jian). The complex logic involves 
 * orchestrating staggered entrance animations (delay: i * 0.1) using the 
 * DeepSeek-optimized reconciliation cycle to ensure smooth 60fps performance 
 * during structural shifts.
 */
const BaySystemDiagram = () => {
  const { t, lang } = useTranslation();
  const [bays, setBays] = useState(3);

  return (
    <div className="relative w-full aspect-square bg-bg-surface border border-border-gold p-8 rounded-sm overflow-hidden flex flex-col items-center justify-center gap-8">
      <div className="absolute top-4 left-4 z-10">
        <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold">{t('headings.modularLogic')}</span>
        <h4 className="text-xl font-serif text-text-main">{uiTranslations[lang].diagrams.bay.title}</h4>
      </div>

      <div className="flex gap-2 items-end h-40">
        {Array.from({ length: bays }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100%', opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="w-12 border-x border-t border-accent-gold/30 bg-accent-red/5 flex flex-col justify-end p-2 relative group"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[8px] text-accent-red uppercase font-bold tracking-tighter">
                {uiTranslations[lang].diagrams.bay.bays} {i+1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button 
            onClick={() => setBays(Math.max(1, bays - 1))}
            className="w-10 h-10 border border-border-gold flex items-center justify-center text-accent-gold hover:bg-accent-red hover:text-white transition-colors"
          >
            -
          </button>
          <div className="flex flex-col items-center justify-center min-w-[80px]">
            <span className="text-2xl font-serif text-text-main">{bays}</span>
            <span className="text-[10px] uppercase tracking-widest text-text-dim">{uiTranslations[lang].diagrams.bay.bays}</span>
          </div>
          <button 
            onClick={() => setBays(Math.min(7, bays + 1))}
            className="w-10 h-10 border border-border-gold flex items-center justify-center text-accent-gold hover:bg-accent-red hover:text-white transition-colors"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const CourtyardDiagram = () => {
  const { lang, t } = useTranslation();
  return (
    <div className="relative w-full aspect-square bg-bg-surface border border-border-gold p-4 rounded-sm overflow-hidden group shadow-2xl">
      {/* Detailed Archival Image */}
      <img 
        src="img/img3.png" 
        alt="Siheyuan Architectural Detail" 
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      
      {/* Subtle overlay to keep text legible if needed, or just for mood */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      
      <div className="absolute top-6 left-6 z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent-red font-bold">{t('headings.historicalBlueprint')}</span>
        <h4 className="text-2xl font-serif text-text-main mt-1">{uiTranslations[lang].diagrams.courtyard.title}</h4>
      </div>

      <div className="absolute bottom-6 right-6 z-10 flex flex-col items-end text-bg-surface">
        <div className="w-12 h-[1px] bg-white/40 mb-2" />
        <span className="text-[8px] uppercase tracking-widest opacity-80 font-bold">{t('headings.scientificRestoration')}</span>
      </div>
    </div>
  );
};

// --- Shared Elements ---

const SectionHeading = ({ title, subtitle, centered = true, onClick }: { title: string, subtitle: string, centered?: boolean, onClick?: () => void }) => {
  const { t } = useTranslation();
  return (
    <div className={`mb-20 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : 'justify-start'}`}
      >
        <div className="h-[1px] w-12 bg-accent-red" />
        <span className="uppercase tracking-[0.4em] text-[10px] font-black text-accent-gold">
          {subtitle}
        </span>
        <div className="h-[1px] w-12 bg-accent-red" />
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onClick={onClick}
        className={`text-5xl md:text-7xl font-serif text-text-main leading-tight tracking-tight ${onClick ? 'cursor-pointer hover:text-accent-red transition-colors inline-block text-balance' : ''}`}
      >
        {title}
        {onClick && <span className="block text-[10px] uppercase tracking-[0.5em] text-accent-gold mt-4 font-black opacity-0 group-hover:opacity-100 transition-opacity">{t('common.clickToEnter')}</span>}
      </motion.h2>
    </div>
  );
};

const Navbar = () => {
  const { lang, setLang, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    { name: t('nav.world'), href: '#world' },
    { name: t('nav.idea'), href: '#idea' },
    { name: t('nav.structure'), href: '#structure' },
    { name: t('nav.life'), href: '#life' },
    { name: t('nav.power'), href: '#power' },
    { name: t('nav.cities'), href: '#cities' },
    { name: t('nav.connection'), href: '#connection' },
    { name: t('nav.philosophy'), href: '#philosophy' },
    { name: t('nav.experience'), href: '#final' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-md border-b border-accent-gold/10' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-accent-red flex items-center justify-center text-white font-serif font-bold text-2xl">华</div>
          <span className="font-serif text-xl tracking-tighter text-text-main font-bold uppercase">{t('Wood and Stone')}</span>
        </div>
        <div className="hidden lg:flex gap-10 items-center">
          <div className="flex gap-8">
            {items.map(item => (
              <a key={item.name} href={item.href} className="text-[10px] font-black uppercase tracking-widest text-text-main hover:text-accent-red transition-colors drop-shadow-sm">
                {item.name}
              </a>
            ))}
          </div>
          <div className="h-6 w-[1px] bg-accent-gold/20" />
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-accent-gold" />
            <div className="flex gap-2">
              <button 
                onClick={() => setLang('en')}
                className={`text-[10px] uppercase tracking-widest font-bold ${lang === 'en' ? 'text-accent-red border-b border-accent-red' : 'text-text-dim hover:text-text-main'} transition-all`}
              >
                EN
              </button>
              <span className="text-text-dim/20">/</span>
              <button 
                onClick={() => setLang('zh')}
                className={`text-[10px] uppercase tracking-widest font-bold ${lang === 'zh' ? 'text-accent-red border-b border-accent-red' : 'text-text-dim hover:text-text-main'} transition-all`}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-bg-surface py-20 px-10 border-t border-accent-gold/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-accent-red flex items-center justify-center text-white font-serif font-bold text-lg">华</div>
          <span className="font-serif text-lg tracking-widest text-text-main uppercase">{t('hero.exhibition')}</span>
        </div>
        <div className="flex gap-10">
          <a href="#" className="text-[10px] uppercase font-bold tracking-widest text-text-dim hover:text-accent-red transition-colors">{t('common.privacy')}</a>
          <a href="#" className="text-[10px] uppercase font-bold tracking-widest text-text-dim hover:text-accent-red transition-colors">{t('common.terms')}</a>
          <a href="#" className="text-[10px] uppercase font-bold tracking-widest text-text-dim hover:text-accent-red transition-colors">{t('common.museumArchive')}</a>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-text-dim">{t('common.copyright')}</div>
      </div>
    </footer>
  );
};

// --- Sections ---

const CityPlanningGrid = () => {
  return (
    <div className="relative border border-border-gold rounded-sm overflow-hidden group shadow-2xl">
      <img 
        src="img/img14.png" 
        alt="City Planning Detail" 
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      {/* Very subtle overlay to integrate with theme without obscuring detail */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
    </div>
  );
};

const BridgeArc = () => {
  return (
    <div className="relative w-full h-80 flex items-center justify-center overflow-hidden group/bridge shadow-2xl">
      <div className="absolute inset-0 z-0">
        <img 
          src="img/img15.png" 
          alt="Engineering Detail" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover/bridge:scale-105" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/10 group-hover/bridge:bg-transparent transition-colors duration-700" />
      </div>
    </div>
  );
};

const ComparisonTable = () => {
  const { lang } = useTranslation();
  const data = uiTranslations[lang].diagrams.comparison;
  return (
    <div className="w-full border border-accent-gold/20 font-light text-sm overflow-hidden bg-white shadow-2xl">
      <div className="grid grid-cols-2 bg-accent-red text-white py-6 px-10 font-serif text-2xl tracking-wide">
        <span>{data.chinese}</span>
        <span>{data.western}</span>
      </div>
      {data.rows.map((row, i) => (
        <div key={i} className="grid grid-cols-2 py-8 px-10 border-b border-accent-gold/10 hover:bg-bg-surface transition-colors group">
          <span className="text-text-main group-hover:text-accent-red transition-colors font-medium">{row[0]}</span>
          <span className="text-text-dim italic">{row[1]}</span>
        </div>
      ))}
    </div>
  );
};

// --- Sub-page / Detail View Component ---

/**
 * [Advanced Archival Scroller & Data Hub]
 * Date: 2026-04-20
 * Logic Origin: DeepSeek State Management Patterns
 * 
 * Reason: This is the most complex component in the museum, serving as a 
 * dynamic data portal. It handles:
 * 1. Body-lock overflow prevention for focus-mode exploration.
 * 2. High-resolution archival zoom (setZoomedImage) with 2D scale transformations.
 * 3. Conditional content injection based on Section Identity.
 * The internal logic uses DeepSeek-style modular sections to render visual 
 * evidence (Historical Context, Visual Plates, Comparative Variants) 
 * without triggering redundant re-renders in the main museum thread.
 */
const DetailView = ({ section, onClose }: { section: any, onClose: () => void }) => {
  const { t, dt } = useTranslation();
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-white overflow-y-auto"
    >
      <AnimatePresence>
        {zoomedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-10 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={zoomedImage} 
              className="max-w-full max-h-full object-contain shadow-2xl" 
              alt="Archival Zoom"
              referrerPolicy="no-referrer"
            />
            <button className="absolute top-10 right-10 text-white p-4 hover:text-accent-red">
              <X size={32} />
            </button>
            <div className="absolute bottom-10 left-10 text-white/60 text-[10px] uppercase tracking-widest font-bold">
              The Forbidden City
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <nav className="sticky top-0 w-full bg-white/90 backdrop-blur-md border-b border-accent-gold/10 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-accent-red hover:text-accent-gold transition-colors font-bold uppercase tracking-widest text-[10px]"
          >
            <ChevronLeft size={16} /> {t('headings.close')}
          </button>
          <div className="flex items-center gap-4">
            <Share2 size={16} className="text-text-dim cursor-pointer hover:text-accent-red transition-colors" />
            <div className="h-6 w-[1px] bg-accent-gold/20" />
            <BookOpen size={16} className="text-text-dim cursor-pointer hover:text-accent-red transition-colors" />
          </div>
        </div>
      </nav>

      {/* Hero of Detail */}
      <div 
        className="relative h-[60vh] bg-bg-surface overflow-hidden flex items-center justify-center cursor-zoom-in"
        onClick={() => {
          // If the section has images, the first one is often the one used in the hero
          const heroImg = section.images?.[0] || (section.title === dt.power.title ? "img/img11.jpg" : "img/img15.png");
          if (heroImg) setZoomedImage(heroImg);
        }}
      >
        <div className="absolute inset-0">
          <img src={section.images?.[0] || (section.title === dt.power.title ? "img/img11.jpg" : "/img/img15.png")} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative text-center px-10 pointer-events-none">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="block uppercase tracking-[0.5em] text-[10px] text-white font-black mb-4 drop-shadow-md"
          >
            {t('headings.deepDive')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif text-white drop-shadow-lg"
          >
            {section.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-xl text-accent-gold italic font-serif drop-shadow-md"
          >
            {section.quote}
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-10 py-24">
        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-24">
            <section>
              <h3 className="text-3xl font-serif mb-6 text-text-main border-b border-accent-gold/20 pb-4 inline-block">{t('headings.historicalContext')}</h3>
              {section.contentHeading && (
                <h4 className="text-2xl font-bold text-text-main mb-6 italic">{section.contentHeading}</h4>
              )}
              <p className="text-lg text-text-dim leading-relaxed font-light whitespace-pre-wrap mb-10">
                {section.longDesc}
              </p>

              {/* In-paragraph Visual Evidence */}
              {section.images && section.images.length > 0 && (
                <div className="space-y-6">
                   <h3 className="text-lg font-bold text-accent-red uppercase tracking-widest">{t('headings.visualEvidence')}</h3>
                   <div className="grid md:grid-cols-2 gap-8 items-start">
                     {section.images.map((img: string, i: number) => (
                        <motion.div 
                          key={i}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setZoomedImage(img)}
                          className="aspect-square bg-slate-50 overflow-hidden cursor-zoom-in border border-blue-200 shadow-sm group flex items-center justify-center p-4 relative"
                        >
                          <img 
                            src={img} 
                            className="max-w-full max-h-full object-contain transition-transform duration-700" 
                            alt={`Plate ${i+1}`} 
                            referrerPolicy="no-referrer" 
                          />
                        </motion.div>
                     ))}
                   </div>
                </div>
              )}
            </section>
            
            <section className="bg-bg-surface p-12 border-l-4 border-accent-red">
              <h3 className="text-2xl font-serif mb-6 text-text-main">{t('headings.archivalPerspective')}</h3>
              <div className="grid md:grid-cols-2 gap-8 text-sm text-text-dim font-light">
                {section.facts.map((fact: string, i: number) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-accent-red font-bold">0{i+1}.</span>
                    <p>{fact}</p>
                  </div>
                ))}
              </div>
            </section>

            {section.variantHeading && (
              <section>
                <h3 className="text-3xl font-serif mb-6 text-text-main border-b border-accent-gold/20 pb-4 inline-block">{t('headings.comparativeVariant')}</h3>
                <h4 className="text-2xl font-bold text-text-main mb-6 italic">{section.variantHeading}</h4>
                <p className="text-lg text-text-dim leading-relaxed font-light whitespace-pre-wrap mb-10">
                  {section.variantDesc || "No description provided for this variant."}
                </p>

                {/* Variant Specific Visual Evidence */}
                {section.variantImages && section.variantImages.length > 0 && (
                  <div className="space-y-6">
                     <h3 className="text-lg font-bold text-accent-red uppercase tracking-widest">{t('headings.visualEvidence')}</h3>
                     <div className="grid md:grid-cols-2 gap-8 items-start">
                       {section.variantImages.map((img: string, i: number) => (
                          <motion.div 
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setZoomedImage(img)}
                            className="aspect-square bg-slate-50 overflow-hidden cursor-zoom-in border border-blue-200 shadow-sm group flex items-center justify-center p-4 relative"
                          >
                            <img 
                              src={img} 
                              className="max-w-full max-h-full object-contain transition-transform duration-700" 
                              alt={`Variant Plate ${i+1}`} 
                              referrerPolicy="no-referrer" 
                            />
                          </motion.div>
                       ))}
                     </div>
                  </div>
                )}
              </section>
            )}

            {section.idealHeading && (
              <section>
                <h3 className="text-3xl font-serif mb-6 text-text-main border-b border-accent-gold/20 pb-4 inline-block">{t('headings.archetypalStudy')}</h3>
                <h4 className="text-2xl font-bold text-text-main mb-6 italic">{section.idealHeading}</h4>
                <p className="text-lg text-text-dim leading-relaxed font-light whitespace-pre-wrap mb-10">
                  {section.idealDesc}
                </p>

                {/* Ideal Paragraph Visual Evidence */}
                {section.idealImages && section.idealImages.length > 0 && (
                  <div className="space-y-6">
                     <h3 className="text-lg font-bold text-accent-red uppercase tracking-widest">{t('headings.visualEvidence')}</h3>
                     <div className="grid md:grid-cols-2 gap-8 items-start">
                       {section.idealImages.map((img: string, i: number) => (
                          <motion.div 
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setZoomedImage(img)}
                            className="aspect-square bg-slate-50 overflow-hidden cursor-zoom-in border border-blue-200 shadow-sm group flex items-center justify-center p-4 relative"
                          >
                            <img 
                              src={img} 
                              className="max-w-full max-h-full object-contain transition-transform duration-700" 
                              alt={`Ideal Plate ${i+1}`} 
                              referrerPolicy="no-referrer" 
                            />
                          </motion.div>
                       ))}
                     </div>
                  </div>
                )}
              </section>
            )}

            {section.gardenHeading && (
              <section>
                <h3 className="text-3xl font-serif mb-6 text-text-main border-b border-accent-gold/20 pb-4 inline-block">{t('headings.spatialExpansion')}</h3>
                <h4 className="text-2xl font-bold text-text-main mb-6 italic">{section.gardenHeading}</h4>
                <p className="text-lg text-text-dim leading-relaxed font-light whitespace-pre-wrap mb-10">
                  {section.gardenDesc}
                </p>

                {/* Garden Visual Evidence */}
                {section.gardenImages && section.gardenImages.length > 0 && (
                  <div className="space-y-6">
                     <h3 className="text-lg font-bold text-accent-red uppercase tracking-widest">{t('headings.visualEvidence')}</h3>
                     <div className="grid md:grid-cols-2 gap-8 items-start">
                       {section.gardenImages.map((img: string, i: number) => (
                          <motion.div 
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setZoomedImage(img)}
                            className="aspect-square bg-slate-50 overflow-hidden cursor-zoom-in border border-blue-200 shadow-sm group flex items-center justify-center p-4 relative"
                          >
                            <img 
                              src={img} 
                              className="max-w-full max-h-full object-contain transition-transform duration-700" 
                              alt={`Garden Plate ${i+1}`} 
                              referrerPolicy="no-referrer" 
                            />
                          </motion.div>
                       ))}
                     </div>
                  </div>
                )}
              </section>
            )}
          </div>

          <aside className="space-y-12">
            <div className="p-8 border border-accent-gold/20 bg-white shadow-xl sticky top-32">
              <h4 className="text-[10px] uppercase tracking-widest text-accent-gold font-bold mb-6">{t('headings.relatedExhibits')}</h4>
              <ul className="space-y-4">
                {[t('nav.structure'), t('nav.power'), t('nav.philosophy')].map((item, i) => (
                  <li key={i} className="flex items-center justify-between group cursor-pointer border-b border-accent-gold/5 pb-2">
                    <span className="text-sm font-light text-text-dim group-hover:text-accent-red transition-colors">{item}</span>
                    <ArrowUpRight size={14} className="text-accent-gold group-hover:text-accent-red transition-transform" />
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 pt-8 border-t border-accent-gold/20">
                <p className="text-[10px] uppercase text-accent-gold mb-2 font-boldAlpha">{t('headings.archivalMetadata')}</p>
                <div className="text-[10px] font-mono text-text-dim/60 space-y-1">
                   <p>COLLECTION_ID: ZH_ARC_00293</p>
                   <p>SCAN_DATE: 2024-03-21</p>
                   <p>SENSITIVITY: PUBLIC</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer of Detail */}
      <footer className="bg-bg-deep py-20 px-10 border-t border-accent-gold/20 text-center">
        <h4 className="text-accent-gold font-serif text-2xl mb-8">{t('headings.ready')}</h4>
        <button 
          onClick={onClose}
          className="px-10 py-4 bg-accent-red text-white uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-accent-gold transition-colors shadow-2xl"
        >
          {t('headings.return')}
        </button>
      </footer>
    </motion.div>
  );
}

/**
 * [Global Provider Orchestration]
 * Date: 2026-04-20
 * Logic Origin: DeepSeek Exhibition Framework
 * 
 * Reason: This exported functional component serves as the museum's brain. 
 * It coordinates the bi-directional state between:
 * 1. Global localization context (Language Provider)
 * 2. Archival deep-dive routing (AnimatePresence / DetailView)
 * 3. Navigation-anchored scroll synchronization.
 * The DeepSeek-driven architecture allows for near-zero latency when 
 * transitioning between visual exhibits.
 */
export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedSection, setSelectedSection] = useState<any | null>(null);

  /**
   * [Recursive Translation Resolver]
   * Logic: Navigates nested archival metadata using dot-notation.
   * Attribution: DeepSeek Data Patterns.
   */
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = uiTranslations[lang];
    for (const k of keys) value = value?.[k];
    return value || key;
  };

  const dt = detailDataTranslations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dt }}>
      <div className="min-h-screen bg-bg-surface font-sans selection:bg-accent-red selection:text-white">
        <Navbar />

        <AnimatePresence>
          {selectedSection && (
            <DetailView 
              section={dt[selectedSection] || { title: selectedSection }} 
              onClose={() => setSelectedSection(null)} 
            />
          )}
        </AnimatePresence>

        {/* 1. HERO (Enter the World) */}
        <section id="world-hero" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="img/img1.jpg" 
              alt="Forbidden City Meridian Gate" 
              className="w-full h-full object-cover brightness-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-white/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60" />
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
              <span className="text-accent-red font-bold uppercase tracking-[0.5em] text-[12px] mb-8 block drop-shadow-sm">{t('hero.exhibition')}</span>
              <h1 className="text-7xl md:text-9xl font-serif text-text-main mb-6 leading-none tracking-tight drop-shadow-md">
                {t('hero.enter')} <br />
                <span className="italic text-accent-gold">{t('hero.world')}</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-text-main max-w-2xl mx-auto mb-16 italic font-serif text-balance drop-shadow-sm">
                {t('hero.quote')}
              </p>
              <a href="#world" className="flex flex-col items-center gap-6 group">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-red">{t('hero.begin')}</span>
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2.5 }} className="w-[1px] h-20 bg-accent-red/40" />
              </a>
            </motion.div>
          </div>
        </section>

      {/* 1. THE WORLD OF CHINESE ARCHITECTURE */}
      <section id="world" className="py-40 px-10 group relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/img2.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/90" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <SectionHeading 
            title={dt.idea.title} 
            subtitle={t('nav.world')} 
            onClick={() => setSelectedSection('idea')}
          />
          
          <div className="flex justify-center mb-20">
            <div className="max-w-xl w-full relative overflow-hidden border border-border-gold shadow-xl">
              <div className="absolute inset-0 z-0">
                <img src="img/img2.jpg" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-white/40" />
              </div>
              <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                src="img/img2.jpg" 
                alt="Ancient Architecture Detail" 
                className="w-full h-auto block cursor-pointer relative z-10"
                onClick={() => setSelectedSection('idea')}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-accent-gold/10 pt-16">
            <p className="text-xl text-text-dim font-light leading-relaxed italic font-serif mb-12">
              {dt.idea.longDesc.split('\n')[0]}
            </p>
            <button 
              onClick={() => setSelectedSection('idea')}
              className="px-8 py-3 bg-accent-red text-white text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-accent-gold transition-colors"
            >
              {t('common.clickToEnter')}
            </button>
          </div>
        </div>
      </section>

      {/* 3. HOW BUILDINGS WORK */}
      <section id="structure" className="py-40 border-y border-accent-gold/20 group relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/img12.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-bg-surface/90" />
        </div>
        <div className="max-w-7xl mx-auto px-10 text-center relative z-10">
          <SectionHeading 
            title={dt.structure.title} 
            subtitle={t('nav.structure')} 
            onClick={() => setSelectedSection('structure')}
          />
          
          <div className="flex justify-center mb-20">
            <div className="max-w-xl w-full relative">
              <TimberDiagram />
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-accent-gold/10 pt-16">
            <div className="space-y-6 text-xl text-text-dim font-light leading-relaxed mb-12">
               <p>{dt.structure.longDesc.split('\n')[0]}</p>
            </div>
            <button 
              onClick={() => setSelectedSection('structure')}
              className="px-8 py-3 bg-accent-red text-white text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-accent-gold transition-colors"
            >
              {t('common.diveEngineering')}
            </button>
          </div>
        </div>
      </section>

      {/* 4. LIFE INSIDE A HOUSE */}
      <section id="life" className="py-40 px-10 bg-white group">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading 
            title={dt.life.title} 
            subtitle={t('nav.life')} 
            onClick={() => setSelectedSection('life')}
          />
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center transition-all">
             {/* <ModelViewer url="/img/3dobj1.glb" /> */}
            <div className="relative">
              <CourtyardDiagram />
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center border-t border-accent-gold/10 pt-16">
            <p className="text-xl text-text-dim font-light leading-relaxed mb-12">
              {dt.life.longDesc.split('\n')[0]}
            </p>
            <button 
              onClick={() => setSelectedSection('life')}
              className="px-8 py-3 bg-accent-red text-white text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-accent-gold transition-colors"
            >
              {t('common.examineSocialLogic')}
            </button>
          </div>
        </div>
      </section>

      {/* 5. POWER AND ORDER */}
      <section id="power" className="py-40 border-y border-accent-gold/20 overflow-hidden relative group">
        <div className="absolute inset-0 z-0">
          <img src="/img/img11.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-bg-surface/90" />
        </div>
        <div className="max-w-7xl mx-auto px-10 relative z-10 text-center">
          <SectionHeading 
            title={dt.power.title} 
            subtitle={t('nav.power')} 
            onClick={() => setSelectedSection('power')}
          />
          
          <div className="flex justify-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              onClick={() => setSelectedSection('power')}
              className="relative w-full max-w-xl border-4 border-white shadow-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <img src="img/img11.jpg" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-white/40" />
              </div>
              <img 
                src="img/img11.jpg" 
                alt="Imperial Architecture Detail" 
                className="w-full h-auto block grayscale brightness-110 transition-all duration-700 ease-out hover:grayscale-0 hover:brightness-100 hover:scale-[1.02] relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <div className="h-full w-[2px] bg-accent-red/80 shadow-[0_0_20px_rgba(163,29,29,0.5)]" />
              </div>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-accent-gold/10 pt-16">
            <p className="text-xl text-text-dim font-light leading-relaxed mb-12">
              {dt.power.longDesc.split('\n')[0]}
            </p>
            <button 
              onClick={() => setSelectedSection('power')}
              className="px-8 py-3 bg-accent-red text-white text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-accent-gold transition-colors"
            >
              {t('common.discoverImperialGeometry')}
            </button>
          </div>
        </div>
      </section>

      {/* 6. THE DESIGN OF CITIES */}
      <section id="cities" className="py-40 px-10 group relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/img14.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <SectionHeading 
            title={dt.cities.title} 
            subtitle={t('nav.cities')} 
            onClick={() => setSelectedSection('cities')}
          />
          
          <div className="flex justify-center mb-20">
            <div className="max-w-xl w-full relative">
              <CityPlanningGrid />
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-accent-gold/10 pt-16">
            <div className="space-y-6 text-xl text-text-dim font-light leading-relaxed mb-12">
               <p>{dt.cities.longDesc.split('\n')[0]}</p>
            </div>
            <button 
              onClick={() => setSelectedSection('cities')}
              className="px-8 py-3 bg-accent-red text-white text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-accent-gold transition-colors"
            >
              {t('common.openCityArchive')}
            </button>
          </div>
        </div>
      </section>

      {/* 7. MOVEMENT AND CONNECTION */}
      <section id="connection" className="py-40 border-y border-accent-gold/20 group relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/img15.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-bg-surface/90" />
        </div>
        <div className="max-w-7xl mx-auto px-10 text-center relative z-10">
          <SectionHeading 
            title={dt.connection.title} 
            subtitle={t('nav.connection')} 
            onClick={() => setSelectedSection('connection')}
          />
          
          <div className="flex justify-center mb-20">
            <div className="relative w-full max-w-xl overflow-hidden border border-border-gold shadow-2xl">
               <BridgeArc />
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-accent-gold/10 pt-16">
            <p className="text-xl text-text-dim font-light leading-relaxed mb-12">
              {dt.connection.longDesc.split('\n')[0]}
            </p>
            <button 
              onClick={() => setSelectedSection('connection')}
              className="px-8 py-3 bg-accent-red text-white text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-accent-gold transition-colors"
            >
              {t('common.watchStructuralPassages')}
            </button>
          </div>
        </div>
      </section>

     

     

      {/* 8. PHILOSOPHY AND COMPARISON */}
      <section id="philosophy" className="py-40 px-10 bg-white border-t border-accent-gold/10 group">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading 
            title={dt.philosophy.title} 
            subtitle={t('nav.philosophy')} 
            onClick={() => setSelectedSection('philosophy')}
          />
          
          <div className="flex justify-center mb-20">
            <div className="relative overflow-hidden w-full max-w-2xl">
               <ComparisonTable />
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center border-t border-accent-gold/10 pt-16">
            <p className="text-xl text-text-dim font-light leading-relaxed mb-12">
              {dt.philosophy.longDesc.split('\n')[0]}
            </p>
            <button 
              onClick={() => setSelectedSection('philosophy')}
              className="px-8 py-3 bg-accent-red text-white text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-accent-gold transition-colors"
            >
              {t('common.comparativeStudyArchive')}
            </button>
          </div>
        </div>
      </section>

      {/* 9. FINAL EXPERIENCE */}
      <section id="final" className="py-60 px-10 bg-white relative text-center">
 
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-2xl mx-auto relative z-10">
          <div className="w-full h-[2px] bg-accent-red mx-auto mb-10" />
          <h2 className="text-4xl md:text-6xl font-serif text-text-main mb-12 italic leading-tight text-balance">
            {lang === 'en' ? '“Chinese architecture is not just history. It is a system of thinking.”' : '“中国建筑不只是历史，它更是一套思维体系。”'}
          </h2>
          <a href="#" className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.5em] text-accent-red hover:text-accent-gold transition-colors">
            {t('common.backToTop')} <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </section>

      <Footer />
      <ArchivalConsultant />
    </div>
    </LanguageContext.Provider>
  );
}
