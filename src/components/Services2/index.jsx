import React from 'react'
import Icon1 from '../../images/number-1.svg'
import Icon2 from '../../images/number-2.svg'
import Icon3 from '../../images/number-3.svg'
import Icon4 from '../../images/number-4.svg'
import Icon5 from '../../images/number-5.svg'
import Icon6 from '../../images/number-6.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP,ServicesS} from './Service2Elements'

const Services2 = () => {
  return (
    <ServicesContainer id='services2'>
      <ServicesH1>WHY CHOOSE US?</ServicesH1>
      <ServicesS></ServicesS>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          {/* <ServicesH2>Dataset</ServicesH2> */}
          <ServicesP>We deliver services for various types of industries. </ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          {/* <ServicesH2>Training AI model</ServicesH2> */}
          <ServicesP>Our AI Asset can be integrated into a larger IoT system in a factory. </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          {/* <ServicesH2>The result model</ServicesH2> */}
          <ServicesP>We help with image annotation.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4}/>
          {/* <ServicesH2>Image collection</ServicesH2> */}
          <ServicesP>The developed model can start with as few as 50 annotated images. </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5}/>
          {/* <ServicesH2>Image</ServicesH2> */}
          <ServicesP>We provide all documentation, user manuals and tutorials.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6}/>
          {/* <ServicesH2>Embedded system</ServicesH2> */}
          <ServicesP>GUI can be adapted to clients needs. </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services2
