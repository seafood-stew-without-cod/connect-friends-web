import React from 'react';

const formatJob = (name) => {
  switch (name) {
    case 'BACKEND':
      return '백엔드 개발자';
    case 'FRONTEND':
      return '프론트엔드 개발자';
    case 'DESIGN':
      return '디자이너';
    case 'PLANNING':
      return '기획자';
    default:
      return '무직';
  }
};
const SubTitle = ({ children }) => {
  return <p>{`#${formatJob(children)}`}</p>;
};

export default SubTitle;
