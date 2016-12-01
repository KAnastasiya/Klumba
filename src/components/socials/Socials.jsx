import './socials.styl';

const Socials = () => {
  const socials = [{
    name: 'fb',
    url: '',
  }, {
    name: 'instagram',
    url: '',
  }, {
    name: 'vk',
    url: '',
  }];

  return (
    <section className='socials'>
      <ul className='socials__list'>
        { socials.map((social, index) =>
          <li
            key={index}
            className='socials__item'>
            <a
              href={social.url}
              className={`socials__link socials__link_${social.name}`}
              target='_blank'
              rel='noopener noreferrer'>
              {social.name}
            </a>
          </li>,
        )}
      </ul>
    </section>
  );
};

export default Socials;
