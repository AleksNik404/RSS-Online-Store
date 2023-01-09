import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { IPromoCode, openModalBuy } from '../../store/Slices/cartSlice';
import ModalBuy from './ModalBuy';
import { useAppDispatch } from './../../hooks';

const CartSummary = () => {
  const { total_amount, total_price, promocodes, modelBuyIsOpen } = useAppSelector((state) => state.cart);
  const dispath = useAppDispatch();

  const [promoField, setPromoField] = useState('');
  const [activatedPromo, setActivatedPromo] = useState<IPromoCode[]>([]);
  const [totalDiscount, setTotalDiscount] = useState(0);

  const promo = promocodes.find((promo) => promo.initials === promoField);

  // Добавление и удаление объекта промокодов из массива активированных
  const addPromoHandler = () => {
    if (promo && activatedPromo.every((promo) => promo.initials !== promoField))
      setActivatedPromo((cur) => [...cur, promo]);
  };
  const deletePromoHandler = (promoCode: IPromoCode) => {
    setActivatedPromo((cur) => cur.filter((promo) => promo.initials !== promoCode.initials));
  };

  // При Изминение актив. промокодов, пересчитываем сумму скидки.
  useEffect(() => {
    const discounts = activatedPromo.reduce((discounts, promo) => discounts + promo.discount, 0);
    setTotalDiscount(discounts);
  }, [activatedPromo]);

  // localeStorage Promocodes
  useEffect(() => {
    const promoLocal = localStorage.getItem('Griz-promo');
    promoLocal && setActivatedPromo(JSON.parse(promoLocal));
  }, []);

  useEffect(() => {
    localStorage.setItem('Griz-promo', JSON.stringify(activatedPromo));
  }, [activatedPromo]);

  const openModalBuyHandler = () => {
    dispath(openModalBuy());
  };

  return (
    <Container>
      {/* {modelBuyIsOpen && <ModalBuy />} */}
      <h2>Summary</h2>
      <Paragraph>Products: {total_amount}</Paragraph>
      <Paragraph className={activatedPromo.length ? 'strikethrough' : ''}>Total: {total_price} $</Paragraph>

      {activatedPromo.length > 0 && <p>Total: {(total_price - (total_price / 100) * totalDiscount).toFixed(2)} $</p>}
      {activatedPromo.length > 0 && (
        <ActivePromoBox>
          <Paragraph>Applied codes</Paragraph>
          {activatedPromo.map((promo) => {
            return (
              <ActivePromo key={promo.initials}>
                <p>{promo.title}</p>
                <p>{promo.discount}%</p>
                <Button onClick={() => deletePromoHandler(promo)}>Drop</Button>
              </ActivePromo>
            );
          })}
        </ActivePromoBox>
      )}

      <InputSearch type="search" placeholder="promocode" onChange={(event) => setPromoField(event.target.value)} />
      {promo && (
        <div>
          {promo.title} - {promo.discount}% <button onClick={addPromoHandler}>add</button>
        </div>
      )}
      <p>Promo for test: `RS`, `EPM`, `Griz`</p>

      <ButtonBuy onClick={openModalBuyHandler}>Buy Now</ButtonBuy>
    </Container>
  );
};

const Container = styled.div`
  /* text-align: center; */

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 1050px) {
    grid-row: 1;
  }
`;

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
  /* width: max-content; */
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

const ButtonBuy = styled.button`
  cursor: pointer;

  font-size: 18;
  padding: 10px 20px;
  width: 200px;

  border-radius: 2px;

  transition: all 0.3s;

  background-color: var(--primary-btn-color-1);
  border: solid 1px transparent;
  color: #f5f5f5;

  &:hover {
    background-color: var(--primary-btn-color-2);
    border-color: var(--primary-btn-color-2);
  }

  &:active {
    background-color: var(--primary-btn-color-3);
    border-color: var(--primary-btn-color-3);
  }
`;

const InputSearch = styled.input`
  background-color: transparent;
  padding: 7px 15px;

  border: 1px solid var(--main-bg-color-5);
  border-radius: 5px;

  color: inherit;
  max-width: 200px;

  outline: none;

  &::-webkit-search-cancel-button {
    cursor: pointer;
  }

  &:active {
    border: 1px solid var(--primary-btn-color-4);
  }
  &:focus {
    border: 1px solid var(--primary-btn-color-4);
  }
`;

export default CartSummary;
