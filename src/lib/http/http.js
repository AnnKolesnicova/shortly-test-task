const request = (url, options) => {
  const requestOptions =
    Object.assign({}, options);

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
