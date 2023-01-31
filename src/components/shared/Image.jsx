import React from "react"
const Image = ({ src, alt, isLocal = false, className }) => {
  const strapiURL = process.env.STRAPI_API_URL
  if (isLocal) {
    return <img src={src} alt={alt} className={className} />
  } else return <img src={strapiURL+src} alt={alt} className={className} />
}

export default Image
