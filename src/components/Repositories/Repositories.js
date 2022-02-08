import React from 'react';
import Repocards from '../Repocards/Repocards';

const Repositories = ({ data }) => {
  return (
    <div>
      <Repocards data={data} />
    </div>
  );
};

export default Repositories;
