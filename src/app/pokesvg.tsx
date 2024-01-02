import React, { FunctionComponent, SVGProps } from 'react';

type SvgsProps = {
    svg: string;
  };


  const Svgs: React.FC<SvgsProps> = ({ svg }) => {


return(
<div>
<img src={svg} alt="" />










</div>
)};


export default Svgs;