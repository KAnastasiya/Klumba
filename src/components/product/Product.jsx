import './product.styl';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.openOrderForm = this.openOrderForm.bind(this);
  }

  componentDidMount() {
    $(this.fotorama).fotorama();
  }

  openOrderForm() {
    this.props.showModalOrder(
      this.props.data,
      $(this.fotorama).fotorama().data('fotorama').activeFrame.img,
    );
  }

  render() {
    const { name, descr, numbers, packing, packingColor, price, images } = this.props.data;
    return (
      <figure className='product'>
        <div
          className='fotorama'
          data-autoplay='false'
          data-nav='dots'
          data-transition='dissolve'
          data-loop='true'
          data-startindex='0'
          data-auto='false'
          ref={c => (this.fotorama = c)}>
          { images.map((image, index) =>
            <img
              key={index}
              src={image}
              width='64'
              height='64'
              alt='' />,
          )}
        </div>
        <a
          onClick={this.openOrderForm}
          className='link link_order'>
          <div className='product__info'>
            <h3 className='product__name'>{name}</h3>
            { descr
              ? <p className='product__info-category product__descr'>
                {`${descr}: `}
                <span className='product__info-data product__numbers'>
                  {numbers}
                </span>
              </p>
              : null
            }
            { packing
              ? <p className='product__info-category'>
                Упаковка:
                <span className='product__info-data product__packing'>
                  {` ${packing}`}
                </span>
              </p>
              : null
            }
            { packingColor
              ? <p className='product__info-category'>
                Цвет упаковки:
                <span className='product__info-data product__packing-color'>
                  {` ${packingColor}`}
                </span>
              </p>
              : null
            }
            <p className='product__price'>
              <span className='product__price-value'>
                {`${price} ₴`}
              </span>
            </p>
          </div>
        </a>
      </figure>
    );
  }
}

Product.propTypes = {
  showModalOrder: React.PropTypes.func.isRequired,
  data: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    images: React.PropTypes.array.isRequired,
    descr: React.PropTypes.string,
    numbers: React.PropTypes.string,
    packing: React.PropTypes.string,
    packingColor: React.PropTypes.string,
  }),
};
