const validate = (values) => {
  const errors = {};

  if (!values.phone) {
    errors.phone = 'Обязательное поле';
  } else if (!/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/i.test(values.phone)) {
    errors.phone = 'Телефон в формате +38(044)555-55-55';
  }

  if (values.details && (values.details.length < 5)) {
    errors.details = 'Минимальная длина - 5 символов';
  }

  return errors;
};

export default validate;
