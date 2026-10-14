import { lazy, Suspense } from 'react';

const Services = lazy(() => import('./Services.jsx'));

const ServicesRoute = () => (
  <Suspense fallback={<div className="min-h-[60vh] bg-[var(--bg-primary)]" />}>
    <Services />
  </Suspense>
);

export default ServicesRoute;
