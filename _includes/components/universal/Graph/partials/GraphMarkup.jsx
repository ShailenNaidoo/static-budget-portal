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
import PseudoSelect from './../../../universal/PseudoSelect/index.jsx';


const hardCoded = [
  {
    value: '1',
    title: 'Small',
  },
  {
    value: '2',
    title: 'Medium',
  },
  {
    value: '3',
    title: 'Large',
  },
];


export default function GraphMarkup({ items, styling, legend, year, addImage, downloadImage, open, setOpenState, selected, screenshotProps }) {
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


  const barChart = (
    <svg
      version="1.1"
      className="Graph-svg Graph-svg--responsive"
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
  );

  const screenshot = (
    <svg
      version="1.1"
      className="Graph-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 800 ${height}`}
      width="800"
      {...{ height }}
      ref={node => addImage(node)}
      style={{ position: 'fixed', top: '600px', left: 0 }}
    >
      <HorisontalBreakpointsList styling={screenshotProps} {...{ totalGroupSpace }} />
      <HorisontalGuidesList styling={screenshotProps} {...{ totalGroupSpace }} />
      <Grid styling={screenshotProps} {...{ totalGroupSpace }} />
      <HorisontalLineGroupList styling={screenshotProps} {...{ totalGroupSpace, groupSpaceArray, items }} />
      <HorisontalTooltipsList styling={screenshotProps} {...{ totalGroupSpace, groupSpaceArray, items }} />
    </svg>
  );

  const download = (
    <div className="Graph-download">
      <span className="Graph-downloadTitle">Download Chart as PNG</span>
      <div className="Graph-downloadSelect">
        <PseudoSelect
          name="download-image"
          items={hardCoded}
          property={selected}
          open={open}
          changeAction={value => setOpenState(value)}
        />
      </div>
      <div className="Graph-downloadButton">
        <button className="Button" onClick={downloadImage}>Download</button>
      </div>
    </div>
  );


  return (
    <div>
      {barChart}
      {download}
      {screenshot}
    </div>
  );
}
