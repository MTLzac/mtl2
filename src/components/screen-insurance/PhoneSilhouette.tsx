interface PhoneSilhouetteProps {
  modelName?: string;
  price?: number;
}

export function PhoneSilhouette({ modelName, price }: PhoneSilhouetteProps) {
  return (
    <div className="relative mx-auto w-56 sm:w-64 md:w-72 transition-all duration-500">
      {/* Phone frame */}
      <div className="relative rounded-[3rem] border-[3px] border-foreground/15 bg-foreground/[0.04] p-3 shadow-2xl shadow-primary/10">
        {/* Side buttons - left */}
        <div className="absolute -left-[5px] top-[5.5rem] h-6 w-[3px] rounded-l-sm bg-foreground/15" />
        <div className="absolute -left-[5px] top-[8rem] h-10 w-[3px] rounded-l-sm bg-foreground/15" />
        <div className="absolute -left-[5px] top-[10.5rem] h-10 w-[3px] rounded-l-sm bg-foreground/15" />
        {/* Side button - right */}
        <div className="absolute -right-[5px] top-[8.5rem] h-12 w-[3px] rounded-r-sm bg-foreground/15" />

        {/* Inner bezel */}
        <div className="relative overflow-hidden rounded-[2.25rem] bg-foreground/[0.03]">
          {/* Dynamic Island / Notch */}
          <div className="relative z-10 mx-auto mt-3 flex h-[1.6rem] w-[6.5rem] items-center justify-center rounded-full bg-foreground/90">
            <div className="h-[0.4rem] w-[0.4rem] rounded-full bg-foreground/30 mr-3" />
            <div className="h-[0.55rem] w-[0.55rem] rounded-full bg-foreground/20 ring-1 ring-foreground/10" />
          </div>

          {/* Screen content area */}
          <div className="flex min-h-[22rem] flex-col items-center justify-center px-6 py-8">
            {/* Wallpaper glow effect */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            </div>

            {/* Content on screen */}
            <div className="relative z-10 text-center space-y-3">
              {/* Shield icon */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 backdrop-blur-sm border border-primary/20">
                <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-primary" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l8 4v6c0 5.25-3.5 10-8 11.5C7.5 22 4 17.25 4 12V6l8-4z" />
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {modelName && (
                <p className="text-[0.65rem] font-medium tracking-wide text-foreground/40 uppercase">
                  {modelName}
                </p>
              )}

              {price != null && (
                <p className="text-3xl font-bold text-primary">
                  ${price}
                </p>
              )}

              {price != null && (
                <p className="text-[0.6rem] text-foreground/30 font-medium">Protected</p>
              )}

              {!modelName && !price && (
                <>
                  <p className="text-xs text-foreground/30 font-medium">Select a model</p>
                  <p className="text-[0.6rem] text-foreground/20">to see your price</p>
                </>
              )}
            </div>
          </div>

          {/* Home indicator */}
          <div className="mx-auto mb-2 h-1 w-24 rounded-full bg-foreground/15" />
        </div>
      </div>
    </div>
  );
}
