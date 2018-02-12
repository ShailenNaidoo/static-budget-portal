import { h } from 'preact';
import { relative } from 'path';

export default function VerticalLineGroup({ totalGroupSpace, groupSpaceArray, rank, lines, title, styling }) {
  const {
    barWidth,
    titleHeight,
    padding,
    buffer,
    lineGutter,
    valueSpace,
    maxValue,
  } = styling;

  const groupSpace = groupSpaceArray[rank];

  const generateToScale = (value) => {
    return ((valueSpace - buffer) / totalGroupSpace) * value;
  };

  const previousSpace = groupSpaceArray.reduce(
    (result, val, index) => {
      if (index < rank) {
        return result + generateToScale(val);
      }

      return result;
    },
    0,
  );

  const usedSpace = lines.length * (barWidth + lineGutter);
  const startPoint = padding[3] + buffer + previousSpace;
  const centeringSpace = ((generateToScale(groupSpace) + barWidth) - usedSpace) / 2;


  return (
    <g className="Graph-group">

      {/* <rect
        x={padding[3] + buffer + previousSpace}
        y={padding[0]}
        width={generateToScale(groupSpace)}
        height={totalGroupSpace}
        fill="none"
        stroke="red"
        opacity="1"
      /> */}

      {
        lines.map((amount, index) => {
          const relativeAmount = (amount / maxValue) * totalGroupSpace;
          const displayAmount = relativeAmount < barWidth + 1 ? barWidth + 1 : relativeAmount;

          return (
            <line
              stroke-linecap="round"
              stroke-width={barWidth}
              x1={startPoint + centeringSpace + (index * (barWidth + lineGutter))}
              y1={(padding[0] + totalGroupSpace) - (barWidth / 2)}
              x2={startPoint + centeringSpace + (index * (barWidth + lineGutter))}
              y2={(padding[0] + totalGroupSpace + barWidth) - (barWidth / 2) - displayAmount}
              className="Graph-line"
            />
          );
        })
      }
    </g>
  );
}