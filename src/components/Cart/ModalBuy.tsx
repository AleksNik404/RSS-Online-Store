import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { clearCart, closeModalBuy } from '../../store/Slices/cartSlice';
import { useAppDispatch } from './../../hooks';

const ModalBuy: React.FC = () => {
  const popup = React.useRef(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isSubmit, setIsSubmit] = useState(false);
  const [secToRedirect, setSecToRedirect] = useState(3);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [card, setCard] = useState('');

  const [exp, setExp] = useState('');
  const [ccv, setCcv] = useState('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setIsSubmit(true);
  };

  useEffect(() => {
    if (!isSubmit) return;

    // dispatch(clearCart());

    const timerId = setInterval(() => {
      setSecToRedirect((cur) => cur - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timerId);
      navigate('/');
    }, 5000);
  }, [isSubmit]);

  const nameFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    const fieldWords = event.target.value.split(' ');
    const isValidLength = fieldWords.every((word) => word.length > 2);
    const isValidCountWords = fieldWords.length > 1;

    if (!isValidLength) event.target.setCustomValidity('Длина слов должна быть минимум 2 символа');
    else if (!isValidCountWords) event.target.setCustomValidity('Поле должно соддержать минимум 2 слова');
    else event.target.setCustomValidity('');
  };

  const phoneFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setPhone(value);
    if (value[0] !== '+') event.target.setCustomValidity(`Первый символ должен быть '+'`);
    else if (!value.slice(1).match(/^\d+$/)) event.target.setCustomValidity(`После знака '+' доупскаются только числа`);
    else event.target.setCustomValidity(``);
  };

  const addressFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);

    const fieldWords = event.target.value.split(' ');
    const isValidLength = fieldWords.every((word) => word.length > 4);
    const isValidCountWords = fieldWords.length > 2;

    if (!isValidLength) event.target.setCustomValidity('Длина слов должна быть минимум 5 символов');
    else if (!isValidCountWords) event.target.setCustomValidity('Поле должно соддержать минимум 3 слова');
    else event.target.setCustomValidity('');
  };

  const emailFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const cardFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = [...event.target.value];

    const newValue = value.filter((char) => char !== ' ');

    if (newValue.length !== 16) event.target.setCustomValidity('Номер карты должен содержать 16 цифр');
    else event.target.setCustomValidity('');

    if (newValue.length > 4) newValue.splice(4, 0, ' ');
    if (newValue.length > 9) newValue.splice(9, 0, ' ');
    if (newValue.length > 14) newValue.splice(14, 0, ' ');

    setCard(newValue.join('').slice(0, 19));
  };

  const cardFieldHandlerKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const validKey = ['Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete'];

    if (!validKey.includes(event.key) && !isFinite(+event.key)) {
      event.preventDefault();
    }
  };
  const expCardFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = [...event.target.value];
    const newValue = value.filter((char) => char !== '/');

    const month = Number(event.target.value.slice(0, 2));
    const day = Number(event.target.value.slice(3, 5));

    const isNotValidMonth = month > 12 || month < 1;
    const isNotValidDay = day > 31 || day < 1;

    if (isNotValidMonth || isNotValidDay) event.target.setCustomValidity('Некорректная дата');
    else if (newValue.length !== 4) event.target.setCustomValidity('Поле exp даты должно содержать 4 цифры');
    else event.target.setCustomValidity('');

    if (newValue.length > 2) newValue.splice(2, 0, '/');

    setExp(newValue.join('').slice(0, 5));
  };

  const ccvCardFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length !== 3) event.target.setCustomValidity('CCV код должен содержат 3 цифры');
    else event.target.setCustomValidity('');

    setCcv(value);
  };

  if (isSubmit)
    return (
      <Container>
        <div>Thanks for your order. Redirect to the store after {secToRedirect} sec</div>
      </Container>
    );

  return (
    <Container ref={popup} onMouseDown={(e) => e.target === popup.current && dispatch(closeModalBuy())}>
      <Form onSubmit={submitHandler}>
        <Heading>Personal details</Heading>
        <div>
          <h3>Personal details</h3>
          <Input type="text" value={name} onChange={nameFieldHandler} placeholder="Full name" required />

          <Input type="phone" value={phone} onChange={phoneFieldHandler} placeholder="phone" required minLength={9} />
          <Input type="email" value={email} onChange={emailFieldHandler} placeholder="email" required />
        </div>

        <div>
          <h3>Shipping address</h3>
          <Input type="text" value={address} onChange={addressFieldHandler} placeholder="Shipping address" required />
        </div>
        <div>
          <h3>Payment card</h3>
          {/* prettier-ignore */}
          <Input type="text" value={card} minLength={19} maxLength={19} onChange={cardFieldHandler} onKeyDown={cardFieldHandlerKey} placeholder="card" required />
          {/* prettier-ignore */}
          <Input type="text" className='exp' value={exp} minLength={5} maxLength={5} onChange={expCardFieldHandler} onKeyDown={cardFieldHandlerKey} placeholder="exp. 12/31" required />
          {/* prettier-ignore */}
          <Input type="text" className='ccv' value={ccv} minLength={3} maxLength={3} onChange={ccvCardFieldHandler} onKeyDown={cardFieldHandlerKey} placeholder="ccv" required />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  inset: 0;

  background-color: rgba(45, 45, 45, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(1px);
`;

const Form = styled.form`
  padding: 20px 40px;
  margin: 10px 20px;

  background-color: #333;
  border-radius: 5px;
  /* min-width: 340px; */
  min-height: 60%;

  display: flex;
  flex-direction: column;
  flex: 0 1 500px;
  gap: 10px;

  h3 {
    color: #ddd;
  }

  .exp {
    max-width: 45%;
  }

  .ccv {
    max-width: 45%;
  }
`;

const Heading = styled.h1`
  font-size: 24px;
  text-align: center;

  color: #f3f6f9;
`;

const Input = styled.input`
  padding: 8px 15px;
`;

export default ModalBuy;
