import { Link } from 'react-router';
import './page-navigation.styl';

const PageNav = () => {
  const navs = [{
    name: '',
    text: 'Классические букеты',
  }, {
    name: 'hat-box',
    text: 'Букеты в коробках',
  }, {
    name: 'vase',
    text: 'Букеты в вазе',
  }, {
    name: 'million-roses',
    text: 'Большие букеты',
  }];

  return (
    <nav className='page-navigation'>
      <div className='content-wrapper'>
        <ul className='page-navigation__list'>
          { navs.map((item, index) =>
            <li
              key={index}
              className={`page-navigation__item page-navigation__item_${item.name || 'classic'}`}>
              <Link
                to={`/${item.name}`}
                activeClassName='page-navigation__link_active'
                onlyActiveOnIndex
                className='page-navigation__link'>
                {item.text}
              </Link>
            </li>,
          )}
        </ul>
      </div>
    </nav>
  );
};

export default PageNav;
