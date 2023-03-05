import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  padding: 20px 20px;
  width: 900px;
  text-align: center;
  justify-content: center;
  border-radius: 20px;
  border: 3px solid #400080;
  background: linear-gradient(62.93deg, #97ccf0 19.68%, #5218fa 89.55%);
`;

export const ContactsTitle = styled.h2`
  display: block;
  padding-top: 30px;
  margin: 0 0 20px;
  color: #400080;
  font-size: 24px;
`;

export const FilterTitle = styled.p`
  display: block;
  margin: 0 0 20px;
  color: #400080;
  font-size: 18px;
`;

export const Title = styled.h1`
  display: block;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  color: #ffffff;

  animation: title 3000ms infinite;

  @keyframes title {
    0% {
      transform: scale(1.5);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }
`;
