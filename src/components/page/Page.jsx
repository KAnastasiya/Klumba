import PageHeader from '../page-header/PageHeader';
import PageFooter from '../page-footer/PageFooter';
import Products from '../products/Products';
import Modal from '../modal/Modal';
import * as modalActions from '../../actions/modal';
import { lockPageScroll, unLockPageScroll } from '../../utils/js/utils';
import './scaffolding.styl';

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
  actions: Redux.bindActionCreators(modalActions, dispatch),
});

const Page = ({ data, modal, actions }) => {
  const onRequestCallClick = () => {
    actions.showModal('request-call', null, null);
    lockPageScroll();
  };

  const onOrderClick = (productInfo, productImg) => {
    actions.showModal('order', productInfo, productImg);
    lockPageScroll();
  };

  const onCloseClick = () => {
    actions.hideModal();
    unLockPageScroll();
  };

  return (
    <div className='content__container'>
      <PageHeader showModalRequestCall={onRequestCallClick} />
      <main className='main-content'>
        <Products
          data={data}
          showModalRequestCall={onRequestCallClick}
          showModalOrder={onOrderClick} />
      </main>
      <PageFooter showModalRequestCall={onRequestCallClick} />
      {
        modal.modal === 'request-call'
         ? <Modal
           type={modal.modal}
           header='Заказ звонка'
           hideModal={onCloseClick} />
        : modal.modal === 'order'
          ? <Modal
            type={modal.modal}
            header='Оформление заказа'
            hideModal={onCloseClick}
            productInfo={modal.productInfo}
            productImg={modal.productImg} />
          : null
      }
    </div>
  );
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Page);

Page.propTypes = {
  data: React.PropTypes.shape({
    products: React.PropTypes.array.isRequired,
  }),
  modal: React.PropTypes.shape({
    modal: React.PropTypes.string,
    productImg: React.PropTypes.string,
    productInfo: React.PropTypes.object,
  }),
  actions: React.PropTypes.shape({
    showModal: React.PropTypes.func.isRequired,
    hideModal: React.PropTypes.func.isRequired,
    showSendMessageResult: React.PropTypes.func.isRequired,
  }),
};
