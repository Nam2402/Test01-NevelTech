import { hotCategoryData, hotGameDetail } from 'api/mock-data';

// eslint-disable-next-line max-lines-per-function
const GameMobileContent: FunctionComponent = () => {
  const { t } = useTranslation();

  const renderHotGame = (): JSX.Element => {
    const { name, description, image, icon, details } = hotGameDetail;
    return (
      <Flex vertical gap={30}>
        <div className="games-content__game-header">
          <span className="games-content__title">{t('hot_game')}</span>
          <Select value="Release Date">
            <Select.Option value="Release Date">Release Date</Select.Option>
          </Select>
        </div>
        <div className="games-content__hot-game-item">
          <img className="games-content__hot-game-img" src={image} />
          <div className="games-content__hot-game-info">
            <Flex gap={20} align="center">
              <img src={icon} />
              <Flex vertical gap={14}>
                <span className="games-content__hot-game-name">{name}</span>
                <span className="games-content__hot-game-text">
                  {description}
                </span>
              </Flex>
            </Flex>
            <Flex gap={20}>
              {map(details, ({ title, value }) => (
                <Flex key={title} vertical gap={6} flex={1}>
                  <span className="games-content__hot-game-value">{value}</span>
                  <span className="games-content__hot-game-label">{title}</span>
                </Flex>
              ))}
            </Flex>
          </div>
        </div>
      </Flex>
    );
  };

  const renderHottestCategory = (): JSX.Element => (
    <Flex vertical gap={30}>
      <span className="games-content__title">{t('hottest_category')}</span>
      <AntCarousel autoplay>
        {map(
          hotCategoryData,
          ({ id, name, description, logos, icon, image }) => (
            <div key={id} className="games-content__hot-category">
              <div className="games-content__category-left">
                <div className="games-content__category-info">
                  <img src={icon} />
                  <span className="games-content__category-name">{name}</span>
                  <span className="games-content__category-description">
                    {description}
                  </span>
                </div>
                <div className="games-content__category-logo">
                  <img src={logos[0]} />
                  <img src={logos[1]} />
                </div>
              </div>
              <div className="games-content__category-right">
                <div className="games-content__category-logo">
                  <img src={logos[2]} />
                  <img src={logos[3]} />
                </div>
                <img className="games-content__category-image" src={image} />
              </div>
            </div>
          ),
        )}
      </AntCarousel>
    </Flex>
  );

  return (
    <Flex vertical gap={30}>
      {renderHotGame()}
      {renderHottestCategory()}
    </Flex>
  );
};

export default GameMobileContent;
