import React from 'react'
import SliderImagevi from '../component/vi/common/SliderImagevi'
import CarListEn from '../component/en/common/CarListEn'
import VisitPageEn from '../component/en/common/VisitPageEn'
import NodeVisitEn from '../component/en/common/NodeVisitEn'
import NewPageEn from '../component/en/common/NewPageEn'
import ContactPageEn from '../component/en/common/ContactPageEn'
import VideoPage from '../component/vi/common/VideoPage'
import VideoPageEn from '../component/en/common/VideoPageEn'

const page = () => {
  return (
    <div>
      <SliderImagevi/>
       <div id='serviceE'>
        <CarListEn/>
       </div>
       <VisitPageEn/>
       <NodeVisitEn/>
       <div id='newen'>
        <NewPageEn/>
        <div id='contacten'>
          <ContactPageEn/>
        </div>
        <VideoPageEn/>
       </div>
    </div>
  )
}

export default page