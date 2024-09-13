import 'config/i18n';
import router from './AppRoutes';

const Application: FunctionComponent = () => (
  <StrictMode>
    <HelmetProvider>
      <ConfigProvider>
        <RouterProvider router={createBrowserRouter(router)} />
      </ConfigProvider>
    </HelmetProvider>
  </StrictMode>
);

export default Application;
