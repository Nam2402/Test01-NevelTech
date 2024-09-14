const DashboardLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="dashboard-layout">
      <Header />
      <div className="dashboard-layout__main">{children}</div>
    </div>
  );
};

export default DashboardLayout;
