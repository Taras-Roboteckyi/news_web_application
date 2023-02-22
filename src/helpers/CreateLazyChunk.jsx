import { lazy } from 'react';

export const CreateLazyChunk = (pageName, route) => {
  return lazy(() =>
    import(`../views/${route}`).then(module => ({
      default: module[pageName],
    })),
  );
};
