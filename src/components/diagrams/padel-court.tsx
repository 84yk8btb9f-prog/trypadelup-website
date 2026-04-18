// Schematic top-down padel court. 20m × 10m, net at centre, service lines
// 6.95m from the net. Dimensions to scale; units are "world" coords mapped to
// the SVG viewBox (1 world unit = 1 metre).

interface Props {
  className?: string;
  showLabels?: boolean;
}

export default function PadelCourt({
  className,
  showLabels = true,
}: Props) {
  const w = 20;
  const h = 10;
  const padding = 1.5; // extra space for labels
  const vbW = w + padding * 2;
  const vbH = h + padding * 2;

  const accent = "#00E676";
  const line = "rgba(240,244,248,0.55)";
  const lineDim = "rgba(240,244,248,0.25)";
  const surface = "rgba(0,230,118,0.06)";
  const labelColor = "rgba(240,244,248,0.5)";

  return (
    <svg
      className={className}
      viewBox={`0 0 ${vbW} ${vbH}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="padel-court-title"
      role="img"
    >
      <title id="padel-court-title">Padel court layout — top-down diagram</title>

      <g transform={`translate(${padding}, ${padding})`}>
        {/* Playing surface */}
        <rect x={0} y={0} width={w} height={h} fill={surface} />

        {/* Outer boundary */}
        <rect
          x={0}
          y={0}
          width={w}
          height={h}
          fill="none"
          stroke={line}
          strokeWidth={0.12}
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

        {/* Service lines (6.95m each side of net) */}
        <line
          x1={w / 2 - 6.95}
          y1={0}
          x2={w / 2 - 6.95}
          y2={h}
          stroke={line}
          strokeWidth={0.08}
        />
        <line
          x1={w / 2 + 6.95}
          y1={0}
          x2={w / 2 + 6.95}
          y2={h}
          stroke={line}
          strokeWidth={0.08}
        />

        {/* Centre service line between service line and net, both sides */}
        <line
          x1={w / 2 - 6.95}
          y1={h / 2}
          x2={w / 2}
          y2={h / 2}
          stroke={line}
          strokeWidth={0.06}
        />
        <line
          x1={w / 2}
          y1={h / 2}
          x2={w / 2 + 6.95}
          y2={h / 2}
          stroke={line}
          strokeWidth={0.06}
        />

        {showLabels && (
          <g
            fontSize={0.55}
            fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
            fill={labelColor}
          >
            {/* Width label */}
            <text x={w / 2} y={-0.4} textAnchor="middle">
              20 m
            </text>
            {/* Height label rotated */}
            <text
              x={-0.8}
              y={h / 2}
              textAnchor="middle"
              transform={`rotate(-90 -0.8 ${h / 2})`}
            >
              10 m
            </text>
            {/* Service-line distances */}
            <text x={w / 2 - 3.475} y={h + 0.9} textAnchor="middle">
              6.95 m
            </text>
            <text x={w / 2 + 3.475} y={h + 0.9} textAnchor="middle">
              6.95 m
            </text>
            {/* Net label */}
            <text
              x={w / 2 + 0.25}
              y={0.6}
              fill={accent}
              fontWeight={600}
              fontSize={0.5}
            >
              NET
            </text>
            {/* Service box label */}
            <text
              x={w / 2 - 3.475}
              y={h / 4 + 0.2}
              textAnchor="middle"
              fontSize={0.5}
            >
              service box
            </text>
          </g>
        )}

        {/* Dashed walls indicator along the perimeter */}
        <rect
          x={-0.25}
          y={-0.25}
          width={w + 0.5}
          height={h + 0.5}
          fill="none"
          stroke={lineDim}
          strokeWidth={0.06}
          strokeDasharray="0.4 0.3"
        />
      </g>
    </svg>
  );
}
