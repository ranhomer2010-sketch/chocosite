import { SiteImage as Image } from "@/components/site-elements";

type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  position?: string;
};

export function PhotoGallery({
  eyebrow,
  title,
  photos,
  note,
}: {
  eyebrow: string;
  title: string;
  photos: GalleryPhoto[];
  note?: string;
}) {
  return (
    <section className="site-container photo-gallery section-pad" aria-label={title}>
      <div className="photo-gallery-heading" data-reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="photo-gallery-swipe">Листайте фото →</p>
      </div>
      <div className="photo-gallery-grid">
        {photos.map((photo) => (
          <figure className="photo-gallery-item" key={photo.src}>
            <div className="photo-gallery-media">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 680px) 84vw, (max-width: 1100px) 45vw, 24vw"
                style={{ objectPosition: photo.position ?? "center" }}
              />
            </div>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
      {note ? <p className="photo-gallery-note">{note}</p> : null}
    </section>
  );
}
