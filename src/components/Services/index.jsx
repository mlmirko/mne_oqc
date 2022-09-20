import React from 'react'
import Icon1 from '../../images/gallery.svg'
import Icon2 from '../../images/algorithm.svg'
import Icon3 from '../../images/light-bulb.svg'
import Icon4 from '../../images/chip.svg'
import Icon5 from '../../images/surveillance.svg'
import Icon6 from '../../images/image.svg'
import Icon7 from '../../images/chip.svg'
import Icon8 from '../../images/alert.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP,ServicesS} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>FROM IDEA TO IMPLEMENTATION</ServicesH1>
      <ServicesS>Our workflow consists of two phases. The first phase happens offline, outside of the factory,
                while the second one happens within the factory. </ServicesS>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Dataset</ServicesH2>
          <ServicesP>Annotated images </ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Training AI model</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>The result model</ServicesH2>
          <ServicesP>is deployable onto an embedded system</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4}/>
          <ServicesH2>Embedded system</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5}/>
          <ServicesH2>Image collection</ServicesH2>
          <ServicesP>On the production line</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6}/>
          <ServicesH2>Image</ServicesH2>
          <ServicesP>of the product that will be checked for defect</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon7}/>
          <ServicesH2>Embedded system</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon8}/>
          <ServicesH2>Warning about defect</ServicesH2>
          <ServicesP></ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
