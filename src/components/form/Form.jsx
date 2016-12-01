import { FormSubmissionError, FormSubmissionSuccess } from '../form-submission-result/FormSubmissionResult';
import validate from '../../validations/validate';
import submit from '../form/submit';
import * as modalActions from '../../actions/modal';
import './form.styl';

const mapStateToProps = state => ({
  sendMessageResult: state.modal.sendMessageResult,
});

const mapDispatchToProps = dispatch => ({
  actions: Redux.bindActionCreators(modalActions, dispatch),
});

let Form = ({ type, children, btnText, sendedText, addInfo, tips, handleSubmit, sendMessageResult, actions, userPhone, userDetails }) => {
  const changeState = (state) => {
    if (state === 'success') {
      actions.showSendMessageResult(true);
    } else if (state === 'fail') {
      actions.showSendMessageResult(false);
    }
  };

  if (sendMessageResult === true) {
    return (
      <div className='form-wrapper'>
        <FormSubmissionSuccess form={type} />
      </div>
    );
  }

  return (
    <div className='form-wrapper'>
      {addInfo}
      { tips
        ? <p className='form__tips'>{tips}</p>
        : null
      }
      <form
        className={`form form_${type}`}
        onSubmit={handleSubmit(() => submit(
          `${sendedText}\n\nТелефон: ${userPhone}\n\n${userDetails ? `Комментарий: ${userDetails}` : ''}`,
          changeState,
        ))}>
        {children}
        <div className='form__controls'>
          { sendMessageResult === false
            ? <FormSubmissionError />
            : null
          }
          <button
            type='submit'
            className='btn btn_submit'>
            {btnText}
          </button>
        </div>
      </form>
    </div>
  );
};

Form = ReduxForm.reduxForm({
  form: 'main',
  validate,
})(Form);

Form = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Form);

const selector = ReduxForm.formValueSelector('main');
Form = ReactRedux.connect((state) => {
  const userPhone = selector(state, 'phone');
  const userDetails = selector(state, 'details');
  return {
    userPhone,
    userDetails,
  };
})(Form);

export default Form;

Form.propTypes = {
  type: React.PropTypes.string.isRequired,
  children: React.PropTypes.array.isRequired,
  btnText: React.PropTypes.string.isRequired,
  sendedText: React.PropTypes.string.isRequired,
  addInfo: React.PropTypes.object,
  tips: React.PropTypes.string,
  handleSubmit: React.PropTypes.func,
  sendMessageResult: React.PropTypes.bool,
  actions: React.PropTypes.shape({
    showModal: React.PropTypes.func.isRequired,
    hideModal: React.PropTypes.func.isRequired,
    showSendMessageResult: React.PropTypes.func.isRequired,
  }),
  userPhone: React.PropTypes.string,
  userDetails: React.PropTypes.string,
};
