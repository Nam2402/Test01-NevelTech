const DashboardLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="dashboard-layout">
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
