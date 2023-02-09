import React from "react"
const Image = ({ src, alt, isLocal = false, className }) => {
  const apiURL = process.env.GATSBY_API_URL
  if (isLocal) {
    return <img src={src} alt={alt} className={className} />
  } else return <img src={apiURL+src} alt={alt} className={className} />
}

export default Image
