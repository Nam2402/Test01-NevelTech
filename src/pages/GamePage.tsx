import useCheckScreen from 'hooks/use-check-screen';
import GameContainer from 'containers/GameContainer';
import GameMobileContainer from 'containers/GameMobileContainer';

const GamePage: FunctionComponent = () => {
  const isMobileScreen = useCheckScreen();

  return (
    <>
      <Translation>
        {(t) => (
          <Helmet>
            <title>{t('games')}</title>
          </Helmet>
        )}
      </Translation>
      {isMobileScreen ? <GameMobileContainer /> : <GameContainer />}
    </>
  );
};

export default GamePage;
