import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function EditContact() {
  return (
    <>
      <PageHeader title="novo contato" />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}
