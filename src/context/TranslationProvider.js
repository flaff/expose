import React, { createContext, useMemo, useContext, useCallback } from 'react';

const SimpleTranslationContext = createContext({
  translationMap: {}
});

export const SimpleTranslationProvider = ({ translationNodes, ...otherProps }) => {
  const translationMap = useMemo(() => {
    const map = {};
    if (translationNodes) {
      translationNodes.forEach(({ key, translation }) => {
          map[key] = translation;
      });
    }
    return map;
  }, [translationNodes]);

  const value = useMemo(() => ({
    translationMap
  }), [translationMap]);

  return <SimpleTranslationContext.Provider {...otherProps} value={value} />;
};

export const useSimpleTranslation = () => {
  const { translationMap } = useContext(SimpleTranslationContext);

  return useCallback((keyOrTranslation) => {
    if (keyOrTranslation?.t) {
      return keyOrTranslation.t;
    }

    return translationMap?.[keyOrTranslation]?.t || keyOrTranslation;
  }, [translationMap]);
}