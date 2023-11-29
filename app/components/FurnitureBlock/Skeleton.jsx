import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    speed={10}
    width={320}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#7f7171"
    {...props}
  >
    <rect x="15" y="0" rx="100" ry="100" width="225" height="225" />
    <rect x="15" y="252" rx="11" ry="11" width="250" height="20" />
    <rect x="15" y="290" rx="13" ry="13" width="250" height="20" />
    <rect x="25" y="328" rx="15" ry="15" width="100" height="20" />
    <rect x="134" y="353" rx="0" ry="0" width="0" height="18" />
    <rect x="149" y="328" rx="15" ry="15" width="100" height="20" />
  </ContentLoader>
);


export default Skeleton;
