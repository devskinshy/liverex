import React from 'react';

const SocialIcon = ({sns, size, ...props}) => {
  return (
    <img src={`/assets/sns/${sns}.svg`} width={size} height={size} {...props}/>
  );
};

export default SocialIcon;