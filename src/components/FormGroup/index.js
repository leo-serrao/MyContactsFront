import PropTypes from 'prop-types';

import { Container } from './styles';

import Select from '../Select';
import Input from '../Input';
import Button from '../Button';

export default function FormGroup({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
