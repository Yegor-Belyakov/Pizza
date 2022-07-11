import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <circle cx="136" cy="136" r="125" /> 
    <rect x="0" y="296" rx="10" ry="10" width="280" height="26" /> 
    <rect x="1" y="342" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="446" rx="10" ry="10" width="122" height="45" /> 
    <rect x="205" y="471" rx="0" ry="0" width="2" height="6" /> 
    <rect x="155" y="446" rx="26" ry="26" width="122" height="45" />
  </ContentLoader>
)

export default Skeleton