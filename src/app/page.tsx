'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJava,
  FaVial,
} from 'react-icons/fa';
import {
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandCSharp,
  TbBrandMongodb,
  TbBrandPrisma,
} from 'react-icons/tb';
import { CiGlobe } from 'react-icons/ci';
import { SiDotnet, SiExpress, SiMysql } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import {
  MdSmartToy,
  MdDocumentScanner,
  MdAnalytics,
  MdAssignment,
  MdFactCheck,
  MdSearch,
  MdGroups,
  MdAutoAwesome,
  MdAccountTree,
} from 'react-icons/md';

type TabKey = 'education' | 'experience' | 'skills' | 'projects';

export default function Home() {
  const [tab, setTab] = React.useState<TabKey>('education');

  const education = [
    {
      year: 'Sep 2023 – Sep 2027',
      name: 'BINUS University',
      major: 'Information Systems (Digital Technology)',
      img: '/binuslogo.png',
      desc: 'Focus on developing knowledge in information systems analysis and design, business processes, database systems, and website development',
    },
  ];

  const experience = [
    {
      year: 'Feb 2026 - Feb 2027',
      name: 'Business Analyst (Internship)',
      company: 'PT Bank Central Asia Tbk',
      img: '/bcalogo.png',
      desc: 'Explore, define requirements, deliver, and manage automation products involving RPA, OCR, and Generative AI',
    },
    {
      year: 'Mar 2024 - Feb 2025',
      name: 'System Analyst (Contract)',
      company: 'IT Division BINUS',
      img: '/itbinuslogo.jpeg',
      desc: 'Reviewing pull request, creating automated E2E testing, designing wireframes',
    },
  ];

  const skills = [
    { label: 'Project Management', Icon: MdAssignment },
    { label: 'Requirements Gathering', Icon: MdSearch },
    { label: 'Business Process Analysis', Icon: MdAnalytics },
    { label: 'Functional Requirements', Icon: MdAccountTree },
    { label: 'Stakeholder Management', Icon: MdGroups },
    { label: 'RPA', Icon: MdSmartToy },
    { label: 'UiPath', Icon: MdSmartToy },
    { label: 'OCR', Icon: MdDocumentScanner },
    { label: 'Generative AI', Icon: MdAutoAwesome },
    { label: 'Manual Testing', Icon: MdFactCheck },
    { label: 'HTML', Icon: FaHtml5 },
    { label: 'JavaScript', Icon: TbBrandJavascript },
    { label: 'TypeScript', Icon: TbBrandTypescript },
    { label: 'CSS', Icon: FaCss3 },
    { label: 'Java', Icon: FaJava },
    { label: 'C#', Icon: TbBrandCSharp },
    { label: 'Express JS', Icon: SiExpress },
    { label: 'Next JS', Icon: TbBrandNextjs },
    { label: 'React', Icon: TbBrandReact },
    { label: 'Playwright', Icon: FaVial },
    { label: '.NET', Icon: SiDotnet },
    { label: 'Tailwind', Icon: RiTailwindCssFill },
    { label: 'MySQL', Icon: SiMysql },
    { label: 'SQL Server', Icon: DiMsqlServer },
    { label: 'MongoDB', Icon: TbBrandMongodb },
    { label: 'Prisma', Icon: TbBrandPrisma },
    { label: 'Git', Icon: FaGithub },
    { label: 'Figma', Icon: FaFigma },
  ];

  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'My personal site using Next.js, Tailwind, and shadcn. Focus on speed, accessibility, and playful visuals.',
      stack: ['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui'],
      img: '/portfolio.png',
      links: {
        demo: 'https://dhirojap.vercel.app',
        github: 'https://github.com/dhirojap/portfolio',
      },
    },
    {
      title: 'Zoyaa',
      description: 'AI Integrated conversation with PDF documents',
      stack: [
        'Next.js',
        'OpenAI',
        'Tailwind',
        'Prisma',
        'Stripe',
        'Pinecone',
        'Uploadthing',
      ],
      img: '/zoya.png',
      links: {
        demo: 'https://zoyaa.vercel.app',
        github: 'https://github.com/dhirojap/zoyaa',
      },
    },
  ];

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'education', label: 'Education' },
    { key: 'experience', label: 'Experience' },
    { key: 'skills', label: 'Skills' },
    { key: 'projects', label: 'Projects' },
  ];

  const tabBase =
    'relative rounded-none border-2 border-black px-3 py-1 text-sm md:text-base font-semibold select-none ' +
    'transition-[transform,box-shadow,background-color] duration-100 ease-out ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2';
  const tabRaised =
    'bg-white text-foreground shadow-[3px_3px_0_#000] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_#000] ' +
    'active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#000]';
  const tabPressed =
    'bg-[#C4F015] text-black translate-x-[2px] translate-y-[2px] shadow-[1px_1px_0_#000]';

  return (
    <main className="min-h-screen bg-background px-4 py-6 md:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-[1040px] border-2 border-black bg-card text-card-foreground shadow-[4px_4px_0_#000] rounded-none">
        {/* Sticker */}
        <div className="relative">
          <div className="absolute -top-3 -left-3 z-10">
            <Label variant="sticker" size="lg">
              Dhiro Jap
            </Label>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header row → stacks on small screens */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[auto,1fr]">
            {/* Avatar */}
            <div className="relative w-28 aspect-[3/4] sm:w-32 md:w-36 border-2 border-black overflow-hidden bg-muted mx-auto sm:mx-0">
              <Image
                src="/profile.jpg"
                alt="Dhiro Jap"
                fill
                sizes="(max-width: 640px) 7rem, (max-width: 768px) 8rem, 9rem"
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                Student @ BINUS University
              </h1>
              <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                Hello, my name is Dhiro Jap and I am a final-year Information
                Systems student at BINUS University. I am highly motivated and
                enthusiastic about collaborating in teams, solving problems, and
                continuously improving my technical and analytical skills. With
                a strong interest in technology, I am eager to learn and grow
                further, especially in the field of automation and AI. Alongside
                my academic studies and professional experience, I work on
                personal projects to sharpen my abilities and explore new
                technologies. I am eager to continue learning and growing while
                building meaningful solutions that create value.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <nav
              role="tablist"
              aria-label="Profile sections"
              className="flex flex-wrap gap-2"
            >
              {tabs.map((t) => {
                const active = tab === t.key;
                return (
                  <button
                    role="tab"
                    aria-selected={active}
                    key={t.key}
                    type="button"
                    onClick={() => setTab(t.key)}
                    className={`${tabBase} ${active ? tabPressed : tabRaised}`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </nav>

            <div className="mt-3 rounded-none border-2 border-black bg-accent/50 p-4 shadow-[2px_2px_0_#000]">
              {tab === 'education' && (
                <ul className="space-y-3">
                  {education.map((e) => (
                    <li
                      key={e.name + e.year}
                      className="flex gap-4 border-2 border-black bg-white p-3 shadow-[2px_2px_0_#000]"
                    >
                      <div className="relative size-24 shrink-0 overflow-hidden border-2 border-black bg-white">
                        <Image
                          src={e.img}
                          alt={e.name}
                          fill
                          sizes="96px"
                          className="object-cover object-top"
                          priority
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3 className="font-bold text-sm md:text-base">
                              {e.name}
                            </h3>
                            <p className="text-xs md:text-sm font-medium">
                              {e.major}
                            </p>
                          </div>
                          <span className="shrink-0 border-black border-2 bg-accent px-2 py-0.5 text-[11px] md:text-xs font-semibold">
                            {e.year}
                          </span>
                        </div>
                        <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {e.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {tab === 'experience' && (
                <ul className="space-y-3">
                  {experience.map((x) => (
                    <li
                      key={x.name + x.year}
                      className="flex gap-4 border-2 border-black bg-white p-3 shadow-[2px_2px_0_#000]"
                    >
                      <div className="relative size-24 shrink-0 overflow-hidden border-2 border-black bg-white">
                        <Image
                          src={x.img}
                          alt={x.name}
                          fill
                          sizes="96px"
                          className="object-cover object-top"
                          priority
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3 className="font-bold text-sm md:text-base">
                              {x.name}
                            </h3>
                            <p className="text-xs md:text-sm font-medium">
                              {x.company}
                            </p>
                          </div>
                          <span className="shrink-0 border-black border-2 bg-accent px-2 py-0.5 text-[11px] md:text-xs font-semibold">
                            {x.year}
                          </span>
                        </div>
                        <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {x.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {tab === 'skills' && (
                <div
                  className="grid gap-2"
                  style={{
                    gridTemplateColumns:
                      'repeat(auto-fill, minmax(min(180px, 100%), 1fr))',
                  }}
                >
                  {skills.map(({ label, Icon }) => (
                    <span
                      key={label}
                      className="flex min-w-0 items-center gap-1.5 rounded-none border-2 border-black bg-white px-2 py-1.5 text-xs font-medium shadow-[2px_2px_0_#000] md:text-sm"
                    >
                      <Icon className="size-4 shrink-0 md:size-5" />
                      <span className="leading-tight">{label}</span>
                    </span>
                  ))}
                </div>
              )}

              {tab === 'projects' && (
                <div className="grid gap-4 sm:gap-5 md:gap-6">
                  {projects.map((p) => (
                    <article
                      key={p.title}
                      className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(280px,1fr)] border-2 border-black bg-white shadow-[2px_2px_0_#000] p-3"
                    >
                      <div className="relative w-full aspect-video border-2 border-black bg-muted overflow-hidden">
                        <Image
                          src={p.img}
                          alt={p.title}
                          fill
                          sizes="(max-width:768px) 100vw, 60vw"
                          className="object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex flex-col gap-2">
                        <h3 className="font-bold text-base md:text-lg">
                          {p.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          {p.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="rounded-none border-2 border-black bg-accent px-2 py-0.5 text-xs md:text-sm font-medium"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        <div className="mt-1 flex gap-2 flex-wrap">
                          <Button
                            asChild
                            className="rounded-none border-2 border-black shadow-[2px_2px_0_#000]"
                          >
                            <a
                              href={p.links.github}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaGithub className="mr-1 size-4 md:size-5" />
                              GitHub
                            </a>
                          </Button>
                          <Button
                            asChild
                            className="rounded-none border-2 border-black shadow-[2px_2px_0_#000]"
                          >
                            <a
                              href={p.links.demo}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <CiGlobe className="mr-1 size-4 md:size-5" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="rounded-none border-2 border-black bg-purple-600 text-white shadow-[2px_2px_0_#000] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_#000]">
              <a
                href="https://id.linkedin.com/in/dhirojap"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button className="rounded-none border-2 border-black bg-purple-600 text-white shadow-[2px_2px_0_#000] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_#000]">
              <a
                href="https://github.com/dhirojap"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Button>
            <Button className="rounded-none border-2 border-black bg-purple-600 text-white shadow-[2px_2px_0_#000] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_#000]">
              <a
                href="https://instagram.com/dhirojap"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
