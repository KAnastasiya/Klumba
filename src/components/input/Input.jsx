import './input.styl';

const renderField = ({ form, type, id, name, placeholder, input, meta: { touched, error } }) => (
  <div>
    { type
      ? <input
        {...input}
        type='text'
        id={`${form}_${id}`}
        className='form__input'
        name={name}
        placeholder={placeholder} />
      : <textarea
        {...input}
        id={`${form}_${id}`}
        className='form__textarea'
        name={name}
        placeholder={placeholder} />
    }
    <p className='form__input-error'>
      { touched && error ? error : '' }
    </p>
  </div>
);

const Input = ({ form, type, id, name, placeholder, title }) => (
  <div className='form__field'>
    { title
      ? <label
        htmlFor={id}
        className='form__label'>
        {title}
      </label>
      : null
    }
    <ReduxForm.Field
      type={type}
      name={name}
      component={renderField}
      form={form}
      id={id}
      placeholder={placeholder} />
  </div>
);

export default Input;

renderField.propTypes = {
  form: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  input: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    onBlur: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onDragStart: React.PropTypes.func.isRequired,
    onDrop: React.PropTypes.func.isRequired,
    onFocus: React.PropTypes.func.isRequired,
    __proto__: React.PropTypes.object.isRequired,
  }),
  meta: React.PropTypes.shape({
    touched: React.PropTypes.bool.isRequired,
    error: React.PropTypes.string,
  }),
};

Input.propTypes = {
  form: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  title: React.PropTypes.string,
};
