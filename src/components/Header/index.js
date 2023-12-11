import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <a href="/">
        <img src={logo} alt="MyContacts" width="201" />
      </a>

    </Container>
  );
}
