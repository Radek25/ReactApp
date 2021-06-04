import styled from 'styled-components';
import { Colors } from '../../../../../StyledHelpers/Colors';

interface ISizeStyles{
    isMenuOpen: boolean;
}

export const ClosedMenuWrapper = styled.div<ISizeStyles>`
    width: 17%;
    height: 70%;
    margin: 0 20px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 5px;
    border: 1px solid ${Colors.lightgrey};
   .icon-of-menu-option{
        width: 20px;
        height: 20px;
        margin-right: 10px;
   }
   p{
       font-size: 14px;
       font-weight: 600;
       cursor: default;
   }
   .close-or-open-icon{
       width: ${props => (props.isMenuOpen == false)? '10px' : '20px'};
       height: ${props => (props.isMenuOpen == false)? '8px' : '20px'};
       position: absolute;
       right: ${props => (props.isMenuOpen == false)? '15px' : '10px'};
       cursor: pointer;
   }
`;