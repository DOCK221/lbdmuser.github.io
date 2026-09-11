import { Button } from "@/components/ui/Button";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";
import type { SocialPost } from "@/lib/types";

export function SocialFeed({ posts }: { posts: SocialPost[] }) {
  return (
    <section className="bg-ink py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Réseaux"
              title="Suivez-nous sur TikTok"
              description={`Les arrivées, les détails, les coulisses — ${SITE.tiktokHandle}`}
            />
          </Reveal>
          <Reveal delay={0.12}>
            <Button href={SITE.tiktok} variant="gold">
              TikTok {SITE.tiktokHandle}
            </Button>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.05}>
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-[4/5] overflow-hidden bg-anthracite"
              >
                <Photo
                  src={post.image}
                  alt={post.caption}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                <div className="absolute inset-x-3 bottom-3">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-gold">
                    TikTok
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-ivory">{post.caption}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

