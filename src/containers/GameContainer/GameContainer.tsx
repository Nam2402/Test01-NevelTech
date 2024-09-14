import classNames from 'classnames';
import { GameTabEnum } from 'enums/app';
import { RESOURCES } from 'config/constants';
import { Footer } from './elements';
import GameHomeContent from './GameHomeContent';

// eslint-disable-next-line max-lines-per-function
const GameContainer: FunctionComponent = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(GameTabEnum.GAMES_HOME);

  const items: TabsProps['items'] = [
    {
      key: GameTabEnum.GAMES_HOME,
      label: t('games_home'),
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
  ];

  const renderMenuItems = (): JSX.Element => (
    <>
      {map(items, ({ key, label, icon }) => (
        <div
          key={key}
          className={classNames('games-content__menu-item', {
            [`games-content__menu-item--active`]: key === activeTab,
          })}
          onClick={() => setActiveTab(key as GameTabEnum)}
        >
          {icon}
          <span>{label}</span>
        </div>
      ))}
    </>
  );

  return (
    <div className="games-container">
      <div className="games-banner">
        <AntCarousel autoplay>
          {map(range(1, 6), (item) => (
            <img
              key={item}
              className="games-banner__img"
              src={RESOURCES.GAMES_SLIDE1}
            />
          ))}
        </AntCarousel>
      </div>
      <div className="games-content">
        <div>
          <div className="games-content__left-bar">
            <Input
              className="search-input"
              placeholder={t('search')}
              prefix={<img src={RESOURCES.SEARCH} />}
            />
            <AntDivider />
            {renderMenuItems()}
          </div>
        </div>
        <GameHomeContent />
      </div>
      <Footer />
    </div>
  );
};

export default GameContainer;
