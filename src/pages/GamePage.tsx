import GameContainer from 'containers/GameContainer';

const GamePage: FunctionComponent = () => {
  return (
    <>
      <Translation>
        {(t) => (
          <Helmet>
            <title>{t('games')}</title>
          </Helmet>
        )}
      </Translation>
      <GameContainer />
    </>
  );
};

export default GamePage;
