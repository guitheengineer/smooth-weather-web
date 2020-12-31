import React from 'react';
import styled from 'styled-components';
import { Icon } from 'App';
import { useAppInfo } from 'provider/Provider';
import { useCity } from 'components/hooks';
import localization from 'assets/localization.png';
import arrowDown from 'assets/arrow-down.png';

const Header = () => {
  const { setIsSearchOpen } = useAppInfo();

  const { search } = useAppInfo();
  const { data } = useCity(search);

  return (
    <HeaderContainer onClick={() => setIsSearchOpen(true)}>
      <Icon width={18} height={21} src={localization} />
      <LocalText>{data && data.name}</LocalText>
      <Icon width={15} height={10} src={arrowDown} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LocalText = styled.p`
  font-family: Overpass;
  font-weight: 700;
  font-size: 24px;
  white-space: nowrap;
  padding: 0 20px;
  color: #ffffff;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
`;

export default Header;
