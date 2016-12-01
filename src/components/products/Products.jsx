import Product from '../product/Product';
import PersonalBouquet from '../personal-bouquet/PersonalBouquet';
import './products.styl';

const Products = ({ data, showModalOrder, showModalRequestCall }) => (
  <section className='products'>
    <div className='content-wrapper'>
      <div className='products__list'>
        { data.products.map((product, index) =>
          <Product
            key={index}
            data={product}
            showModalOrder={showModalOrder} />,
        )}
      </div>
      <PersonalBouquet showModalRequestCall={showModalRequestCall} />
    </div>
  </section>
);

export default Products;

Products.propTypes = {
  data: React.PropTypes.shape({
    products: React.PropTypes.array.isRequired,
  }),
  showModalOrder: React.PropTypes.func.isRequired,
  showModalRequestCall: React.PropTypes.func.isRequired,
};
