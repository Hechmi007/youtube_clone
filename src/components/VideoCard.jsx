import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Typography, CardContent,CardMedia} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'
const VideoCard = ({video:{id:{videoId},snippet }}) => {
  return (
    <Card sx={{width:{xs:'100%',sm:'358px',md:'320px' },boxShadow:'none', borderRadius:'0' }}>
        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} component='img' 
            sx={{width:{xs:'100%',sm:'358px'},height:180}} />
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e',height:'160px'}} >
            <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
                <Typography variant='subtitle1' color='white' style={{fontWeight:'500',fontSize:'16px'}}>{snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}</Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl}>
                <Typography variant='subtitle2' color='#C8C8C8' style={{fontWeight:'300',fontSize:'16px'}}>{snippet?.channelTitle.slice(0,60) || demoVideoTitle.slice(0,60)}
                <CheckCircle style={{color:'#C8C8C8',fontSize:'12px',marginLeft:'5px'}} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard