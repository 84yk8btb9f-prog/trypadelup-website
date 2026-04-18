// Side-view schematic of the bandeja swing path: a cut across the ball
// (high → low → forward), annotated with contact point and key errors.

interface Props {
  className?: string;
}

export default function BandejaSwing({ className }: Props) {
  const w = 100;
  const h = 70;
  const accent = "#00E676";
  const line = "rgba(240,244,248,0.55)";
  const lineDim = "rgba(240,244,248,0.25)";
  const labelColor = "rgba(240,244,248,0.55)";
  const dangerColor = "rgba(244,99,99,0.75)";

  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="bandeja-swing-title"
      role="img"
    >
      <title id="bandeja-swing-title">
        Bandeja swing path — side view showing the slicing cut across the ball
      </title>

      <defs>
        <marker
          id="arrow-accent"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={accent} />
        </marker>
        <marker
          id="arrow-dim"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="4"
          markerHeight="4"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={line} />
        </marker>
        <marker
          id="arrow-danger"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="4"
          markerHeight="4"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={dangerColor} />
        </marker>
      </defs>

      {/* Ground line */}
      <line
        x1={5}
        y1={62}
        x2={w - 5}
        y2={62}
        stroke={lineDim}
        strokeWidth={0.4}
        strokeDasharray="1 1"
      />

      {/* Player silhouette (simple stick figure) */}
      <g stroke={line} strokeWidth={0.6} fill="none" strokeLinecap="round">
        {/* head */}
        <circle cx={30} cy={34} r={2.4} />
        {/* torso */}
        <line x1={30} y1={36.4} x2={30} y2={50} />
        {/* legs */}
        <line x1={30} y1={50} x2={26} y2={62} />
        <line x1={30} y1={50} x2={34} y2={62} />
        {/* shoulder + dominant arm reaching up-forward */}
        <line x1={30} y1={39} x2={38} y2={28} />
        <line x1={38} y1={28} x2={46} y2={22} />
        {/* non-dominant arm tracking ball */}
        <line x1={30} y1={39} x2={36} y2={32} />
      </g>

      {/* Racket head at prep position */}
      <g>
        <ellipse
          cx={46}
          cy={21}
          rx={3.2}
          ry={2}
          transform="rotate(-28 46 21)"
          fill="none"
          stroke={line}
          strokeWidth={0.55}
        />
      </g>

      {/* Contact point marker */}
      <g>
        <circle
          cx={52}
          cy={22}
          r={1.8}
          fill={accent}
          fillOpacity={0.3}
          stroke={accent}
          strokeWidth={0.5}
        />
        <circle cx={52} cy={22} r={0.6} fill={accent} />
        <text
          x={56}
          y={20}
          fontSize={2.6}
          fill={accent}
          fontWeight={600}
          fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
        >
          contact point
        </text>
        <text
          x={56}
          y={23.5}
          fontSize={2.2}
          fill={labelColor}
          fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
        >
          ahead of the shoulder, open face
        </text>
      </g>

      {/* Ball incoming trajectory (lob arriving) */}
      <path
        d={`M ${85} 18 Q ${70} 10 ${54} 19`}
        fill="none"
        stroke={lineDim}
        strokeWidth={0.5}
        strokeDasharray="1 1"
        markerEnd="url(#arrow-dim)"
      />
      <text
        x={82}
        y={14}
        fontSize={2.2}
        fill={labelColor}
        textAnchor="end"
        fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
      >
        incoming lob
      </text>

      {/* The swing path: high → low → forward (the slicing cut) */}
      <path
        d={`M ${46} 21 Q ${50} 26 ${55} 30 Q ${62} 38 ${74} 42`}
        fill="none"
        stroke={accent}
        strokeWidth={0.9}
        strokeLinecap="round"
        markerEnd="url(#arrow-accent)"
      />
      <text
        x={74}
        y={38}
        fontSize={2.6}
        fill={accent}
        fontWeight={600}
        fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
      >
        swing path
      </text>
      <text
        x={74}
        y={41}
        fontSize={2.2}
        fill={labelColor}
        fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
      >
        high → low → forward
      </text>

      {/* Outgoing ball: low, short, deep — with slice */}
      <path
        d={`M ${55} 30 Q ${75} 33 ${92} 50`}
        fill="none"
        stroke={accent}
        strokeWidth={0.6}
        strokeDasharray="1.5 1"
        markerEnd="url(#arrow-accent)"
      />
      <text
        x={92}
        y={56}
        fontSize={2.2}
        fill={labelColor}
        textAnchor="end"
        fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
      >
        sliced return: low, short, deep
      </text>

      {/* Common error: hitting flat with full follow-through down */}
      <path
        d={`M ${46} 21 L ${60} 58`}
        fill="none"
        stroke={dangerColor}
        strokeWidth={0.5}
        strokeDasharray="0.8 0.8"
        markerEnd="url(#arrow-danger)"
      />
      <text
        x={60}
        y={65}
        fontSize={2.2}
        fill={dangerColor}
        textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
      >
        common error: flat, into the net
      </text>
    </svg>
  );
}
