import { h, render, Component } from 'preact';
import DebounceFunction from './../../../../utilities/js/helpers/DebounceFunction.js';
import ColumnChart from './../index.jsx';
import BarChart from './../../../universal/BarChart/index.jsx';


class ColumnChartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 200,
      mobile: true,
    };

    this.updateWidth = () => {
      console.log(this.state.width);

      if (this.state.mobile && window.innerWidth >= 600) {
        this.setState({ mobile: false });
      } else if (!this.state.mobile && window.innerWidth < 600) {
        this.setState({ mobile: true });
      }

      if (
        this.node &&
        this.node.offsetWidth > 200 &&
        this.node.offsetWidth !== this.state.width
      ) {
        this.setState({ width: this.node.offsetWidth });
      }
    };

    const viewportDebounce = new DebounceFunction(300);
    const updateViewport = () => viewportDebounce.update(this.updateWidth);

    window.addEventListener(
      'resize',
      updateViewport,
    );

    this.node = null;
    this.parentAction = this.parentAction.bind(this);
  }

  parentAction(node) {
    this.node = node;
    this.updateWidth();
  }


  render() {
    const props = {
      items: { 'Test 1': [10, 50, 20], 'Test 2': [30, 10, 40], 'Test 3': [20, 20, 40] },
      width: this.state.width,
      parentAction: this.parentAction,
      guides: !this.state.mobile,
      hover: !this.state.mobile,
    };

    if (this.state.width > 500) {
      return <ColumnChart {...props} />;
    }

    return <BarChart {...props} />;
  }
}


function scripts() {
  const node = document.getElementById('column-responsive-chart-example-16-03');

  render(
    <ColumnChartContainer />,
    node,
  );
}


export default scripts();