const MenuItem: FunctionComponent<{
  menu: App.MenuItem;
  className?: string;
}> = ({ menu, className = '' }) => (
  <NavLink className={className} to={menu.link}>
    <span>{menu.label}</span>
  </NavLink>
);

export default MenuItem;
