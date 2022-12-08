import { expect } from 'chai';
import HTTPTransport from './http';

describe('HTTPTransport тестирование (/auth)', function auth() {
  let http: HTTPTransport;
  let options: Record<string, {}>;

  beforeEach(() => {
    http = new HTTPTransport('/auth');
    options = {
      headers: {
        'content-type': 'application/json',
      },
      withCredentials: true,
    };
  });

  it('HTTPTransport тест GETUSER', async () => {
    this.timeout(0);
    await http.get('/user', options).catch((err) => {
      expect(http.query).to.equal('https://ya-praktikum.tech/api/v2/auth/user');
      expect(err).to.equal('Cookie is not valid');
    });
  });
  it('HTTPTransport тест GETWITHQUERY', async () => {
    this.timeout(0);
    options.data = {
      login: 'Admin',
      id: '1234567',
    };
    await http.get('/user', options).catch(() => {
      expect(http.query).to.equal('https://ya-praktikum.tech/api/v2/auth/user/?login=Admin&id=1234567');
    });
  });
  it('HTTPTransport тест SIGNIN error', async () => {
    this.timeout(0);
    options.data = {
      login: 'Admin',
      password: 'Admin12345',
    };
    await http.post('/signin', options).catch((err) => {
      expect(err).to.equal('Login or password is incorrect');
    });
  });
  it('HTTPTransport тест SIGNIN', async () => {
    this.timeout(0);
    options.data = {
      login: 'Admin',
      password: 'Admin1234567',
    };
    await http.post('/signin', options).then((response) => {
      expect(http.query).to.equal('https://ya-praktikum.tech/api/v2/auth/signin');
      expect(response).to.equal(null);
    });
  });
});

describe('HTTPTransport тестирование (/chats)', function chats() {
  let http: HTTPTransport;
  let options: Record<string, {}>;

  beforeEach(() => {
    http = new HTTPTransport('/chats');
    options = {
      headers: {
        'content-type': 'application/json',
      },
      withCredentials: true,
    };
  });

  it('HTTPTransport тест ADDUSER', async () => {
    this.timeout(0);
    options.data = { users: [149339], chatId: 3995 };
    await http.put('/users', options).then((response) => {
      expect(http.query).to.equal('https://ya-praktikum.tech/api/v2/chats/users');
      expect(response).to.equal(null);
    });
  });

  it('HTTPTransport тест DELLETEUSER', async () => {
    this.timeout(0);
    options.data = { users: [149339], chatId: 3995 };
    await http.delete('/users', options).then((response) => {
      expect(http.query).to.equal('https://ya-praktikum.tech/api/v2/chats/users');
      expect(response).to.equal(null);
    });
  });
});
