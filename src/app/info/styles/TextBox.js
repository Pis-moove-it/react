import styled from 'styled-components';

const TextBox = styled.div`
  line-height: normal;
  color: #000;

  margin: 5% 2% 10%;

  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;

  @media (max-width: 425px) {
    margin: 0% 8%;
  }
`;

export default TextBox;
