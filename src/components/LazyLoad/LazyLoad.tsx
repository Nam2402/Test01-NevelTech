const renderFallback = (fallback: boolean, loader?: ReactNode): ReactNode => {
  const preloader = loader ? loader : null;
  if (fallback) {
    return preloader;
  }
  return <></>;
};

const lazyloadComponent = (
  component: <T>() => Promise<{ default: ComponentProps<ComponentType<T>> }>,
  fallback?: boolean,
  loader?: ReactNode,
) => {
  const LazyComponent = lazy(component);

  return (props: ComponentProps<ComponentType<App.Any>>) => (
    <Suspense fallback={renderFallback(fallback, loader)}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export function lazyload(
  component: () => Promise<{ default: ComponentProps<ComponentType<App.Any>> }>,
) {
  return lazyloadComponent(component);
}

export function lazyloadWithLoader(
  component: () => Promise<{ default: ComponentProps<ComponentType<App.Any>> }>,
  loader?: ReactNode,
) {
  return lazyloadComponent(component, true, loader);
}
