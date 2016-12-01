const submit = (message, changeState) => {
  const handleChange = state => changeState(state);

  const request = $.ajax({
    url: 'http://localhost:3000/send',
    type: 'POST',
    data: { message },
  });

  request.then(
    () => { handleChange('success'); },
    () => { handleChange('fail'); },
  );

  return request;
};

export default submit;
