import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams()
  console.log(channelDetail,videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>{setChannelDetail(data?.items[0])})  ;

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>{setVideos(data?.items)})  }, [id])
  
  return (
    <Box minHeight="95vh">
        <Box>
            <div 
            style={{background: 'linear-gradient(209deg, rgba(52,74,185,1) 0%, rgba(134,21,44,1) 100%)'
            ,zIndex:10, 
            height: '300px',
            }}/>

            <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
          
        </Box>

        <Box display="flex" p="2">
            <Box sx={{mr:{sm:'100px'}}}/>
                {/* <Typography variant="h5" fontWeight="bold" color="white" mb="2">Videos</Typography> */}
                <Videos videos={videos} />

        </Box>
    </Box>
  )
}

export default ChannelDetail