import styled from '@emotion/styled';
import React from 'react';
import { IPromoCode } from '../../store/Slices/cartSlice';

interface IAppliedPromo {
  activatedPromocodes: IPromoCode[];
  deletePromoHandler: (promoCode: IPromoCode) => void;
}

const AppliedPromoCodes: React.FC<IAppliedPromo> = ({ activatedPromocodes, deletePromoHandler }) => {
  return (
    <ActivePromoBox>
      <Paragraph>Applied codes</Paragraph>
      {activatedPromocodes.map((promocode) => {
        return (
          <ActivePromo key={promocode.initials}>
            <p>{promocode.title}</p>
            <p>{promocode.discount}%</p>
            <Button onClick={() => deletePromoHandler(promocode)}>Drop</Button>
          </ActivePromo>
        );
      })}
    </ActivePromoBox>
  );
};

const ActivePromoBox = styled.div`
  border: 1px solid var(--main-bg-color-5);
  padding: 10px 15px;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ActivePromo = styled.div`
  display: grid;
  gap: 10px;
  justify-items: start;
  align-items: center;

  width: 300px;

  grid-template-columns: 200px max-content max-content;
`;

const Paragraph = styled.p`
  justify-self: center;
  text-align: center;
`;

const Button = styled.button`
  cursor: pointer;
  transition: all 0.2s;

  background-color: transparent;
  color: var(--main-bg-color-8);
  border: 1px solid var(--main-bg-color-8);

  &:hover {
    border-color: var(--secondary-btn-color-2);
    color: var(--secondary-btn-color-2);
  }

  &:active {
    border-color: var(--secondary-btn-color-1);
    color: var(--secondary-btn-color-1);
  }
`;

export default AppliedPromoCodes;
