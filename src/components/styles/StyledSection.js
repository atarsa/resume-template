import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${props => props.theme.colors.darkGrey};
  background: aliceblue;
  padding: 5rem 1rem;
`;

export default StyledSection;
