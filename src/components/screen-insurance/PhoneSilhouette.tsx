interface PhoneSilhouetteProps {
  modelName?: string;
  price?: number;
}

export function PhoneSilhouette({ modelName, price }: PhoneSilhouetteProps) {
  return (
    <div className="relative mx-auto w-48 sm:w-56 md:w-64 transition-all duration-500">
      <svg
        viewBox="0 0 220 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full drop-shadow-2xl"
      >
        {/* Phone body */}
        <rect
          x="10"
          y="10"
          width="200"
          height="420"
          rx="36"
          className="fill-foreground/5 stroke-foreground/20"
          strokeWidth="2"
        />
        {/* Screen area */}
        <rect
          x="22"
          y="50"
          width="176"
          height="340"
          rx="4"
          className="fill-foreground/[0.03] stroke-foreground/10"
          strokeWidth="1"
        />
        {/* Notch / Dynamic Island */}
        <rect
          x="75"
          y="22"
          width="70"
          height="18"
          rx="9"
          className="fill-foreground/10"
        />
        {/* Home indicator */}
        <rect
          x="80"
          y="408"
          width="60"
          height="4"
          rx="2"
          className="fill-foreground/10"
        />
        {/* Side button */}
        <rect
          x="210"
          y="130"
          width="3"
          height="50"
          rx="1.5"
          className="fill-foreground/15"
        />
        <rect
          x="7"
          y="120"
          width="3"
          height="30"
          rx="1.5"
          className="fill-foreground/15"
        />
        <rect
          x="7"
          y="160"
          width="3"
          height="30"
          rx="1.5"
          className="fill-foreground/15"
        />

        {/* Model name on screen */}
        {modelName && (
          <text
            x="110"
            y="200"
            textAnchor="middle"
            className="fill-foreground/40 text-[11px] font-medium"
          >
            {modelName}
          </text>
        )}

        {/* Price on screen */}
        {price != null && (
          <text
            x="110"
            y="240"
            textAnchor="middle"
            className="fill-primary text-[28px] font-bold"
          >
            ${price}
          </text>
        )}

        {/* Shield icon on screen */}
        {price != null && (
          <g transform="translate(95, 260)" className="fill-primary/30">
            <path d="M15 0 L30 8 L30 18 C30 28 22 35 15 38 C8 35 0 28 0 18 L0 8 Z" />
          </g>
        )}
      </svg>
    </div>
  );
}
