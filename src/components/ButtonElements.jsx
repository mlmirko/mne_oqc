import styled from 'styled-components';
import {Link} from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ?  'linear-gradient(90deg, rgba(235,196,37,1) 0%, rgba(235,196,37,1) 8%, rgba(255,94,90,1) 100%)' : '#B09E61')};
  white-space: nowrap;
  padding: ${({big}) =>  (big ? '14px  48px' : '12px 30px')};
  color: ${({dark}) =>  (dark ? '#f3f3f3' : '#fff')};
  font-size:${({fontBig}) =>  (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  'linear-gradient(90deg, rgba(255,94,90,1) 0%, rgba(255,94,90,1) 8%, rgba(235,196,37,1) 100%)' : '#153A6E')};

  }
`