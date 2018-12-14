import styled from 'styled-components/native';

const StyledButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #A33944;
  opacity: ${props => props.disabled ? '0.5' : '1'};
  margin-top: 16;
  width: 200;
  height: 48;
`;

export default StyledButtonContainer;