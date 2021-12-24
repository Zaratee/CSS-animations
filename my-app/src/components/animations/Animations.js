import React from 'react'
import Origin from './origin/Origin'
import Rotate from './rotate/Rotate'
import Scale from './scale/Scale'
import Skew from './skew/Skew'
import TimeLine from './timeLine/TimeLine'
import Translate from './translate/Translate'
function Animations() {
    return (

        <div className='animations'>
            <div className='animations-title'>
                CSS Animations
            </div>
            <hr className='hr-animations'/>
            <div className='animation-container'>
                <div className='animation-card primary-card'>
                    <Rotate/>
                </div>
                <div className='animation-card secondary-card'>
                    <Skew/>
                </div>
                <div className='animation-card success-card'>
                    <Scale/>
                </div> 
                <div className='animation-card purple-card'>
                    <Translate/>
                </div> 
                <div className='animation-card red-card'>
                    <Origin/>       
                </div> 
                <div className='animation-card dark-card'>
                    <TimeLine/>       
                </div> 
            </div>
            
        </div>
    )
}

export default Animations
