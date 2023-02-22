import { Logo } from './Logo/Logo';
import { Header, HeaderContainer } from './AppBar.styled';
import { Container } from '../Сontainer';

import { Navigation } from './Navigation/Navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const AppBar = () => {
  const { scrollY } = useScrollPosition();

  return (
    <Header role="banner" scrolledMobile={scrollY >= 120} scrolledTablet={scrollY >= 70}>
      <Container>
        <HeaderContainer>
          <Logo />
          <Navigation />
        </HeaderContainer>
      </Container>
    </Header>
  );
};

export default AppBar;
