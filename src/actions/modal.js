import { MODAL_SHOW, MODAL_HIDE, SEND_MESSAGE_RESULT_SHOW } from '../constants/constants';

export const showModal = (modal, productInfo, productImg) => ({
  type: MODAL_SHOW,
  modal,
  productInfo,
  productImg,
});

export const hideModal = () => ({
  type: MODAL_HIDE,
  modal: null,
  productInfo: null,
  productImg: null,
  sendMessageResult: null,
});

export const showSendMessageResult = sendMessageResult => ({
  type: SEND_MESSAGE_RESULT_SHOW,
  sendMessageResult,
});
