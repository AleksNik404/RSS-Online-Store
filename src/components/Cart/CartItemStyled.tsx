import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20px 150px 1fr max-content;
  gap: 10px;
  align-items: center;

  padding: 10px 10px;
  border-bottom: 1px solid #444;

  @media (max-width: 630px) {
    grid-template-columns: 20px 150px 1fr;
  }

  & > span {
    text-align: center;
  }
`;

export const ButtonLeft = styled.button`
  width: 40px;
`;
export const ButtonRight = styled.button`
  width: 40px;
`;

export const CartImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  height: 100%;
  width: 100%;

  cursor: pointer;
`;

export const CartImage = styled.img`
  max-width: 100%;
  max-height: 100%;

  object-fit: cover;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media (max-width: 630px) {
    display: none;
  }

  & > .name {
    font-weight: 700;
  }
  & > .type {
    display: flex;
    gap: 5px;
  }
`;

export const AmountBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  user-select: none;

  @media (max-width: 630px) {
    justify-self: end;
  }
`;

export const Controls = styled.div`
  display: grid;
  grid-template-columns: 50px 25px 50px;

  align-items: center;
  justify-items: center;

  gap: 2px;

  & > .btn {
    font-size: 22px;

    cursor: pointer;
    transition: background-color 0.2s;
    border-radius: 5px;
    border: none;
  }

  & > .btn:hover {
    background-color: var(--primary-btn-color-3);
  }

  & > .btn:active {
    background-color: var(--primary-btn-color-1);
  }
`;
