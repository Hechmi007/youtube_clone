import React from 'react'
import { Box,CardContent,CardMedia,Typography,Card,Stack } from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import {demoProfilePicture } from '../utils/constants'
import {Link} from 'react-router-dom'
const ChannelCard = ({channelDetail,marginTop}) => {
    console.log(channelDetail)
  return (
    <Box sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop,
      }} >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent 
            sx={{display:'flex', flexDirection:'column', justifyContent:'ceneter',textAlign:'center', color:'#fff'}}>
                <CardMedia 
                image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
                component='img' height='100px' width='100px' 
                sx={{borderRadius:'50%',height:'180px',width:'180px', mb:2, border:'1px solid #e3e3e3' }} />
            
                <Typography variant="h6">
                  {channelDetail?.snippet?.title}
                  <CheckCircle style={{color:'#C8C8C8',fontSize:'14px',ml:'5px'}} />
                </Typography>
                {channelDetail?.statistics?.subscriberCount &&(
                  <Typography>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
                  </Typography>)}

            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard