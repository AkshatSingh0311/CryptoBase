import './App.css';
import image from './assets/courses.png'
import articles from './assets/articles.png'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Learn = () => {
    return (
        <div className='learnbody'>
            <div className='learnheading'>
                <p>Questions About Cryptocurrency?<br/> Here Are Your Answers</p>
            </div>
            <hr className='learnline'/>
            <div className='questions'>
                <div className='question'>1. What are Cryptocurrencies?</div>
                <div className='answer'>aliquam elit. Morbi dignissim nulla vel pharetra mollis. jwhbejhcbjenvjcnejnvjknerjvjer
                        Sed fringilla fringilla urna.ehbhjcejnvjknerjnjknvjn3hvghvgbchnejnckencv
                        jbdcbhencjenjnvkjrenvknkjvbhjrerehjrrer</div>
            </div>
            <div className='questions'>
                <div className='question'>2. Beyond the method of payment ,what are other functions of cryptocurrencies?</div>
                <div className='answer'>aliquam elit. Morbi dignissim nulla vel pharetra mollis. jwhbejhcbjenvjcnejnvjknerjvjer
                        Sed fringilla fringilla urna.ehbhjcejnvjknerjnjknvjn3hvghvgbchnejnckencv
                        jbdcbhencjenjnvkjrenvknkjvbhjrerehjrrer</div>
            </div>
            <div className='questions'>
                <div className='question'>3. How are cryptocurrency transactions recorded? </div>
                <div className='answer'>aliquam elit. Morbi dignissim nulla vel pharetra mollis. jwhbejhcbjenvjcnejnvjknerjvjer
                        Sed fringilla fringilla urna.ehbhjcejnvjknerjnjknvjn3hvghvgbchnejnckencv
                        jbdcbhencjenjnvkjrenvknkjvbhjrerehjrrer</div>
            </div>
            <div className='questions'>
                <div className='question'>3. How are cryptocurrency transactions recorded? </div>
                <div className='answer'>aliquam elit. Morbi dignissim nulla vel pharetra mollis. jwhbejhcbjenvjcnejnvjknerjvjer
                        Sed fringilla fringilla urna.ehbhjcejnvjknerjnjknvjn3hvghvgbchnejnckencv
                        jbdcbhencjenjnvkjrenvknkjvbhjrerehjrrer</div>
            </div>
            <div className='questions'>
                <div className='question'>3. How are cryptocurrency transactions recorded? </div>
                <div className='answer'>aliquam elit. Morbi dignissim nulla vel pharetra mollis. jwhbejhcbjenvjcnejnvjknerjvjer
                        Sed fringilla fringilla urna.ehbhjcejnvjknerjnjknvjn3hvghvgbchnejnckencv
                        jbdcbhencjenjnvkjrenvknkjvbhjrerehjrrer</div>
            </div>
            <div className='questions'>
                <div className='question'>3. How are cryptocurrency transactions recorded? </div>
                <div className='answer'>aliquam elit. Morbi dignissim nulla vel pharetra mollis. jwhbejhcbjenvjcnejnvjknerjvjer
                        Sed fringilla fringilla urna.ehbhjcejnvjknerjnjknvjn3hvghvgbchnejnckencv
                        jbdcbhencjenjnvkjrenvknkjvbhjrerehjrrer</div>
            </div>
            <div className='recommended'>
                <div className='recommendedheading'>Recommended</div>
            <div className='recommendedcards'>

            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Types of Cryptocurrencies
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>

            </Card>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Types of Cryptocurrencies
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            
            </Card>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Types of Cryptocurrencies
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            </Card></div>
    
            </div>     
            <div className='recommended'>
                <div className='recommendedheading'>Courses Offered</div>
            <div className='recommendedcards'>

            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={articles}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Learn about Trading
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography><hr></hr>
                <Typography variant="body2" color="text.secondary">
                <b>Time Required: 6 hours</b></Typography>
            </CardContent>

            </Card>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={articles}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Learn about Trading
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography><hr></hr>
                <Typography variant="body2" color="text.secondary">
                <b>Time Required: 6 hours</b></Typography>
            </CardContent>
            
            </Card>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={articles}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Learn about Trading
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography><hr></hr>
                <Typography variant="body2" color="text.secondary" >
                <b>Time Required: 6 hours</b></Typography>
            </CardContent>
            </Card></div>
            <br></br>
            <br></br>
            </div>      
        </div>
    );
}

export default Learn;