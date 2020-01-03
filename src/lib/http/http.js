const key = 'f54646f55c3946e788047a1c7b52a715';
const workspace = 'bf1a52ade45f4d8988d097e11e476513';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'apikey': key,
  'workspace': workspace,
};

const request = (url, options) => {
  const requestOptions =
    Object.assign({}, { headers }, options);

  const { body } = requestOptions;
  requestOptions.body = JSON.stringify(body);

  return fetch(url, requestOptions)
    .catch(() => { throw new Error ('Network error. Service is not available.'); })
    .then(response => response.json());
};

export default {
  get: (url, options) => request(url, { method: 'GET', ...options }),
  post: (url, body, options) => request(url, { method: 'POST', body, ...options }),
  patch: (url, body, options) => request(url, { method: 'PATCH', body, ...options }),
  delete: (url, body, options) => request(url, { method: 'DELETE', body, ...options }),
};
