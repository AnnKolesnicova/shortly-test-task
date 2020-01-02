import { useState } from 'react';

export default initialValue => {
  const [value, setValue] = useState('');
  const [invalidValue, setInvalidValue] = useState(false);
  const [list, setList] = useState(initialValue);
  const [copyItemSuccess, setCopyItemSuccess] = useState('');

  return {
    onChange: e => setValue(e.target.value),
    onSubmit: e => {
      e.preventDefault();
      if (value) {
        setInvalidValue(false);
        const shortLink =
          'https://rel.ink/' + Math.random().toString(36).substring(2);
        setList([...list, {
          link: value,
          shortLink,
        }]);
        setValue('');
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