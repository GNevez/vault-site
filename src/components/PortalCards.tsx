import { CameraIcon, CommentIcon, HangUpIcon, HeadsetIcon, HeartIcon, MicIcon, PlayIcon, RepostIcon } from "./icons";

const cardShell = "rounded-2xl border border-card-line bg-card shadow-[0_20px_50px_rgb(0_0_0/0.5)]";

const SQUAD = ["N", "R", "L", "T"];

export function SquadCard() {
  return (
    <div className={`${cardShell} flex flex-col gap-3 p-3.5`}>
      <div className="flex items-center justify-between text-xs font-bold">
        <span className="flex items-center gap-1.5 text-ink">
          <HeadsetIcon size={14} className="text-gold" />
          Squad
        </span>
        <span className="text-online">Na call</span>
      </div>
      <div className="flex gap-2">
        {SQUAD.map((initial, index) => (
          <div
            key={initial}
            className={
              index === 0
                ? "flex size-10 items-center justify-center rounded-full bg-gold-deep text-sm font-extrabold text-gold shadow-[0_0_0_2px_var(--color-card),0_0_0_4px_var(--color-online)]"
                : "flex size-10 items-center justify-center rounded-full bg-avatar text-sm font-extrabold text-soft"
            }
          >
            {initial}
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        <div className="flex h-[30px] grow items-center justify-center rounded-lg bg-chip text-soft">
          <MicIcon size={15} />
        </div>
        <div className="flex h-[30px] grow items-center justify-center rounded-lg bg-chip text-soft">
          <CameraIcon size={15} />
        </div>
        <div className="flex h-[30px] grow items-center justify-center rounded-lg bg-danger-deep text-danger">
          <HangUpIcon size={15} />
        </div>
      </div>
    </div>
  );
}

export function FeedCard() {
  return (
    <div className={`${cardShell} flex flex-col gap-2.5 p-3.5`}>
      <div className="flex items-center gap-2.5">
        <div className="flex size-8 items-center justify-center rounded-full bg-gold-deep text-xs font-extrabold text-gold">N</div>
        <div className="text-[13px] font-bold">
          neves <span className="font-medium text-subtle">@neves · agora</span>
        </div>
      </div>
      <p className="text-sm leading-[1.45] text-body">Zerei no difícil sem tomar dano no chefe final. Quem topa a próxima run?</p>
      <div className="flex items-center gap-[18px] text-xs text-subtle">
        <span className="flex items-center gap-[5px]">
          <CommentIcon size={14} />
          12
        </span>
        <span className="flex items-center gap-[5px]">
          <RepostIcon size={14} />3
        </span>
        <span className="flex items-center gap-[5px] text-gold">
          <HeartIcon size={14} />
          48
        </span>
      </div>
    </div>
  );
}

export function ClipCard({ progress }: { progress: string }) {
  return (
    <div className={`${cardShell} flex flex-col gap-2.5 p-2.5`}>
      <div className="relative flex h-28 items-center justify-center rounded-[10px] bg-[repeating-linear-gradient(135deg,#1f1f24_0_10px,#1b1b20_10px_20px)]">
        <div className="flex size-10 items-center justify-center rounded-full bg-gold/95 text-gold-ink">
          <PlayIcon size={16} />
        </div>
        <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded-md bg-night/80 px-2 py-[3px] text-[11px] font-bold text-ink">
          <span className="size-1.5 rounded-full bg-danger" />
          Clipe
        </div>
      </div>
      <div className="flex flex-col gap-1.5 px-1 pb-1">
        <div className="h-1 overflow-hidden rounded bg-card-line">
          <div className="h-full rounded bg-gold transition-[width] delay-600 duration-[1600ms] ease-out" style={{ width: progress }} />
        </div>
        <div className="flex justify-between text-[11px] font-semibold text-subtle">
          <span>Últimos 30s salvos</span>
          <span>0:28</span>
        </div>
      </div>
    </div>
  );
}
