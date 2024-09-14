import { hotCategoryData, hotGameData } from 'api/mock-data';
import { SCROLL_AMOUNT } from 'config/constants';

// eslint-disable-next-line max-lines-per-function
const GameHomeContent: FunctionComponent = () => {
  const { t } = useTranslation();

  const renderHotGame = (): JSX.Element => (
    <Carousel scrollAmount={SCROLL_AMOUNT} title={t('hot_game')}>
      <Flex gap={20}>
        {map(hotGameData, ({ id, name, description, icon, image }) => (
          <div key={id} className="games-content__hot-game">
            <img src={image} />
            <Flex gap={20} align="center">
              <img src={icon} />
              <Flex vertical gap={6} justify="center">
                <span className="games-content__game-name">{name}</span>
                <span className="games-content__game-description">
                  {description}
                </span>
              </Flex>
              <Button className="button-view">{t('view')}</Button>
            </Flex>
          </div>
        ))}
      </Flex>
    </Carousel>
  );

  const renderHottestCategory = (): JSX.Element => (
    <Carousel scrollAmount={SCROLL_AMOUNT} title={t('hottest_category')}>
      <Flex gap={20}>
        {map(
          hotCategoryData,
          ({ id, name, description, icon, logos, image }) => (
            <div key={id} className="games-content__hot-category">
              <Flex vertical gap={20}>
                <div className="games-content__category-info">
                  <img src={icon} />
                  <span className="games-content__category-name">{name}</span>
                  <span className="games-content__category-description">
                    {description}
                  </span>
                </div>
                <Flex gap={20}>
                  <img className="category-icon" src={logos[0]} />
                  <img className="category-icon" src={logos[1]} />
                </Flex>
              </Flex>
              <Flex vertical gap={20}>
                <Flex gap={20}>
                  <img className="category-icon" src={logos[2]} />
                  <img className="category-icon" src={logos[3]} />
                </Flex>
                <img className="games-content__category-image" src={image} />
              </Flex>
            </div>
          ),
        )}
      </Flex>
    </Carousel>
  );

  return (
    <div className="games-content__info">
      {renderHotGame()}
      {renderHottestCategory()}
    </div>
  );
};

export default GameHomeContent;
