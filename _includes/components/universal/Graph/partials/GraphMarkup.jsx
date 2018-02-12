import { h } from 'preact';
import buildGroupSpaceArray from './buildGroupSpaceArray.js';
import VerticalBreakpointsList from './VerticalBreakpointsList.jsx';
import HorisontalBreakpointsList from './HorisontalBreakpointsList.jsx';
import HorisontalLabelList from './HorisontalLabelList.jsx';
import Grid from './Grid.jsx';
import VerticalLineGroupList from './VerticalLineGroupList.jsx';
import VerticalGuidesList from './VerticalGuidesList.jsx';
import VerticalTooltipsList from './VerticalTooltipsList.jsx';
import HorisontalGuidesList from './HorisontalGuidesList.jsx';
import HorisontalLineGroupList from './HorisontalLineGroupList.jsx';
import VerticalLabelList from './VerticalLabelList.jsx';
import HorisontalTooltipsList from './HorisontalTooltipsList.jsx';


export default function GraphMarkup({ items, styling, legend, year }) {
  const { valueSpace, padding } = styling;
  const groupSpaceArray = buildGroupSpaceArray(items, styling);
  const totalGroupSpace = groupSpaceArray.reduce((result, val) => result + val, 0);
  const height = padding[0] + totalGroupSpace + padding[2];
  const width = padding[3] + valueSpace + padding[1];

  // const columnChart = (
  //   <g>
  //     <VerticalBreakpointsList {...{ styling, totalGroupSpace }} />
  //     <VerticalGuidesList {...{ styling, totalGroupSpace }} />

  //     <HorisontalLabelList {...{ totalGroupSpace, groupSpaceArray, items, styling }} />
  //     <Grid {...{ styling, totalGroupSpace }} />
  //     <VerticalLineGroupList {...{ totalGroupSpace, groupSpaceArray, items, styling }} />
  //     <VerticalTooltipsList {...{ totalGroupSpace, groupSpaceArray, items, styling }} />
  //   </g>
  // );

  return (
    <div>
      <div className="Graph-title">Funded programmes for {year}</div>
      <div className="Graph-description">A department`s programmes are the activities that it performs during the financial year. Different programs have different levels of funding, depending on their requirements and available finances.</div>
      <svg
        version="1.1"
        className="Graph-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
        {...{ width, height }}
      >
        <HorisontalBreakpointsList {...{ styling, totalGroupSpace }} />
        <HorisontalGuidesList {...{ styling, totalGroupSpace }} />
        <Grid {...{ styling, totalGroupSpace }} />
        <HorisontalLineGroupList {...{ totalGroupSpace, groupSpaceArray, items, styling }} />
        <HorisontalTooltipsList {...{ totalGroupSpace, groupSpaceArray, items, styling }} />
      </svg>
    </div>
  );
}
