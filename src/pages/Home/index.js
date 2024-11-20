import { Link } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import ContactsService from '../../services/ContactsService';
import sad from '../../assets/images/sad.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [contacts, searchTerm],
  );

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactList);
      return;
    } catch {
      setHasError(true);
      return;
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

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

      <S.Header $hasError={hasError}>
        {!hasError && (
          <strong>
            {`${filteredContacts.length}
             ${filteredContacts.length === 1 ? 'contato' : 'contatos'}`}
          </strong>
        )}
        <Link to="/new" alt="link">
          Novo contato
        </Link>
      </S.Header>

      {hasError && (
        <S.ErrorContainer>
          <img src={sad} alt="sad" />

          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={loadContacts}>
              Tentar novamente
            </Button>
          </div>
        </S.ErrorContainer>
      )}

      {!hasError && (
        <>
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
                  {contact.category_name && (
                    <small>{contact.category_name}</small>
                  )}
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
        </>
      )}
    </S.Container>
  );
}
