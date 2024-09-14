const HomePage = lazyloadWithLoader(() => import('pages/HomePage'));
const DashboardPage = lazyloadWithLoader(() => import('pages/DashboardPage'));
const GamePage = lazyloadWithLoader(() => import('pages/GamePage'));

export default [
  {
    path: '/',
    element: <DashboardPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/games',
        element: <GamePage />,
      },
      {
        path: '/news',
        element: <HomePage />,
      },
      {
        path: '/math',
        element: <HomePage />,
      },
      {
        path: '/company',
        element: <HomePage />,
      },
      {
        path: '/events',
        element: <HomePage />,
      },
      {
        path: '/partners',
        element: <HomePage />,
      },
    ],
  },
];
