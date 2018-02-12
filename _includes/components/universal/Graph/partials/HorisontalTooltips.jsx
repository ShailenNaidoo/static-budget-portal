import { h } from 'preact';
import HorisontalTooltip from './HorisontalTooltip.jsx';


export default function HorisontalTooltips({ totalGroupSpace, groupSpaceArray, rank, lines, title, styling }) {
  const {
    barWidth,
    titleHeight,
    padding,
    buffer,
    valueSpace,
    lineGutter,
    maxValue,
    groupMargin,
    fontSize,
  } = styling;

  const groupSpace = groupSpaceArray[rank];

  const previousSpace = groupSpaceArray.reduce(
    (result, val, index) => {
      if (index < rank) {
        return result + val;
      }

      return result;
    },
    0,
  );

  const startPoint = padding[0] + previousSpace;

  return (
    <g className="Graph-group">
      {/* <rect
        x={padding[3] + buffer}
        y={padding[0] + previousSpace}
        width={valueSpace - buffer}
        height={groupSpace}
        fill="none"
        stroke="red"
        opacity="1"
      /> */}

      {
        lines.map((amount, index) => {
          const relativeAmount = ((amount / maxValue) * valueSpace) - barWidth;
          const displayAmount = relativeAmount < (barWidth * 2) ? (barWidth * 2) : relativeAmount;

          return (
            <HorisontalTooltip
              {...{ styling }}
              xPosition={(padding[3] + buffer + displayAmount) - (barWidth / 2)}
              yPosition={(groupMargin / 2) + startPoint + (index * (barWidth + lineGutter)) + (barWidth / 2) + titleHeight}
              {...{ amount, totalGroupSpace }}
            />
          );
        })
      }

    </g>
  );
}


/*
  stroke-linecap="round"
  stroke-width={barWidth}
  y1={(groupMargin / 2) + startPoint + (index * (barWidth + lineGutter)) + (barWidth / 2) + titleHeight}
  x1={padding[3] + buffer + (barWidth / 2)}
  y2={(groupMargin / 2) + startPoint + (index * (barWidth + lineGutter)) + (barWidth / 2) + titleHeight}
  x2={(padding[3] + buffer + displayAmount) - barWidth}
  className="Graph-line"
*/