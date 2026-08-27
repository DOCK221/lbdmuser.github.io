import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FiArrowLeft } from "react-icons/fi";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projet introuvable" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs tracking-[0.22em] text-white/60 uppercase transition hover:text-accent"
        >
          <FiArrowLeft />
          Retour aux projets
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs tracking-[0.28em] text-accent uppercase">
              {project.year} · {project.subtitle}
            </p>
            <h1 className="font-display mt-4 text-5xl text-white md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute md:text-lg">
              {project.description}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.22em] text-mute uppercase">
              Missions
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.missions.map((mission) => (
                <li
                  key={mission}
                  className="border border-white/10 px-3 py-1.5 text-[11px] tracking-[0.14em] text-white/70 uppercase"
                >
                  {mission}
                </li>
              ))}
            </ul>

            {project.palette ? (
              <div className="mt-8">
                <p className="text-xs tracking-[0.22em] text-mute uppercase">
                  Palette
                </p>
                <div className="mt-3 flex items-center gap-3">
                  {project.palette.colors.map((color) => (
                    <span
                      key={color}
                      className="h-8 w-8 border border-white/15"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  <span className="text-sm text-white/50">
                    {project.palette.name}
                  </span>
                </div>
              </div>
            ) : null}

            {project.style ? (
              <div className="mt-8">
                <p className="text-xs tracking-[0.22em] text-mute uppercase">
                  Style
                </p>
                <p className="mt-3 text-white/70">{project.style.join(" · ")}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="relative mt-14 aspect-[16/9] overflow-hidden border border-white/8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {project.gallery && project.gallery.length > 1 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {project.gallery.slice(1).map((image) => (
              <div
                key={image}
                className="relative aspect-[4/3] overflow-hidden border border-white/8"
              >
                <Image
                  src={image}
                  alt={`${project.title} gallery`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            href="/#contact"
            className="bg-accent px-7 py-3.5 text-sm tracking-[0.18em] text-ink uppercase transition hover:bg-white"
          >
            Discuter d’un projet
          </Link>
          <Link
            href="/#projects"
            className="border border-white/20 px-7 py-3.5 text-sm tracking-[0.18em] text-white uppercase transition hover:border-accent hover:text-accent"
          >
            Voir d’autres projets
          </Link>
        </div>
      </div>
    </article>
  );
}
