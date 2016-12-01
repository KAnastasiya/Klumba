import './personal-bouquet.styl';

const PersonalBouquet = ({ showModalRequestCall }) => (
  <div className='personal-bouquet'>
    <div className='personal-bouquet__container'>
      <h2 className='personal-bouquet__title'>
        Собрать букет, по индивидуальному заказу?
      </h2>
      <p className='personal-bouquet__text'>
        Не нашли подходящий букет? Хотите собрать свой собственный? Мы к Вашим услугам!
      </p>
    </div>
    <a
      className='btn btn_request-call'
      onClick={showModalRequestCall}>
      Оставить заявку
    </a>
  </div>
);

export default PersonalBouquet;

PersonalBouquet.propTypes = {
  showModalRequestCall: React.PropTypes.func.isRequired,
};
