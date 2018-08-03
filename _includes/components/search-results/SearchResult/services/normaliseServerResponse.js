import { find } from 'lodash';
import extractSnippet from './extractSnippet.js';


const createLinkText = (sphere) => {
  if (sphere === 'national') {
    return 'Estimates of National Expenditure (ENE)';
  }

  return 'Estimates of Provincial Revenue and Expenditure (EPRE)';
};


const normaliseDepartmentItem = (item) => {
  const { extras, province, financial_year: financialYear, organization = {}, title: rawTitle, name } = item;

  const getExtrasValue = (key) => {
    const obj = find(extras, extra => extra.key === key) || { value: null };
    return obj.value;
  };

  const isOfficial = organization.name === 'national-treasury';

  const year = financialYear[0];
  const region = getExtrasValue('geographic_region_slug');
  const regionString = region === 'south-africa' ? 'National' : province[0];
  const regionSlug = region === 'south-africa' ? 'national' : `provincial/${region}`;

  const nameSlug = getExtrasValue('department_name_slug');
  const nameString = getExtrasValue('department_name');
  const { text: snippet, url: sourceUrl } = extractSnippet(item) || {};

  const buildDeptName = () => `${regionString} Department: ${nameString}`;
  const title = isOfficial ? buildDeptName() : rawTitle;

  const buildDeptUrl = () => `https://vulekamali.gov.za/${year}/${regionSlug}/departments/${nameSlug}`;
  const url = isOfficial ? buildDeptUrl() : `/datasets/contributed/${name}`;
  const sourceText = isOfficial ? createLinkText(regionSlug) : null;

  return {
    title,
    url,
    snippet,
    contributor: organization.title,
    source: {
      text: sourceText,
      url: sourceUrl,
    },
  };
};


export default function normaliseServerResponse(reponseObj) {
  const { count, results } = reponseObj.result;

  return {
    count,
    items: results.map(normaliseDepartmentItem),
  };
}