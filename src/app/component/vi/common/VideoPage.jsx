import React from 'react'

const VideoPage = () => {
  return (
    <div className=" flex  flex-col items-center p-6">
      
      {/* Tiêu đề với đường kẻ ngang */}
      <div className="w-full max-w-6xl flex items-center mb-6">
      <h2 className="font-['Playfair_Display'] font-semibold text-[#8a6d46] mb-8 text-3xl sm:text-3xl lg:text-3xl text-center lg:text-left">
          VIDEO GIỚI THIỆU
        </h2>
        
       
      </div>

      {/* Khung nhúng video */}
      <div className="w-full max-w-6xl aspect-video mb-4">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/oJWek4rXiyY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
           style={{ boxShadow: "30px 20px 20px rgba(0, 0, 0, 0.5)" }}
        ></iframe>
      </div>

    </div>
  )
}

export default VideoPage