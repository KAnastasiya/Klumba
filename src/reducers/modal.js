import { MODAL_SHOW, MODAL_HIDE, SEND_MESSAGE_RESULT_SHOW } from '../constants/constants';

const initialState = {
  modal: null,
  productInfo: null,
  productImg: null,
  sendMessageResult: null,
};

const modalState = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return {
        ...state,
        modal: action.modal,
        productInfo: action.productInfo,
        productImg: action.productImg,
      };
    case MODAL_HIDE:
      return {
        ...state,
        modal: action.modal,
        productInfo: action.productInfo,
        productImg: action.productImg,
        sendMessageResult: action.sendMessageResult,
      };
    case SEND_MESSAGE_RESULT_SHOW:
      return {
        ...state,
        sendMessageResult: action.sendMessageResult,
      };
    default:
      return state;
  }
};

export default modalState;
