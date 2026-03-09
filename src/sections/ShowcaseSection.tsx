"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ALL_PROJECTS } from "@/constants/projects";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const featuredRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      featuredRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuredRef.current,
          start: "top 85%",
        },
      }
    );

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: index * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="w-full px-6 md:px-10 lg:px-16 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div
          ref={headingRef}
          className="mb-12 md:mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.22em] text-white/50 mb-3">
              Selected Projects
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
              My Works
            </h2>
          </div>

          <p className="max-w-xl text-sm md:text-base leading-7 text-white/60">
            A curated selection of business websites, product experiences, and
            interactive interfaces focused on clarity, motion, and premium
            presentation.
          </p>
        </div>

        <div
          ref={featuredRef}
          className="group grid grid-cols-1 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm md:grid-cols-2"
        >
          <a
            href={ALL_PROJECTS[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block h-[280px] md:h-[520px] overflow-hidden"
          >
            <img
              src="/images/project1.png"
              alt="Luxury shopping experience"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </a>

          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14">
            <span className="mb-4 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/60">
              Featured Project
            </span>

            <h3 className="text-2xl md:text-4xl font-semibold leading-tight text-white">
              A Premium Luxury Shopping Experience for Discovering Timeless
              Handbags, Watches, and Jewellery
            </h3>

            <p className="mt-5 text-sm md:text-lg leading-7 text-white/65 max-w-xl">
              A refined fashion commerce platform designed for effortless
              browsing, elegant discovery, and a seamless luxury shopping
              journey with a polished editorial feel.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/8 px-4 py-2 text-sm text-white/70">
                UI/UX
              </span>
              <span className="rounded-full bg-white/8 px-4 py-2 text-sm text-white/70">
                E-commerce
              </span>
              <span className="rounded-full bg-white/8 px-4 py-2 text-sm text-white/70">
                Luxury Branding
              </span>
            </div>

            <a
              href={ALL_PROJECTS[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              View Project
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
             ref: (el: HTMLAnchorElement | null) => {
  cardsRef.current[0] = el;
},
              href: ALL_PROJECTS[1].href,
              img: "/images/project2.png",
              title: "Telestation Business Website",
              desc: "A modern corporate web experience focused on trust, services, and clear conversion paths.",
            },
            {
              ref: (el: HTMLAnchorElement | null) => {
  cardsRef.current[0] = el;
},
              href: ALL_PROJECTS[2].href,
              img: "/images/project3.png",
              title: "Halaa Saudia — Bilingual Business Website",
              desc: "A bilingual digital presence crafted for clarity, local relevance, and a polished business identity.",
            },
            {
             ref: (el: HTMLAnchorElement | null) => {
  cardsRef.current[0] = el;
},
              href: ALL_PROJECTS[8].href,
              img: "/images/devtinder.png",
              title: "DevTinder Matching App",
              desc: "A product-focused interface for developer matching with clean flows and a strong interaction layer.",
            },
          ].map((project, index) => (
            <a
              key={index}
              ref={project.ref}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white leading-snug">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  {project.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;