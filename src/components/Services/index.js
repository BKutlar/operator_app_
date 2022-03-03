import React from 'react';
import Icon1 from '../../images/Contact.svg'
import  {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from './ServicesElement';

const Services = () => {
  return (
   <>
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Contact</ServicesH2>
                <ServicesP>Do you need help ? Do you want use contact services for any problems ?</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
   </>
  )
}

export default Services