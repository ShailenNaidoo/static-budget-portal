import { h } from 'preact';
import PseudoSelect from './../../../universal/PseudoSelect/index.jsx';
import Icon from './../../Icon/index.jsx';
import Modal from './../../../universal/Modal/index.jsx';


export default function Markup(props) {
  const {
    selected,
    open,
    items,
    changeAction,
    name,
    clickAction,
    canvasAction,
    closeModal,
    close,
  } = props;

  return (
    <div className="Graph-download">
      <Modal title="Share this link:" closeAction={closeModal} open={modal}>
        <a className="u-wordBreak u-wordBreak--breakAll" href={window.location.href}>
          {window.location.href}
        </a>
      </Modal>
      <canvas ref={node => canvasAction(node)} style={{ display: 'none' }} />
      <span className="Graph-downloadTitle">Save or share</span>
      <div className="Graph-downloadSelect">
        <PseudoSelect
          name={`${name}-download-image`}
          open={open}
          changeAction={value => changeAction(value)}
          {...{ items, selected }}
        />
      </div>
      <div className="Graph-downloadButton">
        <button onClick={clickAction} className="Button has-icon">
          <Icon type="download" size="small" />
        </button>
      </div>
    </div>
  );
}
