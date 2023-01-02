import React from 'react';

const Form = () => {
  return (
    <FormStyled onSubmit={submitHandler}>
      <h3>Personal details</h3>
      <input type="text" placeholder="FirstName LastName" />
      <input type="phone" placeholder="phone" />
      <input type="text" placeholder="card" />
      <input type="email" placeholder="email" />
      <button type="submit">Submit</button>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  padding: 10px 20px;
  margin: 10px 20px;

  background-color: #333;
  border-radius: 5px;
  /* min-width: 340px; */
  min-height: 60%;

  display: flex;
  flex-direction: column;
  flex: 0 1 500px;
  gap: 5px;
`;

export default Form;
