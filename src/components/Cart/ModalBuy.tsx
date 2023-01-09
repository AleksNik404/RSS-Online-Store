import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { BsCreditCardFill } from 'react-icons/bs';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcJcb, FaCcDiscover } from 'react-icons/Fa';
import { SiAmericanexpress } from 'react-icons/si';
import { Navigate, useNavigate } from 'react-router-dom';
import { clearCart, closeModalBuy } from '../../store/Slices/cartSlice';
import { useAppDispatch } from './../../hooks';

const ModalBuy: React.FC = () => {
  const popup = React.useRef(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isSubmit, setIsSubmit] = useState(false);
  const [secToRedirect, setSecToRedirect] = useState(5);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [card, setCard] = useState('');

  const [exp, setExp] = useState('');
  const [ccv, setCcv] = useState('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmit(true);
  };

  useEffect(() => {
    if (!isSubmit) return;

    const timerId = setInterval(() => {
      setSecToRedirect((cur) => cur - 1);
    }, 1000);

    setTimeout(() => {
      dispatch(clearCart());
      dispatch(closeModalBuy());
      clearInterval(timerId);

      navigate('/');
    }, 5000);
  }, [dispatch, isSubmit, navigate]);

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
    // [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?
    if (!event.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) event.target.setCustomValidity(`Некорректный e-mail`);
    else event.target.setCustomValidity(``);
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

    if ((!validKey.includes(event.key) && !isFinite(+event.key)) || event.code === 'Space') {
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

  const getCardTypeByNumber = (number: string) => {
    if (number.startsWith('6')) return <FaCcDiscover />;
    if (number.startsWith('5')) return <FaCcVisa />;
    if (number.startsWith('4')) return <FaCcMastercard />;
    if (number.startsWith('3')) return <FaCcJcb />;
    // if (number === '3') return <SiAmericanexpress />;

    return <BsCreditCardFill />;
  };

  if (isSubmit) {
    return (
      <Container>
        <BuyAfterBox>Thanks for your order. Redirect to the store after {secToRedirect} sec</BuyAfterBox>
      </Container>
    );
  }

  return (
    <Container ref={popup} onMouseDown={(e) => e.target === popup.current && dispatch(closeModalBuy())}>
      <Form onSubmit={submitHandler}>
        <Heading>Personal details</Heading>
        <div>
          <Text>Сontact information</Text>
          <Input type="text" value={name} onChange={nameFieldHandler} placeholder="Full name" required />

          <Input type="phone" value={phone} onChange={phoneFieldHandler} placeholder="phone" required minLength={9} />
          <Input type="email" value={email} onChange={emailFieldHandler} placeholder="email" required />
        </div>

        <div>
          <Text>Shipping address</Text>
          <Input type="text" value={address} onChange={addressFieldHandler} placeholder="Shipping address" required />
        </div>

        <div>
          <Text>Payment card</Text>
          {/* prettier-ignore */}

          <CardNumberBox>
            <CardIcon>
              {getCardTypeByNumber(card)}              
            </CardIcon>
            <Input
              type="text"
              value={card}
              minLength={19}
              maxLength={19}
              onChange={cardFieldHandler}
              onKeyDown={cardFieldHandlerKey}
              placeholder="card"
              required
            />
            
          </CardNumberBox>
          {/* prettier-ignore */}
          <InputRow>
            <Input type="text" value={exp} minLength={5} maxLength={5} onChange={expCardFieldHandler} onKeyDown={cardFieldHandlerKey} placeholder="exp. 12/31" required />
            {/* prettier-ignore */}
            <Input type="text" value={ccv} minLength={3} maxLength={3} onChange={ccvCardFieldHandler} onKeyDown={cardFieldHandlerKey} placeholder="ccv" required />
          </InputRow>
        </div>
        <ButtonBuy type="submit">Submit</ButtonBuy>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  inset: 0;

  background-color: rgba(99, 99, 99, 0.603);
  background-color: rgba(10, 25, 41, 0.603);

  display: flex;
  justify-content: center;

  align-items: center;

  backdrop-filter: blur(1px);
`;

const Form = styled.form`
  padding: 20px 40px 60px;
  margin: 10px 20px;

  background-color: rgb(46, 76, 105);
  background-color: rgb(45, 53, 61);
  border-radius: 2px;

  display: flex;
  flex-direction: column;
  flex: 0 1 500px;
  gap: 10px;

  h3 {
    color: #ddd;
  }
`;

const Heading = styled.h1`
  font-size: 24px;
  text-align: center;

  color: #f3f6f9;
`;

const Text = styled.h3`
  margin-bottom: 5px;
`;

const CardNumberBox = styled.div`
  position: relative;
`;

const CardIcon = styled.div`
  font-size: 24px;
  color: black;

  position: absolute;
  right: 10px;
  bottom: 50%;
  transform: translateY(50%);
  z-index: 1;
`;

const InputRow = styled.div`
  display: flex;
  gap: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 15px 12px 15px;

  margin-bottom: 6px;

  border: none;
  border-bottom: 4px solid transparent;

  &:focus {
    outline: none;
  }

  &:focus:invalid {
    border-bottom: 4px solid #ff7730;
  }
  &:valid {
    border-bottom: 4px solid #55c57a;
  }
`;

const ButtonBuy = styled.button`
  padding: 10px 12px;
  cursor: pointer;

  background-color: #0074e4;
  border: solid 1px transparent;
  color: #f5f5f5;

  &:hover {
    background-color: #007df5;
  }

  &:active {
    background-color: #0785ff;
  }
`;

const BuyAfterBox = styled.div`
  background-color: var(--main-bg-color-2);

  padding: 25px 50px;
  border-radius: 7px;

  font-size: 18px;
`;

export default ModalBuy;
