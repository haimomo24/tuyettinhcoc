import React from 'react'
import SliderImagevi from '../component/vi/common/SliderImagevi'
import CarListvi from '../component/vi/common/CarListvi'
import VisitPage from '../component/vi/common/VisitPage'
import NodeVisit from '../component/vi/common/NodeVisit'
import NewPagevi from '../component/vi/common/NewPagevi'
import ContactPage from '../component/vi/common/ContactPage'
import VideoPage from '../component/vi/common/VideoPage'

const page = () => {
  return (
    <div>
        <SliderImagevi/>
        <div id='service'>
        <CarListvi/>
        </div>
        
        <VisitPage/>
        <NodeVisit/>
        
        <div id='new'>
        <NewPagevi/>
        </div>
        <div id='contact'>
          <ContactPage/>
          </div>
        <VideoPage/>
        
        
        
    </div>
  )
}

export default page