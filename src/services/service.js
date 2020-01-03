export const routes = {
  short: `https://api.rebrandly.com/v1/links`,
};

const key = 'f54646f55c3946e788047a1c7b52a715';
const workspace = 'bf1a52ade45f4d8988d097e11e476513';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'apikey': key,
  'workspace': workspace,
};

export default class ShortlyService {
  constructor({ http }) {
    this._http = http;
  }

  shortenLink({ longUrl }) {
    return this._http.post(
      routes.short, {
        destination: longUrl,
        domain: { fullName: 'rebrand.ly' },
      }, {
        headers,
      });
  }
}
