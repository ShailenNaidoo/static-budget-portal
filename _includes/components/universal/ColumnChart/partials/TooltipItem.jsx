import { h } from 'preact';
import trimValues from './../../../../utilities/js/helpers/trimValues.js';


export default function TooltipItem({ styling, xTriggerPosition, xPosition, yPosition, amount, totalGroupSpace }) {

  const { barWidth, popUpOffset, buffer, valueSpace, lineGutter, padding, popupWidth, popupHeight, popupFontSize, units, popupCentre } = styling;


  return (
    <g className="Graph-tooltip">

      {/* <rect
        x={xPosition}
        y={yPosition - ((popupHeight) / 2)}
        width={popupWidth + popUpOffset}
        height={popupHeight}
        fill="blue"
        opacity="0.5"
      />

      <rect
        x={padding[3] + buffer}
        y={yPosition - ((barWidth + lineGutter) / 2)}
        width={(valueSpace + padding[0]) - buffer}
        height={barWidth + lineGutter}
        fill="none"
        stroke="blue"
        opacity="0.5"
      /> */}

      <rect
        x={padding[3] + buffer}
        y={yPosition - ((barWidth + lineGutter) / 2)}
        width={(valueSpace + padding[0]) - buffer}
        height={barWidth + lineGutter}
        opacity="0"
      />

      <polygon
        className="Graph-triangle"
        points={`
          ${xPosition + popUpOffset},
          ${yPosition}

          ${xPosition + 6 + popUpOffset},
          ${yPosition - 6}

          ${xPosition + barWidth + popUpOffset},
          ${yPosition - 6}

          ${xPosition + barWidth + popUpOffset},
          ${yPosition + 6}
          
          ${xPosition + 6 + popUpOffset},
          ${yPosition + 6}
        `}
        fill="#79b43c"
      />

      <rect
        rx="10"
        ry="10"
        className="Graph-tooltipBase"
        x={xPosition + 6 + popUpOffset}
        y={yPosition - ((popupHeight) / 2)}
        width={popupWidth}
        height={popupHeight}
        fill="#79b43c"
      />

      <text
        x={xPosition + (popupWidth / 2) + popUpOffset + (barWidth / 2)}
        y={yPosition + popupCentre}
        font-size={popupFontSize}
        className="Graph-tooltipText"
        font-family="sans-serif"
        text-anchor="middle"
        fill="white"
      >
        {trimValues(amount)}
      </text>
    </g>
  );
}
