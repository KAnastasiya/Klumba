import './form-submission-result.styl';

export const FormSubmissionError = () => (
  <div className='form-submission-result form-submission-result_error'>
    <div className='form-submission-result__block'>
      <p className='form-submission-result__smile'>
        :–(
      </p>
      <p className='form-submission-result__text'>
        Почему-то нет связи, не можем принять заявку.
      </p>
    </div>
    <div className='form-submission-result__block'>
      <p className='form-submission-result__text'>
        Будьте добры, позвоните нам по телефону:
      </p>
      <p className='form-submission-result__phone'>
        8&nbsp;(499)&nbsp;346-71-71
      </p>
    </div>
    <div className='form-submission-result__block'>
      <p className='form-submission-result__text'>
        Приносим извинения за неудобства!
      </p>
    </div>
  </div>
);

export const FormSubmissionSuccess = ({ form }) => (
  <div className='form-submission-result form-submission-result_success'>
    <div className='form-submission-result__block'>
      <p className='form-submission-result__smile'>
        :–)
      </p>
      <p className='form-submission-result__text'>
        { form === 'order'
          ? 'Спасибо, заказ принят. Будьте на связи, менеджер позвонит и уточнит детали.'
          : 'Заявка принята. Будьте на связи, менеджер в ближайшее время позвонит.'
        }
      </p>
    </div>
  </div>
);

FormSubmissionSuccess.propTypes = {
  form: React.PropTypes.string.isRequired,
};
