const HomePage = lazyloadWithLoader(() => import('pages/HomePage'));
const DashboardPage = lazyloadWithLoader(() => import('pages/DashboardPage'));

export default [
  {
    path: '/',
    element: <DashboardPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
];
