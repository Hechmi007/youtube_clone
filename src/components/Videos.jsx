import React from 'react'
import {Stack,Typography,Box} from '@mui/material'
import {VideoCard,ChannelCard} from './'

const Videos = ({videos , direction}) => {
if(!videos?.length) return 'Loading ...'
    return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}  >
        {videos.map((item,index) =>(
           (item.id.videoId || item.id.channelId)&& <Box key={index}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
        ) )}
    </Stack>
  )
}

export default Videos