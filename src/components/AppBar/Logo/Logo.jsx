import logoImg from '../../../images/logo_news.png';
import { LinkHome } from './Logo.styled';

export const Logo = () => {
  return (
    <LinkHome role="logo" href="/">
      <img tabIndex="0" role="link" src={`${logoImg}`} alt="Open book icon" />
      {/*  <p>
        Finance <span>Ledger</span>
      </p> */}
    </LinkHome>
  );
};
