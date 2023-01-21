import styled from '@emotion/styled';
import React from 'react';

const DetailsBoxRow: React.FC<{ text: string; value: string | number }> = ({ text, value }) => {
  return (
    <DetailsBox__row>
      <p>{text}</p>
      <p>{value}</p>
    </DetailsBox__row>
  );
};

const DetailsBox__row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default DetailsBoxRow;
