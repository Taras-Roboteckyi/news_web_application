import { lazy } from 'react';

export const CreateLazyChunk = (pageName: string, route: string) => {
  return lazy(() =>
    import(`../views/${route}`).then(module => ({
      default: module[pageName],
    })),
  );
};
