import React from 'react'
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
            <FeatureBox image={featureimage} title='Health'/>
            <FeatureBox image={featureimage1} title='Take Record of Medicine'/>
            <FeatureBox image={featureimage2} title='Easy Details'/>
        </div>
    </div>
  )
}

export default Feature
