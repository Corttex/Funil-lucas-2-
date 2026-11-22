import { useState } from 'react';
import {
  ArrowRight,
  Award,
  Brain,
  Briefcase,
  Check,
  Dumbbell,
  Menu,
  ShoppingBag,
  Sparkles,
  Star,
  User,
  X,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { LanguageSelector } from '../../components/LanguageSelector';
import { AVATARS } from '../../data/avatars';
import { useI18n } from '../../i18n/I18nProvider';
import { useBestMeStore } from '../../store/useBestMeStore';
import type { Gender } from '../../engine/calculations';

export function HomePage() {
  const { t, navigateView } = useI18n();
  const { setFunnel, setStep } = useBestMeStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const startFunnelFromScratch = () => {
    setStep(0);
    navigateView('funnel');
  };

  const startFunnelWithGender = (gender: Gender) => {
    setFunnel({ gender });
    setStep(1);
    navigateView('funnel');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1F1510]">
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-[#EAE3DC] bg-[#FDFBF7]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-8">
            <a
              href="#top"
              className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold tracking-tight text-[#1F1510]"
            >
              {t.common.brand}
            </a>

            <nav className="hidden items-center gap-6 text-sm font-medium text-[#6B5E57] lg:flex">
              <a href="#ecosystem" className="transition hover:text-[#1F1510]">
                {t.home.navApps}
              </a>
              <a href="#calisthenics" className="transition hover:text-[#1F1510]">
                {t.home.navCalisthenics}
              </a>
              <a href="#store" className="transition hover:text-[#1F1510]">
                {t.home.navStore}
              </a>
              <a href="#business" className="transition hover:text-[#1F1510]">
                {t.home.navBusiness}
              </a>
              <a href="#reviews" className="transition hover:text-[#1F1510]">
                {t.home.navReviews}
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="hidden sm:block">
              <LanguageSelector compact />
            </div>

            <button
              type="button"
              onClick={() => navigateView('login')}
              className="hidden items-center gap-1.5 rounded-full border border-[#EAE3DC] bg-white px-4 py-2 text-xs font-bold text-[#1F1510] transition hover:border-[#2E1F19] sm:inline-flex"
            >
              <User size={14} /> {t.common.login}
            </button>

            <button
              type="button"
              onClick={startFunnelFromScratch}
              className="rounded-full bg-[#2E1F19] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#1F1510]"
            >
              {t.home.navStartQuiz}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EAE3DC] bg-white text-[#1F1510] lg:hidden"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[#EAE3DC] bg-white px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3 text-sm font-semibold text-[#1F1510]">
              <a href="#ecosystem" onClick={() => setMobileMenuOpen(false)}>
                {t.home.navApps}
              </a>
              <a href="#calisthenics" onClick={() => setMobileMenuOpen(false)}>
                {t.home.navCalisthenics}
              </a>
              <a href="#store" onClick={() => setMobileMenuOpen(false)}>
                {t.home.navStore}
              </a>
              <a href="#business" onClick={() => setMobileMenuOpen(false)}>
                {t.home.navBusiness}
              </a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>
                {t.home.navReviews}
              </a>
              <div className="flex items-center justify-between border-t border-[#EAE3DC] pt-3">
                <LanguageSelector />
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigateView('login');
                  }}
                  className="rounded-full border border-[#EAE3DC] px-4 py-1.5 text-xs font-bold"
                >
                  {t.common.login}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section (betterme.world clone) */}
      <section id="top" className="relative overflow-hidden py-12 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EAE3DC] bg-[#F5EFE8] px-4 py-1.5 text-xs font-bold text-[#2E1F19]">
              <Sparkles size={14} /> {t.home.heroBadge}
            </span>

            <h1 className="mt-5 font-['Plus_Jakarta_Sans'] text-4xl font-extrabold leading-[1.08] tracking-tight text-[#1F1510] sm:text-5xl lg:text-[54px]">
              {t.home.heroTitle}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#6B5E57] sm:text-lg">
              {t.home.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={startFunnelFromScratch}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2E1F19] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-[#1F1510]"
              >
                {t.home.heroCta} <ArrowRight size={17} />
              </button>
              <a
                href="#ecosystem"
                className="inline-flex items-center justify-center rounded-full border border-[#EAE3DC] bg-white px-7 py-4 text-sm font-bold text-[#1F1510] transition hover:border-[#2E1F19]"
              >
                {t.home.heroSecondaryCta}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#6B5E57]">
              <div className="flex text-[#00B67A]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span>{t.home.heroRating}</span>
            </div>
          </div>

          {/* Editorial visual mosaic */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-3xl border border-[#EAE3DC] bg-[#F5EFE8] shadow-sm">
                <img
                  src={AVATARS.gender.mulher}
                  alt={t.home.quickWomanTitle}
                  className="h-56 w-full object-cover object-top"
                />
              </div>
              <div className="rounded-3xl border border-[#EAE3DC] bg-white p-4 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#6B5E57]">
                  BestMe App
                </p>
                <p className="mt-1 font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-[#1F1510]">
                  15 min / day
                </p>
                <div className="mt-2 h-1.5 w-full rounded-full bg-[#F5EFE8]">
                  <div className="h-full w-4/5 rounded-full bg-[#2E1F19]" />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="rounded-3xl bg-[#2E1F19] p-4 text-white shadow-md">
                <Award size={20} className="text-[#EBF3E4]" />
                <p className="mt-2 font-['Plus_Jakarta_Sans'] text-base font-bold">
                  {t.funnel.step38.awardTitle}
                </p>
                <p className="text-[11px] text-white/75">{t.funnel.step38.awardSub}</p>
              </div>
              <div className="overflow-hidden rounded-3xl border border-[#EAE3DC] bg-[#F5EFE8] shadow-sm">
                <img
                  src={AVATARS.gender.homem}
                  alt={t.home.quickManTitle}
                  className="h-56 w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Gender Selector (Homem / Mulher entry point directly into funnel) */}
      <section id="calisthenics" className="border-y border-[#EAE3DC] bg-[#F5EFE8]/60 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510] sm:text-3xl">
              {t.home.quickTitle}
            </h2>
            <p className="mt-2 text-sm text-[#6B5E57] sm:text-base">{t.home.quickSubtitle}</p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onClick={() => startFunnelWithGender('mulher')}
              className="group flex items-center gap-5 rounded-3xl border border-[#EAE3DC] bg-white p-4 text-left shadow-sm transition hover:border-[#2E1F19] hover:shadow-md"
            >
              <div className="h-28 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#F5EFE8]">
                <img
                  src={AVATARS.gender.mulher}
                  alt={t.home.quickWomanTitle}
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-[#1F1510]">
                  {t.home.quickWomanTitle}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#6B5E57]">
                  {t.home.quickWomanSub}
                </p>
                <span className="mt-3 inline-flex items-center rounded-full bg-[#2E1F19] px-4 py-1.5 text-[11px] font-bold text-white">
                  {t.home.quickStartTag}
                </span>
              </div>
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onClick={() => startFunnelWithGender('homem')}
              className="group flex items-center gap-5 rounded-3xl border border-[#EAE3DC] bg-white p-4 text-left shadow-sm transition hover:border-[#2E1F19] hover:shadow-md"
            >
              <div className="h-28 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#F5EFE8]">
                <img
                  src={AVATARS.gender.homem}
                  alt={t.home.quickManTitle}
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-[#1F1510]">
                  {t.home.quickManTitle}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#6B5E57]">
                  {t.home.quickManSub}
                </p>
                <span className="mt-3 inline-flex items-center rounded-full bg-[#2E1F19] px-4 py-1.5 text-[11px] font-bold text-white">
                  {t.home.quickStartTag}
                </span>
              </div>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Meet the BestMe World (betterme.world ecosystem) */}
      <section id="ecosystem" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#6B5E57]">
              {t.home.worldEyebrow}
            </p>
            <h2 className="mt-2 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#1F1510] sm:text-4xl">
              {t.home.worldTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6B5E57] sm:text-base">
              {t.home.worldSubtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Coaching */}
            <div className="flex flex-col justify-between rounded-3xl border border-[#EAE3DC] bg-white p-7 shadow-sm">
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#6B5E57]">
                  <Dumbbell size={16} className="text-[#2E1F19]" />
                  {t.home.worldCards.coaching.tag}
                </div>
                <h3 className="mt-3 font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510]">
                  {t.home.worldCards.coaching.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B5E57]">
                  {t.home.worldCards.coaching.desc}
                </p>
                <ul className="mt-5 space-y-2 text-xs font-semibold text-[#1F1510]">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#3F6212]" /> {t.home.worldCards.coaching.bullet1}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#3F6212]" /> {t.home.worldCards.coaching.bullet2}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#3F6212]" /> {t.home.worldCards.coaching.bullet3}
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={startFunnelFromScratch}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#2E1F19] px-6 py-3 text-xs font-bold uppercase text-white transition hover:bg-[#1F1510]"
              >
                {t.home.worldCards.coaching.cta} <ArrowRight size={14} />
              </button>
            </div>

            {/* Mental Health */}
            <div className="flex flex-col justify-between rounded-3xl border border-[#EAE3DC] bg-[#F5EFE8]/70 p-7 shadow-sm">
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#6B5E57]">
                  <Brain size={16} className="text-[#2E1F19]" />
                  {t.home.worldCards.mental.tag}
                </div>
                <h3 className="mt-3 font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510]">
                  {t.home.worldCards.mental.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B5E57]">
                  {t.home.worldCards.mental.desc}
                </p>
                <ul className="mt-5 space-y-2 text-xs font-semibold text-[#1F1510]">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#3F6212]" /> {t.home.worldCards.mental.bullet1}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#3F6212]" /> {t.home.worldCards.mental.bullet2}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#3F6212]" /> {t.home.worldCards.mental.bullet3}
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={startFunnelFromScratch}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#2E1F19] bg-white px-6 py-3 text-xs font-bold uppercase text-[#2E1F19] transition hover:bg-[#2E1F19] hover:text-white"
              >
                {t.home.worldCards.mental.cta} <ArrowRight size={14} />
              </button>
            </div>

            {/* Store */}
            <div
              id="store"
              className="flex flex-col justify-between rounded-3xl border border-[#EAE3DC] bg-[#F5EFE8]/70 p-7 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#6B5E57]">
                  <ShoppingBag size={16} className="text-[#2E1F19]" />
                  {t.home.worldCards.store.tag}
                </div>
                <h3 className="mt-3 font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510]">
                  {t.home.worldCards.store.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B5E57]">
                  {t.home.worldCards.store.desc}
                </p>
                <ul className="mt-5 space-y-2 text-xs font-semibold text-[#1F1510]">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#3F6212]" /> {t.home.worldCards.store.bullet1}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#3F6212]" /> {t.home.worldCards.store.bullet2}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#3F6212]" /> {t.home.worldCards.store.bullet3}
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={startFunnelFromScratch}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#2E1F19] bg-white px-6 py-3 text-xs font-bold uppercase text-[#2E1F19] transition hover:bg-[#2E1F19] hover:text-white"
              >
                {t.home.worldCards.store.cta} <ArrowRight size={14} />
              </button>
            </div>

            {/* Business */}
            <div
              id="business"
              className="flex flex-col justify-between rounded-3xl border border-[#EAE3DC] bg-white p-7 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#6B5E57]">
                  <Briefcase size={16} className="text-[#2E1F19]" />
                  {t.home.worldCards.business.tag}
                </div>
                <h3 className="mt-3 font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510]">
                  {t.home.worldCards.business.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B5E57]">
                  {t.home.worldCards.business.desc}
                </p>
                <ul className="mt-5 space-y-2 text-xs font-semibold text-[#1F1510]">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#3F6212]" /> {t.home.worldCards.business.bullet1}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#3F6212]" /> {t.home.worldCards.business.bullet2}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-[#3F6212]" /> {t.home.worldCards.business.bullet3}
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={startFunnelFromScratch}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#2E1F19] px-6 py-3 text-xs font-bold uppercase text-white transition hover:bg-[#1F1510]"
              >
                {t.home.worldCards.business.cta} <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-[#EAE3DC] bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#6B5E57]">
              {t.home.howEyebrow}
            </p>
            <h2 className="mt-2 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#1F1510]">
              {t.home.howTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.home.howSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-3xl border border-[#EAE3DC] bg-[#FDFBF7] p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2E1F19] font-['Plus_Jakarta_Sans'] text-sm font-extrabold text-white">
                  {step.num}
                </span>
                <h3 className="mt-4 font-['Plus_Jakarta_Sans'] text-lg font-extrabold text-[#1F1510]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B5E57]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Stats & Social Impact */}
      <section className="bg-[#2E1F19] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold">
              {t.home.impactTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{t.home.impactDesc}</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {t.home.impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/15 bg-white/5 p-6 text-center"
              >
                <p className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#EBF3E4]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews & As Seen In */}
      <section id="reviews" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-[#EAE3DC] bg-[#F5EFE8]/70 px-6 py-5 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6B5E57]">
              {t.common.asSeenIn}
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-8 font-['Plus_Jakarta_Sans'] text-lg font-extrabold tracking-tight text-[#4B3F39]">
              <span>healthline</span>
              <span className="font-serif italic">Women&apos;s Health</span>
              <span>GOOD HOUSEKEEPING</span>
              <span>Forbes HEALTH</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#1F1510]">
              {t.home.reviewsTitle}
            </h2>
            <p className="mt-2 text-sm text-[#6B5E57]">{t.home.reviewsSubtitle}</p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {t.home.reviews.map((rev, idx) => (
              <div
                key={rev.name}
                className="flex flex-col justify-between rounded-3xl border border-[#EAE3DC] bg-white p-6 shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#00B67A]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#1F1510]">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-[#EAE3DC] pt-4">
                  <img
                    src={
                      idx === 0
                        ? AVATARS.calisthenics.beforeAfter[0].after
                        : idx === 1
                          ? AVATARS.calisthenics.beforeAfter[1].after
                          : AVATARS.paywall.ramon
                    }
                    alt={rev.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-extrabold text-[#1F1510]">{rev.name}</p>
                    <p className="text-[11px] text-[#6B5E57]">{rev.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl bg-[#F5EFE8] px-6 py-12 text-center sm:px-12">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#1F1510]">
            {t.home.finalCtaTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#6B5E57] sm:text-base">
            {t.home.finalCtaSubtitle}
          </p>
          <button
            type="button"
            onClick={startFunnelFromScratch}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#2E1F19] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#1F1510]"
          >
            {t.home.finalCtaBtn} <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#EAE3DC] bg-white py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-4">
          <div>
            <p className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-[#1F1510]">
              {t.common.brand}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#6B5E57]">{t.home.footerTagline}</p>
            <div className="mt-4">
              <LanguageSelector />
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#1F1510]">
              {t.home.footerCols.ecosystem}
            </p>
            <ul className="mt-3 space-y-2 text-xs text-[#6B5E57]">
              {t.home.footerCols.ecosystemLinks.map((lnk) => (
                <li key={lnk}>
                  <a href="#ecosystem" className="hover:text-[#1F1510]">
                    {lnk}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#1F1510]">
              {t.home.footerCols.company}
            </p>
            <ul className="mt-3 space-y-2 text-xs text-[#6B5E57]">
              {t.home.footerCols.companyLinks.map((lnk) => (
                <li key={lnk}>
                  <a href="#reviews" className="hover:text-[#1F1510]">
                    {lnk}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#1F1510]">
              {t.home.footerCols.support}
            </p>
            <ul className="mt-3 space-y-2 text-xs text-[#6B5E57]">
              {t.home.footerCols.supportLinks.map((lnk) => (
                <li key={lnk}>
                  <button
                    type="button"
                    onClick={startFunnelFromScratch}
                    className="hover:text-[#1F1510]"
                  >
                    {lnk}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-[#EAE3DC] px-4 pt-6 text-center text-xs text-[#8C7E77] sm:px-6">
          {t.home.footerCopy}
        </div>
      </footer>
    </div>
  );
}
