import Form from '../form/Form';
import Input from '../input/Input';
import './form-order.styl';

const FormOrder = ({ productImg, productInfo }) => {
  const type = 'order';

  const bonuses = [{
    name: 'card',
    text: 'Открытка в подарок',
  }, {
    name: 'free-delivery',
    text: 'Бесплатная доставка по Москве',
  }, {
    name: 'photo',
    text: 'Фото перед отправкой',
  }];

  const setProductInfo = () => {
    let text;
    if (productInfo.descr) {
      if (productInfo.packing) {
        if (productInfo.packingColor) {
          text = `${productInfo.descr}, Упаковка: ${productInfo.packing} (${productInfo.packingColor})`;
        } else {
          text = `${productInfo.descr}, Упаковка: ${productInfo.packing}`;
        }
      } else {
        text = productInfo.descr;
      }
    } else if (productInfo.packing) {
      if (productInfo.packingColor) {
        text = `Упаковка: ${productInfo.packing}, (${productInfo.packingColor})`;
      } else {
        text = `Упаковка: ${productInfo.packing}`;
      }
    }
    return text;
  };

  const renderProductInfo = () => (
    <div className='chosen-product'>
      <div className='chosen-product__img-container'>
        <img
          className='chosen-product__img'
          src={productImg}
          width='224'
          height='226'
          alt='' />
      </div>
      <div className='chosen-product__info'>
        <p className='chosen-product__name'>
          {productInfo.name}
        </p>
        <p className='chosen-product__details'>
          {setProductInfo()}
        </p>
        <ul className='chosen-product__bonuses'>
          { bonuses.map((bonus, index) =>
            <li
              key={index}
              className={`chosen-product__bonuses-item chosen-product__bonuses-item_${bonus.name}`}>
              {bonus.text}
            </li>,
          )}
        </ul>
        <p className='chosen-product__price'>
          {`${productInfo.price} ₴`}
        </p>
      </div>
    </div>
  );

  return (
    <Form
      type={type}
      btnText='Оформить заказ'
      addInfo={renderProductInfo()}
      className={`form form_${type}`}
      sendedText={`Заказ букета: ${productInfo.name}; ${productInfo.numbers}; ${productInfo.price} грн.`}>
      <Input
        form={type}
        type='text'
        id='phone'
        name='phone'
        title='Телефон'
        placeholder='+38(044)555-55-55' />
      <Input
        form={type}
        id='details'
        name='details'
        title='Комментарий' />
    </Form>
  );
};

export default FormOrder;

FormOrder.propTypes = {
  productImg: React.PropTypes.string.isRequired,
  productInfo: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    images: React.PropTypes.array.isRequired,
    descr: React.PropTypes.string,
    numbers: React.PropTypes.string,
    packing: React.PropTypes.string,
    packingColor: React.PropTypes.string,
  }),
};
