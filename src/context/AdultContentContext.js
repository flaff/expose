import React, { createContext, useContext, useEffect, useState } from "react"

const AdultContentContext = createContext()

export const AdultContentProvider = props => {
  const [adultContentVisible, setAdultContentVisible] = useState(false)

  useEffect(() => {
    setAdultContentVisible(!!localStorage.getItem("adultContentVisible"));
  }, []);

  const showAdultContent = () => {
    setAdultContentVisible(true)
    localStorage.setItem("adultContentVisible", true)
  }

  const context = {
    adultContentVisible,
    showAdultContent,
  }

  return <AdultContentContext.Provider {...props} value={context} />
}

export const useAdultContent = () => {
  return useContext(AdultContentContext)
}
