const HomePage: FunctionComponent = () => {
  return (
    <>
      <Translation>
        {(t) => (
          <Helmet>
            <title>{t('home')}</title>
          </Helmet>
        )}
      </Translation>
    </>
  );
};

export default HomePage;
