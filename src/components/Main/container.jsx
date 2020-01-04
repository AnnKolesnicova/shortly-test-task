import { useState } from 'react';
import ShortlyService from 'services';

export default initialValue => {
  const [value, setValue] = useState('');
  const [invalidValue, setInvalidValue] = useState(false);
  const [list, setList] = useState(initialValue);
  const [copyItemSuccess, setCopyItemSuccess] = useState('');

  return {
    onChange: value => setValue(value),
    onSubmit: async (e) => {
      e.preventDefault();
      if (value) {
        const response = await ShortlyService.shortenLink({ longUrl: value });
        const { shortUrl, id } = response;

        if (shortUrl) {
          setInvalidValue(false);
          setValue('');
          setList([...list, {
            link: value,
            shortLink: shortUrl,
            id,
          }]);
        } else setInvalidValue(true); // if invalid url (as localhost)

      } else {
        setInvalidValue(true); // if no value
      }
    },
    onCopy: item => setCopyItemSuccess(item),
    value,
    invalidValue,
    list,
    copyItemSuccess,
  };
};