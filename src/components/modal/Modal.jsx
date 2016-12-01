import FormOrder from '../form-order/FormOrder';
import FormRequestCall from '../form-request-call/FormRequestCall';
import './modal.styl';

const Modal = ({ type, header, productInfo, productImg, hideModal }) => {
  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      hideModal();
    }
  };

  return (
    <div
      id={type}
      className='modal'
      onClick={handleClick}>
      <div className='modal__dialog'>
        <div className='modal__header'>
          <h2 className='modal__title'>{header}</h2>
          <button
            type='button'
            className='icon icon_close'
            onClick={hideModal} />
        </div>
        <div className='modal__body'>
          { type === 'order'
            ? <FormOrder
              productInfo={productInfo}
              productImg={productImg} />
              : type === 'request-call'
              ? <FormRequestCall />
            : null
          }
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  type: React.PropTypes.string.isRequired,
  header: React.PropTypes.string.isRequired,
  productInfo: React.PropTypes.shape({
    products: React.PropTypes.array,
  }),
  productImg: React.PropTypes.string,
  hideModal: React.PropTypes.func.isRequired,
};
