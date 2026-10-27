import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageRoute = '/' | '/about' | '/projects' | '/services' | '/experience' | '/contact';

interface RouterContextType {
  currentPath: PageRoute;
  navigate: (to: PageRoute) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getPath = (): PageRoute => {
    if (typeof window === 'undefined') return '/';
    const hash = window.location.hash.replace('#', '');
    if (hash === 'about' || hash === '/about') return '/about';
    if (hash === 'projects' || hash === '/projects') return '/projects';
    if (hash === 'services' || hash === '/services') return '/services';
    if (hash === 'experience' || hash === '/experience') return '/experience';
    if (hash === 'contact' || hash === '/contact') return '/contact';

    const pathname = window.location.pathname;
    if (pathname === '/about') return '/about';
    if (pathname === '/projects') return '/projects';
    if (pathname === '/services') return '/services';
    if (pathname === '/experience') return '/experience';
    if (pathname === '/contact') return '/contact';
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<PageRoute>(getPath());

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getPath());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (to: PageRoute) => {
    setCurrentPath(to);
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', to === '/' ? '/' : `#${to.replace('/', '')}`);
    } else {
      window.location.hash = to.replace('/', '');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
