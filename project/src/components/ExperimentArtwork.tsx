type ExperimentArtworkProps = {
  title: string;
  color: string;
};

const images: Record<string, string> = {
  'Logo explorations': 'https://images.pexels.com/photos/12261026/pexels-photo-12261026.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'Poster designs': 'https://images.pexels.com/photos/6288281/pexels-photo-6288281.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'Landing page concepts': 'https://images.pexels.com/photos/29765806/pexels-photo-29765806.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'Mobile UI experiments': 'https://images.pexels.com/photos/30909364/pexels-photo-30909364.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'Branding explorations': 'https://images.pexels.com/photos/8842336/pexels-photo-8842336.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'Typography experiments': 'https://images.pexels.com/photos/11300439/pexels-photo-11300439.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'Instagram carousel designs': 'https://images.pexels.com/photos/238480/pexels-photo-238480.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'Colour palette studies': 'https://images.pexels.com/photos/7908546/pexels-photo-7908546.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'Dashboard concepts': 'https://images.pexels.com/photos/19986947/pexels-photo-19986947.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
};

export function ExperimentArtwork({ title }: ExperimentArtworkProps) {
  const src = images[title];

  if (!src) {
    return <div className="h-full w-full bg-white/40" />;
  }

  return (
    <img
      src={src}
      alt={title}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
    />
  );
}
