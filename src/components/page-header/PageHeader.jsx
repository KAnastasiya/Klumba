import Socials from '../socials/Socials';
import PageNav from '../page-navigation/PageNav';
import './page-header.styl';

const PageHeader = ({ showModalRequestCall }) => (
  <div className='page-header'>
    <div className='content-wrapper'>
      <div className='page-header__logo'>
        <ReactRouter.Link
          to='/'
          className='page-header__logo-link'>
          <img
            className='page-header__logo-img'
            src='logo.png'
            width='125'
            height='92'
            alt='Royal Flowers' />
        </ReactRouter.Link>
      </div>
      <div className='working-mode'>
        <p className='working-mode__text'>
          Без выходных/24 часа
        </p>
        <p className='working-mode__text'>
          Бесплатная доставка по городу
        </p>
      </div>
      <div className='header-contacts'>
        <a
          href='tel:+74993467171'
          className='header-contacts__phone'>
          +38(099)&nbsp;67-55-719
        </a>
        <a
          className='link link_request-call'
          onClick={showModalRequestCall}>
          Заказать звонок
        </a>
      </div>
      <Socials />
    </div>
    <PageNav />
  </div>
);

export default PageHeader;

PageHeader.propTypes = {
  showModalRequestCall: React.PropTypes.func.isRequired,
};
