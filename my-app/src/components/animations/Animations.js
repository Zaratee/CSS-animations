import React from 'react'
import Rotate from './rotate/Rotate'

function Animations() {
    return (
        <div className='animations'>
            <div className='animations-title'>
                CSS Animations
            </div>
            <hr className='hr-animations'/>
            <div className='animation-container'>
                <div className='animation-card'>
                    <Rotate/>
                </div>
                <div className='animation-card'>
                    bns
                </div>
                                
            </div>
            
        </div>
    )
}

export default Animations
