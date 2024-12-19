import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3130/');
  }

  async listContacts(orderBy = 'asc') {
    const response = this.HttpClient.get(`contactss?orderBy=${orderBy}`);
    return response;
  }
}

export default new ContactsService();
