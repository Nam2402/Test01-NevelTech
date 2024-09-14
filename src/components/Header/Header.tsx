import { RESOURCES } from 'config/constants';
import { MenuItem } from './elements';

const Header: FunctionComponent = () => {
  const { t } = useTranslation();
  const menuList: App.MenuItem[] = [
    {
      link: '/',
      label: t('home'),
    },
    {
      link: '/games',
      label: t('games'),
    },
    {
      link: '/news',
      label: t('news'),
    },
    {
      link: '/math',
      label: t('math'),
    },
    {
      link: '/company',
      label: t('company'),
    },
    {
      link: '/events',
      label: t('events'),
    },
    {
      link: '/partners',
      label: t('partners'),
    },
  ];

  return (
    <AntLayout.Header className="header">
      <Col span={8}>
        <img className="header__logo" src={RESOURCES.LOGO_WHITE} />
      </Col>
      <div className="header__menu">
        {map(menuList, (menu, index) => (
          <MenuItem className="header__menu-item" menu={menu} key={index} />
        ))}
      </div>
    </AntLayout.Header>
  );
};

export default Header;
