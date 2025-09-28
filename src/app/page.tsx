'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import {
  FaCode,
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJava,
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

type TabKey = 'education' | 'experience' | 'skills' | 'projects';

export default function Home() {
  const [tab, setTab] = React.useState<TabKey>('education');

  const education = [
    {
      year: '2020-2023',
      name: 'SMA Santo Kristoforus 2',
      major: 'Ilmu Pengetahuan Sosial',
      img: '/kristo.png',
      desc: 'Learning basic programming knowledge.',
    },
    {
      year: '2023–2027',
      name: 'BINUS University',
      major: 'Information Systems',
      img: '/binus.png',
      desc: 'Focus on web development and project management skills. Building personal projects alongside coursework.',
    },
  ];

  const experience = [
    {
      year: 'Mar 2024 - Feb 2025',
      name: 'Intern (System Analyst)',
      major: 'IT Division BINUS',
      img: '/itbinus.jpg',
      desc: 'Reviewing pull request, creating automated E2E testing, designing wireframes.',
    },
  ];

  const skills = [
    { label: 'HTML', Icon: FaHtml5 },
    { label: 'JavaScript', Icon: TbBrandJavascript },
    { label: 'TypeScript', Icon: TbBrandTypescript },
    { label: 'CSS', Icon: FaCss3 },
    { label: 'Java', Icon: FaJava },
    { label: 'C#', Icon: TbBrandCSharp },
    { label: 'Express JS', Icon: SiExpress },
    { label: 'Next JS', Icon: TbBrandNextjs },
    { label: 'React', Icon: TbBrandReact },
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
      img: '/porto.PNG',
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
      img: '/zoyaa.PNG',
      links: {
        demo: 'https://zoyaa.vercel.app',
        github: 'https://github.com/dhirojap/zoyaa',
      },
    },
    {
      title: 'PISN',
      description:
        'Indonesia Government national certificate numbering website',
      stack: ['Laravel', 'SQL Server', 'MySQL'],
      img: '/pisn.PNG',
      links: {
        demo: 'https://pisn.kemdiktisaintek.go.id/',
        github: 'https://github.com/ijazahln/psn',
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
    'relative rounded-none border-2 border-black px-3 py-1 text-sm font-semibold select-none ' +
    'transition-[transform,box-shadow,background-color] duration-100 ease-out ' +
    'focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0';
  const tabRaised =
    'bg-white text-foreground shadow-[3px_3px_0_#000] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_#000] ' +
    'active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#000]';
  const tabPressed =
    'bg-[#C4F015] text-black translate-x-[2px] translate-y-[2px] shadow-[1px_1px_0_#000]';

  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-6">
      <section className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl border-2 border-black bg-card text-card-foreground shadow-[4px_4px_0_#000] rounded-none">
        <div className="absolute -top-3 -left-3">
          <Label variant="sticker" size="lg">
            Dhiro Jap
          </Label>
        </div>

        <div className="p-6">
          <div className="mt-6 flex items-stretch gap-4">
            <div className="relative self-stretch w-28 sm:w-32 md:w-36 border-2 border-black overflow-hidden bg-muted shrink-0">
              <Image
                src="/avatar.png"
                alt="Dhiro Jap"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="min-w-0 flex-1 flex flex-col gap-2 justify-center">
              <h2 className="text-xl font-bold">Student</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hello, my name is Dhiro Jap and I am an Information Systems
                student at BINUS University, expected to graduate in 2027. I am
                highly motivated and enthusiastic about collaborating in teams
                and continuously improving my skills. With a strong interest in
                technology, I am eager to learn and grow further, especially in
                the field of website development. My main focus is backend
                development, where I enjoy building efficient and reliable
                systems. I am also working on personal projects to sharpen my
                abilities and prepare myself for future career opportunities.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <nav className="flex gap-2 flex-wrap">
              {tabs.map((t) => {
                const active = tab === t.key;
                return (
                  <button
                    key={t.key}
                    type="button"
                    aria-pressed={active}
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
                <div className="space-y-3">
                  {education.map((e) => (
                    <div
                      key={e.name + e.year}
                      className="grid grid-cols-[auto_1fr] gap-3 items-center"
                    >
                      <div className="relative h-14 w-14 border-2 border-black bg-white overflow-hidden">
                        <Image
                          src={e.img}
                          alt={e.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold">{e.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {e.year} • {e.major}
                        </div>
                        {e.desc && (
                          <div className="text-xs mt-1 text-muted-foreground">
                            {e.desc}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'experience' && (
                <div className="space-y-3">
                  {experience.map((x) => (
                    <div
                      key={x.name + x.year}
                      className="grid grid-cols-[auto_1fr] gap-3 items-center"
                    >
                      <div className="relative h-14 w-14 border-2 border-black bg-white overflow-hidden">
                        <Image
                          src={x.img}
                          alt={x.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold">{x.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {x.year} • {x.major}
                        </div>
                        {x.desc && (
                          <div className="text-xs mt-1 text-muted-foreground">
                            {x.desc}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'skills' && (
                <div className="flex flex-wrap gap-2">
                  {skills.map(({ label, Icon }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-none border-2 border-black bg-white px-2 py-1 text-xs font-medium shadow-[2px_2px_0_#000]"
                    >
                      <Icon className="size-4" />
                      {label}
                    </span>
                  ))}
                </div>
              )}

              {tab === 'projects' && (
                <div className="grid gap-4">
                  {projects.map((p) => (
                    <article
                      key={p.title}
                      className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 border-2 border-black bg-white shadow-[2px_2px_0_#000] p-3"
                    >
                      <div className="relative w-full h-28 sm:h-full border-2 border-black bg-muted overflow-hidden">
                        <Image
                          src={p.img}
                          alt={p.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex flex-col gap-2">
                        <h3 className="font-bold text-base">{p.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {p.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="rounded-none border-2 border-black bg-accent px-2 py-0.5 text-xs font-medium"
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
                              <FaGithub className="mr-1 size-4" />
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
                              <CiGlobe className="mr-1 size-4" />
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

          <div className="mt-6 flex gap-4 flex-wrap">
            <Button className="rounded-none border-2 border-black bg-purple-600 text-white shadow-[2px_2px_0_#000] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_#000]">
              <a href="https://id.linkedin.com/in/dhirojap" target="_blank">
                LinkedIn
              </a>
            </Button>
            <Button className="rounded-none border-2 border-black bg-purple-600 text-white shadow-[2px_2px_0_#000] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_#000]">
              <a href="https://github.com/dhirojap" target="_blank">
                GitHub
              </a>
            </Button>
            <Button className="rounded-none border-2 border-black bg-purple-600 text-white shadow-[2px_2px_0_#000] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_#000]">
              <a href="https://instagram.com/dhirojap" target="_blank">
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
