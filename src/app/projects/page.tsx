"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

import { ALL_PROJECTS, Project } from "@/constants/projects";

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  // group into sets of 3 for layout
  const groups: Project[][] = [];
  for (let i = 0; i < ALL_PROJECTS.length; i += 3) {
    groups.push(ALL_PROJECTS.slice(i, i + 3));
  }

  return (
    <section ref={sectionRef} className="padding-x-lg py-20">
      <div className="max-w-6xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-8">All Projects</h1>

        {groups.map((group, idx) => (
          <div key={idx} className="showcaselayout mb-20">
            {group[0] && (
              <div className="first-project-wrapper">
                <div className="image-wrapper">
                  <a
                    href={group[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`/images/${group[0].id}.png`}
                      alt={group[0].name}
                    />
                  </a>
                </div>
                <div className="text-content">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    {group[0].name}
                  </h2>
                  <p className="text-white-50 mt-4">
                    {group[0].tags.join(", ")}
                  </p>
                </div>
              </div>
            )}

            {group.length > 1 && (
              <div className="project-list-wrapper">
                {group.slice(1).map((proj) => (
                  <div key={proj.id} className="project">
                    <div className="image-wrapper">
                      <a
                        href={proj.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`/images/${proj.id}.png`}
                          alt={proj.name}
                        />
                      </a>
                    </div>
                    <h2>{proj.name}</h2>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="mt-12 text-center">
          <Link href="/">
            <button className="px-6 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
