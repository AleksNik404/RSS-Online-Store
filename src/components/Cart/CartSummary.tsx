import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { IPromoCode, openModalBuy } from '../../store/Slices/cartSlice';
import { useAppDispatch } from './../../hooks';
import AppliedPromoCodes from './AppliedPromoCodes';
import NewPriceCalc from './NewPriceCalc';

const CartSummary = () => {
  const { total_amount, total_price, promocodes } = useAppSelector((state) => state.cart);
  const dispath = useAppDispatch();

  const [promoField, setPromoField] = useState('');
  const [activatedPromocodes, setActivatedPromocodes] = useState<IPromoCode[]>([]);
  const [totalDiscount, setTotalDiscount] = useState(0);

  const foundPromo = promocodes.find((promocodeInState) => promocodeInState.initials === promoField);

  // Добавление и удаление объекта промокодов из массива активированных
  const addPromoHandler = () => {
    if (foundPromo && activatedPromocodes.every((activePromo) => activePromo.initials !== promoField))
      setActivatedPromocodes((cur) => [...cur, foundPromo]);
  };
  const deletePromoHandler = (promoCode: IPromoCode) => {
    setActivatedPromocodes((cur) => cur.filter((activePromo) => activePromo.initials !== promoCode.initials));
  };

  // localeStorage Promocodes
  useEffect(() => {
    const promoLocal = localStorage.getItem('Griz-promo');
    promoLocal && setActivatedPromocodes(JSON.parse(promoLocal));
  }, []);

  // При Изминение актив. промокодов, пересчитываем сумму скидки. И сохранение в localStorage
  useEffect(() => {
    const discounts = activatedPromocodes.reduce((discounts, promo) => discounts + promo.discount, 0);
    setTotalDiscount(discounts);

    localStorage.setItem('Griz-promo', JSON.stringify(activatedPromocodes));
  }, [activatedPromocodes]);

  const openModalBuyHandler = () => {
    dispath(openModalBuy());
  };

  return (
    <Container>
      <h2>Summary</h2>
      <Paragraph>Products: {total_amount}</Paragraph>
      <Paragraph className={activatedPromocodes.length ? 'strikethrough' : ''}>Total: {total_price} $</Paragraph>

      {activatedPromocodes.length > 0 && (
        <>
          <NewPriceCalc price={total_price} discount={totalDiscount} />
          <AppliedPromoCodes activatedPromocodes={activatedPromocodes} deletePromoHandler={deletePromoHandler} />
        </>
      )}

      <InputSearch type="search" placeholder="promocode" onChange={(event) => setPromoField(event.target.value)} />

      {foundPromo && (
        <div>
          {foundPromo.title} - {foundPromo.discount}% <button onClick={addPromoHandler}>add</button>
        </div>
      )}

      <p>Promo for test: `RS`, `EPM`, `Griz`</p>
      <ButtonBuy onClick={openModalBuyHandler}>Buy Now</ButtonBuy>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 1050px) {
    grid-row: 1;
  }
`;

const Paragraph = styled.p`
  justify-self: center;
  text-align: center;
`;

const ButtonBuy = styled.button`
  font-size: 18;
  width: 200px;
  padding: 10px 20px;
  border-radius: 2px;

  cursor: pointer;
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
