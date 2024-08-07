import reactDom from 'react-dom';
import * as S from './styles';

export default function Loader() {
  return reactDom.createPortal(
    <S.Overlay>
      <div className="loader" />
    </S.Overlay>,
    document.getElementById('loader-root'),
  );
}
