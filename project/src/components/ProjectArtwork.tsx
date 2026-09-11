import { Coffee, HeartPulse, Map, Palette, Sparkles, WalletCards } from 'lucide-react';

type ProjectArtworkProps = {
  projectId: string;
  compact?: boolean;
};

export function ProjectArtwork({ projectId, compact = false }: ProjectArtworkProps) {
  const scale = compact ? 'scale-[0.78] origin-center' : '';

  if (projectId === 'health-hub') {
    return (
      <div className={`relative h-full min-h-[168px] w-full overflow-hidden rounded-[22px] bg-[#FCE7F0] p-4 ${scale}`}>
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#FFD1E2]" />
        <div className="relative rounded-2xl bg-white/90 p-3 shadow-sm">
          <div className="mb-3 flex items-center justify-between"><span className="text-[10px] font-semibold text-[#5A4568]">Good morning, Yuktha</span><span className="h-5 w-5 rounded-full bg-[#FFB6D5]" /></div>
          <div className="flex items-center gap-2 rounded-xl bg-[#FFF3F7] p-2"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF7BAC]"><HeartPulse className="h-4 w-4 text-white" /></div><div><div className="text-[9px] font-semibold text-[#3D2B4E]">Health overview</div><div className="text-[8px] text-[#9F7A9D]">Everything looks steady</div></div></div>
          <div className="mt-3 grid grid-cols-3 gap-1.5">{['72 bpm', '98%', '120/80'].map((item) => <div key={item} className="rounded-lg bg-[#F8F3FF] p-1.5 text-center text-[8px] font-semibold text-[#7C5A92]">{item}</div>)}</div>
        </div>
        <div className="absolute bottom-3 right-4 h-2 w-16 rounded-full bg-[#FFB6D5]" />
      </div>
    );
  }

  if (projectId === 'bento-cafe') {
    return (
      <div className={`relative h-full min-h-[168px] w-full overflow-hidden rounded-[22px] bg-[#FFF0C8] p-4 ${scale}`}>
        <div className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-[#FFD79D]" />
        <div className="relative flex h-full flex-col justify-between rounded-2xl bg-[#FFF9ED]/90 p-3">
          <div className="flex items-center justify-between"><span className="font-display text-sm font-bold text-[#6A4638]">bento café</span><Coffee className="h-4 w-4 text-[#CF8A69]" /></div>
          <div><div className="font-display text-lg font-bold leading-tight text-[#6A4638]">slow mornings,<br /><span className="text-[#D98B68]">good coffee.</span></div><div className="mt-3 flex gap-2"><span className="rounded-full bg-[#D98B68] px-2 py-1 text-[8px] font-semibold text-white">Explore menu</span><span className="rounded-full bg-white px-2 py-1 text-[8px] font-semibold text-[#8A6356]">Our story</span></div></div>
        </div>
        <div className="absolute right-6 top-16 h-8 w-8 rounded-full border-4 border-[#D98B68]/30" />
      </div>
    );
  }

  if (projectId === 'moodboard') {
    return (
      <div className={`relative h-full min-h-[168px] w-full overflow-hidden rounded-[22px] bg-[#EDE4FF] p-4 ${scale}`}>
        <div className="relative grid h-full grid-cols-5 grid-rows-5 gap-2">
          <div className="col-span-3 row-span-2 rounded-xl bg-[#FFF9F5] p-2"><div className="h-2 w-10 rounded-full bg-[#B388FF]" /><div className="mt-3 h-7 w-16 rounded-lg bg-[#FFD6E8]" /></div>
          <div className="col-span-2 row-span-3 rounded-xl bg-[#B388FF] p-2"><Palette className="h-4 w-4 text-white" /><div className="mt-6 h-2 w-12 rounded-full bg-white/60" /></div>
          <div className="col-span-2 row-span-3 rounded-xl bg-[#D6F0FF] p-2"><div className="h-10 w-10 rounded-full bg-[#9ADBFF]" /><Sparkles className="mt-2 h-4 w-4 text-[#7C5A92]" /></div>
          <div className="col-span-3 row-span-2 rounded-xl bg-[#FFF3C4] p-2"><div className="h-2 w-16 rounded-full bg-[#E0B54F]" /><div className="mt-2 h-2 w-9 rounded-full bg-[#E0B54F]/50" /></div>
        </div>
      </div>
    );
  }

  if (projectId === 'finance-app') {
    return (
      <div className={`relative h-full min-h-[168px] w-full overflow-hidden rounded-[22px] bg-[#DDF7EA] p-4 ${scale}`}>
        <div className="relative rounded-2xl bg-[#F9FFFC]/90 p-3">
          <div className="flex items-center justify-between"><span className="text-[9px] font-semibold text-[#3D2B4E]">My money</span><WalletCards className="h-4 w-4 text-[#60B98B]" /></div>
          <div className="mt-3 text-xl font-bold text-[#3D2B4E]">₹24,680</div>
          <div className="mt-1 text-[8px] text-[#60B98B]">↑ 12.4% this month</div>
          <div className="mt-4 flex h-12 items-end gap-1.5">{[24, 32, 20, 38, 30, 46, 38, 52].map((height, index) => <div key={index} className="flex-1 rounded-t-md bg-[#8CE9BC]" style={{ height: `${height}px`, opacity: index === 7 ? 1 : 0.55 }} />)}</div>
        </div>
        <div className="absolute bottom-3 right-4 rounded-full bg-white/70 px-2 py-1 text-[8px] font-semibold text-[#4B9D74]">smart spending</div>
      </div>
    );
  }

  return (
    <div className={`relative h-full min-h-[168px] w-full overflow-hidden rounded-[22px] bg-[#DDF3FF] p-4 ${scale}`}>
      <div className="relative h-full overflow-hidden rounded-2xl bg-[#F5FCFF]/90">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(#B8E5FF 1px, transparent 1px), linear-gradient(90deg, #B8E5FF 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 220 150" fill="none"><path d="M18 126C57 102 64 110 92 84C115 63 131 94 155 62C171 42 186 40 206 24" stroke="#7CBFE5" strokeWidth="5" strokeLinecap="round" strokeDasharray="2 10" /><circle cx="18" cy="126" r="7" fill="#FF7BAC" /><circle cx="206" cy="24" r="7" fill="#B388FF" /></svg>
        <div className="absolute left-3 top-3 rounded-xl bg-white/85 px-2 py-1"><Map className="h-4 w-4 text-[#6AAFD2]" /></div>
        <div className="absolute bottom-3 right-3 rounded-full bg-white/85 px-2 py-1 text-[8px] font-semibold text-[#5D91AB]">live route</div>
      </div>
    </div>
  );
}
