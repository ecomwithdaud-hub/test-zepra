"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Eye,
  Globe,
  Layers,
  Laptop,
  MapPin,
  Search,
  Smartphone,
  Sparkles,
  Tablet,
  Wrench,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usaClientDemoWebsites, usaDemoCategories } from "@/lib/site";

export function UsaDemoShowcase({
  initialLimit = 24,
  showViewAllLink = false,
  eyebrow = "Web Development Portfolio • 24 Live USA Demo Builds",
  title = "Production-Ready US Business Websites Built to Convert Local Traffic.",
  description = "Explore 24 live, interactive website builds engineered across 5 high-demand US industries. Click 'Learn More' to inspect screenshots, conversion architecture, and live interactive previews—or launch any project directly in a new tab.",
}) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(initialLimit >= 24);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCardImageMap, setActiveCardImageMap] = useState({});

  const filteredProjects = useMemo(() => {
    return usaClientDemoWebsites.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.group === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.trade.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        item.services.some((s) => s.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedProjects = useMemo(() => {
    if (showAll || activeCategory !== "all" || searchQuery.trim() !== "") {
      return filteredProjects;
    }
    return filteredProjects.slice(0, initialLimit);
  }, [filteredProjects, showAll, activeCategory, searchQuery, initialLimit]);

  const setCardImage = (projectId, imgIndex) => {
    setActiveCardImageMap((prev) => ({
      ...prev,
      [projectId]: imgIndex,
    }));
  };

  return (
    <section
      id="usa-client-demos"
      className="relative isolate scroll-mt-28 overflow-hidden bg-slate-950 py-14 text-white sm:py-20"
    >
      {/* Ambient Cyber Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-12 -z-10 h-[460px] w-[460px] rounded-full bg-cyan-500/12 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-12 -z-10 h-[460px] w-[460px] rounded-full bg-blue-600/12 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(56,198,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,198,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]"
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_25px_rgba(56,198,255,0.18)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {eyebrow}
          </div>

          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            {description}
          </p>

          {/* Summary KPI Bar */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 backdrop-blur-md">
              <div className="font-display text-2xl font-bold text-cyan-300 sm:text-3xl">
                24
              </div>
              <div className="mt-1 text-xs font-medium text-slate-300">
                Live USA Demo Websites
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 backdrop-blur-md">
              <div className="font-display text-2xl font-bold text-emerald-400 sm:text-3xl">
                5
              </div>
              <div className="mt-1 text-xs font-medium text-slate-300">
                High-Demand Industry Verticals
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 backdrop-blur-md">
              <div className="font-display text-2xl font-bold text-amber-300 sm:text-3xl">
                24 Cities
              </div>
              <div className="mt-1 text-xs font-medium text-slate-300">
                Localized US Market Builds
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 backdrop-blur-md">
              <div className="font-display text-2xl font-bold text-sky-300 sm:text-3xl">
                100% Live
              </div>
              <div className="mt-1 text-xs font-medium text-slate-300">
                Interactive Vercel Deployments
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills & Search Bar */}
        <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/75 p-4 shadow-2xl backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {usaDemoCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-slate-950 shadow-[0_0_24px_rgba(56,198,255,0.4)]"
                      : "border border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                      isActive
                        ? "bg-slate-950/20 text-slate-950"
                        : "bg-white/10 text-cyan-300"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search business, trade, or US city..."
              aria-label="Search demo websites"
              className="w-full rounded-full border border-white/15 bg-slate-950/80 py-2.5 pl-10 pr-9 text-xs text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none sm:text-sm"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </div>

        {/* Project Grid */}
        {displayedProjects.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900/50 p-12 text-center">
            <p className="text-lg font-semibold text-white">
              No matching demo websites found for &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Try clearing your search filter or selecting &ldquo;All 24 Demos&rdquo;.
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-5 border-cyan-400/40 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/20"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {displayedProjects.map((project) => {
              const activeImgIdx = activeCardImageMap[project.id] ?? 0;
              const currentImage =
                project.galleryImages?.[activeImgIdx] || project.image;

              return (
                <article
                  key={project.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-white/12 bg-gradient-to-b from-[#0f1d35] via-[#0b1528] to-[#070d19] shadow-[0_22px_60px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:shadow-[0_25px_70px_rgba(18,119,255,0.24)]"
                >
                  {/* Top Browser Mockup Frame + Live Screenshot Preview */}
                  <div>
                    {/* Browser Chrome Bar */}
                    <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-slate-950/90 px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      </div>

                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                        title={`Open ${project.domain} in new tab`}
                      >
                        <Globe className="h-3 w-3 shrink-0 text-cyan-400" />
                        <span className="truncate">{project.domain}</span>
                      </a>

                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300 border border-emerald-500/30">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    </div>

                    {/* Visual Screenshot Viewport */}
                    <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                      <img
                        src={currentImage}
                        alt={`${project.name} - ${project.trade} website screenshot`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Simulated Website Hero Overlay for Realistic Client Pitch Look */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/15" />

                      <div className="absolute inset-x-4 top-3 flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                          <Wrench className="h-3 w-3 text-cyan-300" />
                          {project.trade}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1 text-[11px] font-medium text-slate-200 backdrop-blur-md">
                          <MapPin className="h-3 w-3 text-amber-400" />
                          {project.city}
                        </span>
                      </div>

                      {/* Simulated Live Hero Typography inside Screenshot */}
                      <div className="absolute inset-x-4 bottom-3">
                        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                          {project.group}
                        </div>
                        <div className="mt-0.5 line-clamp-1 font-display text-sm font-bold text-white drop-shadow">
                          &ldquo;{project.headline}&rdquo;
                        </div>
                      </div>

                      {/* Quick Hover Action Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-950/70 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg transition-transform hover:scale-105"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          Learn More & Preview
                        </button>
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-slate-900/90 px-4 py-2 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105 hover:border-cyan-300"
                        >
                          New Tab
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Multi-Screenshot Thumbnail Strip */}
                    {project.galleryImages?.length > 1 ? (
                      <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-slate-950/60 px-4 py-2">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                          Site Visuals:
                        </span>
                        <div className="flex items-center gap-1.5">
                          {project.galleryImages.slice(0, 4).map((imgUrl, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setCardImage(project.id, idx)}
                              onMouseEnter={() => setCardImage(project.id, idx)}
                              aria-label={`Preview screenshot ${idx + 1} for ${project.name}`}
                              className={`relative h-7 w-11 overflow-hidden rounded-md border transition-all ${
                                activeImgIdx === idx
                                  ? "border-cyan-400 ring-2 ring-cyan-400/40 scale-105"
                                  : "border-white/15 opacity-65 hover:opacity-100"
                              }`}
                            >
                              <img
                                src={imgUrl}
                                alt=""
                                loading="lazy"
                                className="h-full w-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {/* Card Content */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400">
                            Project #{String(project.id).padStart(2, "0")} • Web Development
                          </span>
                          <h3 className="mt-1 font-display text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                            {project.name}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-3 line-clamp-2 text-xs leading-6 text-slate-300 sm:text-sm">
                        {project.subtitle}
                      </p>

                      {/* Services Pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.services.slice(0, 4).map((service) => (
                          <span
                            key={service}
                            className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-200"
                          >
                            {service}
                          </span>
                        ))}
                        {project.services.length > 4 ? (
                          <span className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-[11px] font-semibold text-cyan-300">
                            +{project.services.length - 4} more
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* Dual Action Footer: Learn More (Modal) + View in New Tab */}
                  <div className="grid grid-cols-2 gap-2.5 border-t border-white/10 bg-slate-950/50 p-4 sm:px-6">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/35 bg-cyan-400/10 px-3.5 py-2.5 text-xs font-semibold text-cyan-200 transition-all duration-200 hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white sm:text-sm"
                    >
                      <Eye className="h-4 w-4 shrink-0" />
                      <span>Learn More</span>
                    </button>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan px-3.5 py-2.5 text-xs font-semibold text-slate-950 shadow-md transition-all duration-200 hover:brightness-110 sm:text-sm"
                    >
                      <span>View in New Tab</span>
                      <ExternalLink className="h-4 w-4 shrink-0" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Bottom Expand / View All Controls */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {!showAll && filteredProjects.length > initialLimit ? (
            <Button
              type="button"
              size="xl"
              onClick={() => setShowAll(true)}
              className="bg-gradient-to-r from-brand-blue to-brand-cyan text-slate-950 font-bold hover:shadow-cyanGlow"
            >
              Show All 24 USA Demo Websites ({filteredProjects.length - initialLimit} More)
              <Layers className="ml-2 h-4 w-4" />
            </Button>
          ) : null}

          {showAll && initialLimit < 24 && activeCategory === "all" && !searchQuery ? (
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setShowAll(false)}
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              Show Featured Subset
            </Button>
          ) : null}

          {showViewAllLink ? (
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-cyan-400/40 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/20 hover:text-white"
            >
              <Link href="/website-development">
                Open Dedicated Web Development Page
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : null}
        </div>
      </div>

      {/* Interactive "Learn More & Live Preview" Modal */}
      {selectedProject ? (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </section>
  );
}

function ProjectDetailModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("overview"); // "overview" | "live"
  const [selectedImage, setSelectedImage] = useState(
    project.galleryImages?.[0] || project.image
  );
  const [viewport, setViewport] = useState("desktop"); // "desktop" | "tablet" | "mobile"

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    setSelectedImage(project.galleryImages?.[0] || project.image);
    setActiveTab("overview");
  }, [project]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/85 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-cyan-400/30 bg-[#081121] text-white shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-slate-950/90 px-5 py-4 sm:px-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 font-display text-sm font-bold text-cyan-300">
              #{String(project.id).padStart(2, "0")}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3
                  id="modal-project-title"
                  className="font-display text-lg font-bold text-white sm:text-2xl"
                >
                  {project.name}
                </h3>
                <Badge className="bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  {project.trade}
                </Badge>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-300">
                  <MapPin className="h-3.5 w-3.5" />
                  {project.city}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-slate-400">
                Category: Website Development • {project.group} • {project.domain}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Mode Switcher */}
            <div className="inline-flex rounded-full border border-white/10 bg-slate-900 p-1">
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === "overview"
                    ? "bg-cyan-400 text-slate-950 shadow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Screenshots & Details
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("live")}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === "live"
                    ? "bg-cyan-400 text-slate-950 shadow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Interactive Live Preview
              </button>
            </div>

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-4 py-2 text-xs font-bold text-slate-950 shadow hover:brightness-110"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7">
          {activeTab === "overview" ? (
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              {/* Left Column: Visual Gallery */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-950 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs font-medium text-slate-300">
                      https://{project.domain}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveTab("live")}
                      className="text-xs font-semibold text-cyan-300 hover:underline"
                    >
                      Switch to Live Site &rarr;
                    </button>
                  </div>

                  <div className="relative h-[300px] sm:h-[380px] w-full overflow-hidden">
                    <img
                      src={selectedImage}
                      alt={project.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />
                    <div className="absolute inset-x-6 bottom-5">
                      <span className="inline-block rounded-full border border-amber-400/40 bg-amber-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-300 backdrop-blur-sm">
                        {project.city} • {project.trade}
                      </span>
                      <h4 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                        {project.headline}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* 4-Image Gallery Selector */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Captured Visuals from {project.name} ({project.galleryImages?.length || 1} Images)
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveTab("live")}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                      Launch Interactive Live View
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {(project.galleryImages || [project.image]).map((img, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedImage(img)}
                        className={`group relative h-20 overflow-hidden rounded-xl border transition-all ${
                          selectedImage === img
                            ? "border-cyan-400 ring-2 ring-cyan-400/40"
                            : "border-white/10 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${project.name} visual ${i + 1}`}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Pitch Details, Services & Conversion Architecture */}
              <div className="flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                      Project Positioning & Pitch Summary
                    </div>
                    <p className="mt-2.5 text-sm leading-7 text-slate-200">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Conversion & UX Highlights */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      Conversion & Engineering Highlights
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {(project.highlights || []).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-200"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Included Service Modules */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      Dedicated Service Sections Built In
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-200"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Action Buttons */}
                <div className="space-y-3 border-t border-white/10 pt-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition-all hover:brightness-110"
                    >
                      <span>View Live in New Tab</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <Link
                      href="/contact"
                      onClick={onClose}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:border-cyan-400/50 hover:bg-white/10"
                    >
                      <span>Request Similar Website</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Live Interactive Iframe Preview Tab */
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>
                    Interacting live with <strong>{project.domain}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setViewport("desktop")}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold ${
                      viewport === "desktop"
                        ? "bg-cyan-400 text-slate-950"
                        : "text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <Laptop className="h-3.5 w-3.5" />
                    Desktop
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport("tablet")}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold ${
                      viewport === "tablet"
                        ? "bg-cyan-400 text-slate-950"
                        : "text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <Tablet className="h-3.5 w-3.5" />
                    Tablet
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport("mobile")}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold ${
                      viewport === "mobile"
                        ? "bg-cyan-400 text-slate-950"
                        : "text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                    Mobile
                  </button>
                </div>
              </div>

              <div className="flex justify-center overflow-hidden rounded-2xl border border-white/15 bg-slate-950 p-2">
                <iframe
                  src={project.href}
                  title={`${project.name} Live Website Preview`}
                  className={`h-[560px] rounded-xl bg-white transition-all duration-300 ${
                    viewport === "desktop"
                      ? "w-full"
                      : viewport === "tablet"
                      ? "w-[768px] max-w-full"
                      : "w-[390px] max-w-full"
                  }`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
