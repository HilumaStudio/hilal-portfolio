export default function HeroBlob() {
  return (
    <svg className="w-full" viewBox="0 0 600 700" role="img" aria-label="Hilal Abdullah">
      <defs>
        <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
          <path d="M0.752,0.168 C0.907,0.294,0.986,0.493,0.969,0.687 C0.953,0.88,0.842,1,0.666,1 C0.49,1,0.248,0.952,0.125,0.809 C0.002,0.666,0,0.43,0.09,0.265 C0.181,0.1,0.356,0.006,0.517,0.004 C0.678,0.002,0.597,0.042,0.752,0.168 Z"/>
        </clipPath>
      </defs>
      <g opacity="0.8">
        <circle cx="90" cy="90" r="6" fill="#facc15" className="animate-float-slow will-change-transform transform-gpu" />
        <circle cx="520" cy="120" r="4" fill="#facc15" className="animate-float-slower will-change-transform transform-gpu" />
        <circle cx="100" cy="580" r="7" fill="#facc15" className="animate-float-slower will-change-transform transform-gpu" style={{ animationDelay: '1.2s' }} />
        <circle cx="500" cy="640" r="5" fill="#facc15" className="animate-float-slow will-change-transform transform-gpu" style={{ animationDelay: '1.2s' }} />
      </g>
      {/* Taruh file di /public/hilal-hero.jpg */}
      <image x="60" y="40" width="480" height="620"
        preserveAspectRatio="xMidYMid slice"
        href="/hilal-hero.jpg" clipPath="url(#blobClip)" />
      <g className="text-zinc-900 opacity-10 dark:text-zinc-100 dark:opacity-20">
        <path
          d="M470,120 C560,190 596,310 585,420 C574,531 514,600 425,620 C336,640 212,618 150,546 C88,474 86,360 134,271 C182,182 274,134 356,133 C438,132 380,50 470,120 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
        />
      </g>
    </svg>
  );
}
