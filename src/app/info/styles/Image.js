import styled from 'styled-components';

const Image = styled.img`
  margin: 1%;

  flex: ${props => props.flex};

  @media (max-width: 768px) {
    display: ${props => (props.showTabletOrCell ? null : 'none')}
  }
`;

export default Image;
