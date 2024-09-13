import HomeContainer from 'containers/HomeContainer';

const SignInPage: FunctionComponent = () => {
  return (
    <>
      <Translation>
        {(t) => (
          <Helmet>
            <title>{t('sign_in')}</title>
          </Helmet>
        )}
      </Translation>
      <HomeContainer />
    </>
  );
};

export default SignInPage;
