import { useState } from 'react';
import ShortlyService from 'services';

export default initialValue => {
  const [value, setValue] = useState('');
  const [invalidValue, setInvalidValue] = useState(false);
  const [list, setList] = useState(initialValue);
  const [copyItemSuccess, setCopyItemSuccess] = useState('');

  return {
    onChange: e => setValue(e.target.value),
    onSubmit: async (e) => {
      e.preventDefault();

      if (value) {
        setInvalidValue(false);
        try {
          const response = await ShortlyService.shortenLink({ longUrl: value });
          const { shortUrl, id } = response;

          setList([...list, {
            link: value,
            shortLink: shortUrl,
            id,
          }]);
          setValue('');
        } catch (error) {
          console.error(error)
        }
      } else {
        setInvalidValue(true);
      }
    },
    onCopy: item => setCopyItemSuccess(item),
    value,
    invalidValue,
    list,
    copyItemSuccess,
  };
};