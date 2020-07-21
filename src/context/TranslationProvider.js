import React, { createContext, useMemo, useContext, useCallback } from "react"

const SimpleTranslationContext = createContext({
  translationMap: {},
})

export const SimpleTranslationProvider = ({
  translationNodes,
  ...otherProps
}) => {
  const translationMap = useMemo(() => {
    const map = {}
    translationNodes && translationNodes.forEach(({ key, translation }) => {
      map[key] = translation
    })
    return map
  }, [translationNodes])

  const value = useMemo(() => ({ translationMap }), [translationMap])

  return <SimpleTranslationContext.Provider {...otherProps} value={value} />
}

export const useSimpleTranslation = () => {
  const { translationMap } = useContext(SimpleTranslationContext)

  const t = useCallback(
    keyOrTranslation => {
      return (
        keyOrTranslation?.t ||
        translationMap?.[keyOrTranslation]?.t ||
        keyOrTranslation
      )
    },
    [translationMap]
  )

  return { t };
}
