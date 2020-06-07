import React, { createContext, useContext } from 'react';

const PageContextContext = createContext();

export const PageContextProvider = ({ pageContext, ...otherProps }) => {
  return <PageContextContext.Provider {...otherProps} value={pageContext} />;
};

export const usePageContext = () => {
  return useContext(PageContextContext);
} 