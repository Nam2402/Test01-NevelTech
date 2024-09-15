import classNames from 'classnames';
import { GameTabEnum } from 'enums/app';
import { RESOURCES } from 'config/constants';
import { appInformation } from 'api/mock-data';
import { Footer } from './elements';
import GameMobileContent from './GameMobileContent';

// eslint-disable-next-line max-lines-per-function
const GameMobileContainer: FunctionComponent = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(GameTabEnum.ALL_GAMES);

  const items: TabsProps['items'] = [
    {
      key: GameTabEnum.GAMES_HOME,
      label: t('home'),
      icon: <img src={RESOURCES.HOME} />,
    },
    {
      key: GameTabEnum.TIMELINE,
      label: t('timeline'),
      icon: <img src={RESOURCES.TIMELINE} />,
    },
    {
      key: GameTabEnum.ALL_GAMES,
      label: t('all_games'),
      icon: <img src={RESOURCES.ALL_GAMES} />,
    },
    {
      key: GameTabEnum.SEARCH,
      label: t('search'),
      icon: <img src={RESOURCES.SEARCH} />,
    },
    {
      key: GameTabEnum.FILTER,
      label: t('filter'),
      icon: <img src={RESOURCES.FILTER} />,
    },
  ];

  const renderMenuItems = (): JSX.Element => (
    <div className="games-content__menu-items">
      {map(items, ({ key, label, icon }) => (
        <div
          key={key}
          className={classNames('games-content__menu-item', {
            [`games-content__menu-item--active`]: key === activeTab,
          })}
          onClick={() =>
            key !== GameTabEnum.FILTER && setActiveTab(key as GameTabEnum)
          }
        >
          {icon}
          <span>{label}</span>
        </div>
      ))}
    </div>
  );

  const renderBannerContent = (): JSX.Element => (
    <div className="games-banner">
      <AntCarousel autoplay>
        {map(range(1, 6), (item) => (
          <img
            key={item}
            className="games-banner__image"
            src={RESOURCES.SLIDE_MOBILE_1}
          />
        ))}
      </AntCarousel>
      <div className="games-banner__header">
        <img className="games-banner__logo" src={RESOURCES.LOGO_WHITE} />
        <img src={RESOURCES.MENU} />
      </div>
      <Flex vertical gap={30} align="center" className="games-banner__info">
        <span className="games-banner__name">Chicky Run</span>
        <Flex className="games-banner__detail" align="center" gap={4}>
          {t('game_details')}
          <img src={RESOURCES.RIGHT} />
        </Flex>
      </Flex>
    </div>
  );

  const renderInformation = (): JSX.Element => (
    <div className="games-info">
      {map(appInformation, ({ title }, idx) => (
        <div className="games-info__item" key={idx}>
          <span className="games-info__item-title">{title}</span>
          <img src={RESOURCES.PLUS} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="games-mobile-container">
      {renderBannerContent()}
      <div className="games-content">
        {renderMenuItems()}
        <GameMobileContent />
      </div>
      <Button className="load-more-btn">
        <Flex gap={8}>
          {t('load_more')}
          <img src={RESOURCES.PLUS} />
        </Flex>
      </Button>
      {renderInformation()}
      <Footer />
    </div>
  );
};

export default GameMobileContainer;
