import React from 'react'
import { useState,useEffect } from 'react'
import {Box, Typography} from '@mui/material'
import {Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()
  useEffect(
    () => {
      fetchFromAPI(`search?part=snippet&maxResults=50&q=${searchTerm}`)
      .then((data) => {setVideos(data.items)})
        
        }
    
    , [searchTerm])
  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' fontWeight="bold" mb={2}   sx={{color:'white',mt:2,ml:2}}>
          Search results for :<span style={{color:'#f31503'}}> {searchTerm}</span>
        </Typography>
        <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed