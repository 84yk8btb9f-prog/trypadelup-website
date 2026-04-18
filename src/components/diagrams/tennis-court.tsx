// Schematic top-down tennis court (doubles): 23.77m × 10.97m.
// Kept in the same visual language as padel-court.tsx so they compare cleanly.

interface Props {
  className?: string;
  showLabels?: boolean;
}

export default function TennisCourt({
  className,
  showLabels = true,
}: Props) {
  const w = 23.77;
  const h = 10.97;
  const singlesInset = (10.97 - 8.23) / 2; // 1.37m alley
  const serviceLineOffset = 6.4;
  const padding = 1.5;
  const vbW = w + padding * 2;
  const vbH = h + padding * 2;

  const accent = "#00E676";
  const line = "rgba(240,244,248,0.55)";
  const lineDim = "rgba(240,244,248,0.3)";
  const surface = "rgba(0,230,118,0.04)";
  const labelColor = "rgba(240,244,248,0.5)";

  return (
    <svg
      className={className}
      viewBox={`0 0 ${vbW} ${vbH}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="tennis-court-title"
      role="img"
    >
      <title id="tennis-court-title">Tennis court layout — top-down diagram</title>

      <g transform={`translate(${padding}, ${padding})`}>
        <rect x={0} y={0} width={w} height={h} fill={surface} />
        <rect
          x={0}
          y={0}
          width={w}
          height={h}
          fill="none"
          stroke={line}
          strokeWidth={0.12}
        />

        {/* Singles sideline */}
        <line
          x1={0}
          y1={singlesInset}
          x2={w}
          y2={singlesInset}
          stroke={lineDim}
          strokeWidth={0.08}
        />
        <line
          x1={0}
          y1={h - singlesInset}
          x2={w}
          y2={h - singlesInset}
          stroke={lineDim}
          strokeWidth={0.08}
        />

        {/* Net */}
        <line
          x1={w / 2}
          y1={0}
          x2={w / 2}
          y2={h}
          stroke={accent}
          strokeWidth={0.14}
        />

        {/* Service lines */}
        <line
          x1={w / 2 - serviceLineOffset}
          y1={singlesInset}
          x2={w / 2 - serviceLineOffset}
          y2={h - singlesInset}
          stroke={line}
          strokeWidth={0.08}
        />
        <line
          x1={w / 2 + serviceLineOffset}
          y1={singlesInset}
          x2={w / 2 + serviceLineOffset}
          y2={h - singlesInset}
          stroke={line}
          strokeWidth={0.08}
        />

        {/* Centre service line */}
        <line
          x1={w / 2 - serviceLineOffset}
          y1={h / 2}
          x2={w / 2}
          y2={h / 2}
          stroke={line}
          strokeWidth={0.06}
        />
        <line
          x1={w / 2}
          y1={h / 2}
          x2={w / 2 + serviceLineOffset}
          y2={h / 2}
          stroke={line}
          strokeWidth={0.06}
        />

        {/* Centre mark on baseline */}
        <line
          x1={0}
          y1={h / 2}
          x2={0.3}
          y2={h / 2}
          stroke={line}
          strokeWidth={0.08}
        />
        <line
          x1={w - 0.3}
          y1={h / 2}
          x2={w}
          y2={h / 2}
          stroke={line}
          strokeWidth={0.08}
        />

        {showLabels && (
          <g
            fontSize={0.55}
            fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
            fill={labelColor}
          >
            <text x={w / 2} y={-0.4} textAnchor="middle">
              23.77 m
            </text>
            <text
              x={-0.8}
              y={h / 2}
              textAnchor="middle"
              transform={`rotate(-90 -0.8 ${h / 2})`}
            >
              10.97 m
            </text>
            <text
              x={w / 2 + 0.25}
              y={0.6}
              fill={accent}
              fontWeight={600}
              fontSize={0.5}
            >
              NET
            </text>
            <text
              x={w / 2 - serviceLineOffset / 2}
              y={h / 4 + 0.2}
              textAnchor="middle"
              fontSize={0.5}
            >
              service box
            </text>
          </g>
        )}
      </g>
    </svg>
  );
}
