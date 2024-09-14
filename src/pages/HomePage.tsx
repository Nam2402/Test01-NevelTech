const HomePage: FunctionComponent = () => {
  return (
    <>
      <Translation>
        {(t) => (
          <Helmet>
            <title>{t('sign_in')}</title>
          </Helmet>
        )}
      </Translation>
    </>
  );
};

export default HomePage;
