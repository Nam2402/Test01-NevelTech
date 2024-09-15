import useCheckScreen from 'hooks/use-check-screen';

const DashboardLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const isMobileScreen = useCheckScreen();

  return (
    <div className="dashboard-layout">
      {!isMobileScreen && <Header />}
      <div className="dashboard-layout__main">{children}</div>
    </div>
  );
};

export default DashboardLayout;
