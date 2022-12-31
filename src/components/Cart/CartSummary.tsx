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
    if (promo && !activatedPromo.includes(promo)) setActivatedPromo((cur) => [...cur, promo]);
  };
  const deletePromoHandler = (promoCode: IPromoCode) => {
    setActivatedPromo((cur) => cur.filter((promo) => promo.initials !== promoCode.initials));
  };

  // При Изминение актив. промокодов, пересчитываем сумму скидки.
  useEffect(() => {
    const discounts = activatedPromo.reduce((discounts, promo) => discounts + promo.discount, 0);
    setTotalDiscount(discounts);
  }, [activatedPromo]);

  const openModalBuyHandler = () => {
    dispath(openModalBuy());
    console.log('aaa');
  };

  return (
    <Container>
      {modelBuyIsOpen && <ModalBuy />}
      <p>Summary</p>
      <p>Products: {total_amount}</p>
      <p className={activatedPromo.length ? 'strikethrough' : ''}>Total: {total_price}</p>

      {activatedPromo.length > 0 && <p>Total: {total_price - (total_price / 100) * totalDiscount}</p>}
      {activatedPromo.length > 0 && (
        <div>
          <div>Applied codes</div>
          {activatedPromo.map((promo) => {
            return (
              <div key={promo.initials}>
                <p>
                  {promo.title} - {promo.discount} - <button onClick={() => deletePromoHandler(promo)}>Drop</button>
                </p>
              </div>
            );
          })}
        </div>
      )}

      <input type="search" placeholder="promocode" onChange={(event) => setPromoField(event.target.value)} />
      {promo && (
        <div>
          {promo.title} - {promo.discount}% <button onClick={addPromoHandler}>add</button>
        </div>
      )}
      <p>Promo for test: `RS`, `EPM`</p>

      <button onClick={openModalBuyHandler}>Buy Now</button>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default CartSummary;
