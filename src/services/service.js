export const routes = {
  short: `https://api.rebrandly.com/v1/links`,
};

export default class ShortlyService {
  constructor({ http }) {
    this._http = http;
  }

  shortenLink({ longUrl }) {
    return this._http.post(routes.short, {
      destination: longUrl,
      domain: { fullName: "rebrand.ly" }
    });
  }
}
