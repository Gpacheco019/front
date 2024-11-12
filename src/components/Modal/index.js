import propTypes from 'prop-types';
import ReactDom from 'react-dom';
import Button from '../Button';
import * as S from './styles';

export default function Modal({ danger }) {
  return ReactDom.createPortal(
    <S.Overlay>
      <S.Container danger={danger}>
        <h1>Titulo do modal</h1>
        <p>Conteúdo do modal</p>

        <S.Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Confirmar
          </Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: propTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
