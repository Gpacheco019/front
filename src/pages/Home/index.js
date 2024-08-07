import { Link } from 'react-router-dom';
import * as S from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <S.Container>
      <S.InputSearchContainer>
        <S.InputSearch type="text" placeholder="Pesquisar pelo contato" />
      </S.InputSearchContainer>
      <S.Header>
        <strong>3 Contatos</strong>
        <Link href="/" alt="link">Novo contato</Link>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Silva</strong>
              <small>Instagram</small>
            </div>
            <span>mateus@devacademy.com.br</span>
            <span>(33) 99999-9999</span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="editar" />
            </Link>
            <button type="button">
              <img src={trash} alt="remover" />
            </button>
          </div>
        </S.Card>

      </S.ListContainer>
    </S.Container>
  );
}
