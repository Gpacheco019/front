import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import Loader from '../../components/Loader';
import delay from '../../utils/delay';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [contacts, searchTerm],
  );

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3130/contacts?orderBy=${orderBy}`)
      .then(async response => {
        await delay(300);
        const data = await response.json();
        setContacts(data);
      })
      .catch(error => {
        const message = error;
        return message;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [orderBy]);

  const handleToggleOrderBy = () => {
    setOrderBy(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const handleChangeSearchTerm = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <S.Container>
      {isLoading && <Loader isLoading={isLoading} />}

      <S.InputSearchContainer>
        <S.InputSearch
          type="text"
          placeholder="Pesquisar pelo contato"
          onChange={handleChangeSearchTerm}
          value={searchTerm}
        />
      </S.InputSearchContainer>
      <S.Header>
        <strong>
          {`${filteredContacts.length}
             ${filteredContacts.length === 1 ? 'contato' : 'contatos'}`}
        </strong>
        <Link to="/new" alt="link">
          Novo contato
        </Link>
      </S.Header>

      {filteredContacts.length > 0 && (
        <S.ListHeader orderBy={orderBy}>
          <button
            type="button"
            className="sort-button"
            onClick={handleToggleOrderBy}
          >
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </S.ListHeader>
      )}

      {filteredContacts.map(contact => (
        <S.Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && <small>{contact.category_name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="editar" />
            </Link>
            <button type="button">
              <img src={trash} alt="remover" />
            </button>
          </div>
        </S.Card>
      ))}
    </S.Container>
  );
}
