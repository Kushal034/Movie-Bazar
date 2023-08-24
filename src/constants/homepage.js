

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


// const HomePage = () => {
//   const [movieData,setMovieData] = useState();
//   const options = {
//     method: "GET",
//     url: "https://imdb-top-100-movies.p.rapidopi.com/",
//     headers:{
//       "X-RapidAPI-Key":"4ccee5bd54msh4f6d603d7e7458ep1bf7fcjsn700bc0b768",
//       "X-RapidAPI-Host":"imdb-top-100-movies.p.rapiddopi.com",
//     },


  
// };
// async function getMoviesData(){
//   try{
//     const response = await axios.request(options);
//     console.log(response.data);
//     setMovieData(response.data);
//   }
//   catch(error){
//     console.error(error);
//   }
// }
// useEffect(() => {
//   getMoviesData();
// },[]);




 function MediaCard() {

  return (<>
  <h1>Freatured Movies</h1>
  
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 370 }}
    image='https://media5.bollywoodhungama.in/wp-content/uploads/2021/10/Gadar-2-1-306x393.jpg'
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Gadar 2
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Gadar 2 the Katha Continues is scheduled to release on 11 August 2023 this independence day weekend. The film is the sequel to Gadar which was ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
     <Card sx={{ maxWidth: 345 }}>
     <CardMedia
       sx={{ height: 370 }}
   image='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTb2FlLpwV8OUSH4-MWFp8_IyD5YUwKHR9gQBMDNsXspZqQ2MbRMFcNyWzg'
   
   
       title="green iguana"
     />
     <CardContent>
     
       <Typography gutterBottom variant="h5" component="div">
         OMG 2
       </Typography>
       <Typography variant="body2" color="text.secondary">
       OMG 2  Directed by Amit Rai. With Pankaj Tripathi, Akshay Kumar, Yami Gautam, Pawan Malhotra. An unhappy civilian asks the court to mandate comprehensive ...
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small">Share</Button>
       <Button size="small">Learn More</Button>
     </CardActions>
   </Card>



   <Card sx={{ maxWidth: 345 }}>
     <CardMedia
       sx={{ height: 370 }}
   image='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJY489aCEFL_WgjufJtffiQO2s_kxw2PpfJT-UHcDNHdVqO1mi-23qj74'
   
   
   
   
       title="green iguana"
     />
     <CardContent>
     
       <Typography gutterBottom variant="h5" component="div">
        RRR
       </Typography>
       <Typography variant="body2" color="text.secondary">
        RRR A fictitious story about two legendary revolutionaries and their journey away from home before they started ... A fictitious story about two legendary ...
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small">Share</Button>
       <Button size="small">Learn More</Button>
     </CardActions>
   </Card>
   

   <Card sx={{ maxWidth: 345 }}>
     <CardMedia
       sx={{ height: 370 }}
   image='https://www.kerala9.com/wp-content/uploads/2022/04/kgf-chapter-2-photos-hd-1536x1152.jpg'
   
   
       title="green iguana"
     />
     <CardContent>
     
       <Typography gutterBottom variant="h5" component="div">
        KGF 2
       </Typography>
       <Typography variant="body2" color="text.secondary">
       KGF 2 is overrated. Only Sanjay Dutt made it look like a real gangster movie, rest everything was in slow motion, too much heroic shots for the hero, ...
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small">Share</Button>
       <Button size="small">Learn More</Button>
     </CardActions>
   </Card>
   



   <Card sx={{ maxWidth: 345 }}>
     <CardMedia
       sx={{ height: 370 }}
   image='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfFwVAQVHDRRzLj-iKQ7KbxVEyfPDF1c91BYlZYWL7oTol5Qp0qcyo6bSA'
   
   
       title="green iguana"
     />
     <CardContent>
     
       <Typography gutterBottom variant="h5" component="div">
       Saint Omer
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Saint Omer https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQfFwVAQVHDRRzLj-iKQ7KbxVEyfPDF1c91BYlZYWL7oTol5Qp0qcyo6bSA
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small">Share</Button>
       <Button size="small">Learn More</Button>
     </CardActions>
   </Card>
   
 
    </>
  
 
      
  );
 }



export default MediaCard;


