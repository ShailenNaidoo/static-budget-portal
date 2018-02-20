import { h } from 'preact';
import trimValues from './trimValues.js';


export default function Item({ year, title, value, shortcuts }) {
  const Tag = shortcuts ? 'a' : 'div';
  const link = shortcuts ? `/${year}/search-result?search_type=full-search&search=${encodeURI(title.replace(/[^\w|\s]/g, ' '))}` : null;

  return (
    <div className="Revenue-itemWrap">
      <Tag href={link} className={`Revenue-item${shortcuts ? ' Revenue-item--link' : ''}`}>
        <div className="Revenue-title">{title}</div>
        { value !== null ? <div className="Revenue-value">R{trimValues(value)}</div> : null }
      </Tag>
    </div>
  );
}
