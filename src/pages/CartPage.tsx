import styled from '@emotion/styled';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';
import { useAppSelector } from '../hooks';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import ModalBuy from '../components/Cart/ModalBuy';
import { accordionClasses, TextField } from '@mui/material';
import { openModalBuy } from '../store/Slices/cartSlice';
import { useAppDispatch } from './../hooks';

const CartPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { cart } = useAppSelector((state) => state.cart);
  const { modelBuyIsOpen } = useAppSelector((state) => state.cart);

  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [limitOnPage, setLimitOnPage] = useState(Number(searchParams.get('limit')) || 3);
  const [countPages, setCountPages] = useState(1);

  const start = (page - 1) * limitOnPage;
  const pageItems = cart.slice(start, start + limitOnPage);

  // Установка query параметров
  useEffect(() => {
    searchParams.set('page', String(page));
    searchParams.set('limit', String(limitOnPage));
    searchParams.sort();

    setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limitOnPage]);

  // Подсчет возможного количества страниц
  useEffect(() => {
    setCountPages(Math.ceil(cart.length / limitOnPage));
  }, [limitOnPage, cart]);

  // Если последняя страница пустая от выборки, мы переходим на последнюю возможную страницу с продуктами.
  useEffect(() => {
    if (!pageItems.length) {
      setPage(Math.ceil(cart.length / limitOnPage));
    }
  }, [cart.length, limitOnPage, pageItems]);

  const limitHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) < 1) return;
    if (Number(event.target.value) > cart.length) return;

    setLimitOnPage(Number(event.target.value));
  };

  function increasePage() {
    if (page < countPages) setPage((cur) => cur + 1);
  }
  function decreasePage() {
    if (page > 1) setPage((cur) => cur - 1);
  }

  if (!cart.length)
    return (
      <Container className="container" style={{ textAlign: 'center' }}>
        Cart is Empty
        {/* Уже не помню зачем эта строчка, но выглядит не нужной */}
        {/* {modelBuyIsOpen && <ModalBuy />} */}
      </Container>
    );

  return (
    <Container className="container">
      {modelBuyIsOpen && <ModalBuy />}
      <CartContent>
        <CartList>
          <Heading>
            <ParagraphDisplay>Products In Cart</ParagraphDisplay>
            <div className="pages">
              <ParagraphDisplay>LIMIT:</ParagraphDisplay>

              <Input type="number" value={limitOnPage} onChange={limitHandler} />
              <ParagraphDisplay>PAGE:</ParagraphDisplay>
              <Controlls>
                <Button onClick={decreasePage}>&lt;</Button>
                <span>{page}</span>
                <Button onClick={increasePage}>&gt;</Button>
              </Controlls>
            </div>
          </Heading>
          <ProductList>
            {cart.map((item, index) => {
              // Переписал код, чтоб index был учитывая все элементы ради ТЗ. До этого итерация была урезаного массива.
              if (index < start || index > start + limitOnPage - 1) return false;
              // замучал TypeScript
              return <CartItem key={item.id} item={item} index={index} />;
            })}
          </ProductList>
        </CartList>
        <CartSummary />
      </CartContent>
    </Container>
  );
};

const Container = styled.div``;

const CartContent = styled.div`
  padding: 0 40px;
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 30px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
`;
const Input = styled.input`
  background-color: transparent;
  padding: 7px 15px;

  border: 1px solid var(--main-bg-color-5);
  border-radius: 5px;

  color: inherit;
  max-width: 100px;

  outline: none;

  &:active {
    border: 1px solid var(--primary-btn-color-4);
  }
  &:focus {
    border: 1px solid var(--primary-btn-color-4);
  }
`;

const Button = styled.button`
  font-size: 22px;
  width: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 5px;
  border: none;

  background-color: var(--primary-btn-color-3);
  color: #f5f5f5;

  &:hover {
    background-color: var(--primary-btn-color-2);
  }

  &:active {
    background-color: var(--primary-btn-color-1);
  }
`;

const CartList = styled.div`
  /* background-color: bisque; */
`;
const Summary = styled.div`
  /* background-color: darkgray; */
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 10px;

  @media (max-width: 600px) {
    justify-content: right;
  }

  & > .pages {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;

const ProductList = styled.div`
  display: grid;
  grid-auto-rows: 160px;
`;

const Controlls = styled.div`
  display: grid;
  grid-template-columns: 50px 25px 50px;

  align-items: center;
  justify-items: center;
  gap: 2px;
`;

const ParagraphDisplay = styled.p`
  @media (max-width: 600px) {
    display: none;
  }
`;

export default CartPage;
