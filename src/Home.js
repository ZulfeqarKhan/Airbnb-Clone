import React from 'react';
import Banner from './Banner';
import CitiesDistance from './CitiesDistance';
import Card from './Card';
import MiddleCard from './MiddleCard';
import './Home.css';

function Home() {
     return (
        <div className='home'>
            <Banner />

           <div className='home__cities'>
              <CitiesDistance
                src='https://a0.muscache.com/im/pictures/a0eb36e7-b468-4c5e-93b2-819e793563b2.jpg?im_q=medq&im_w=240'
                title='Hyderabad'
                dis='15-minute drive'
              />

             <CitiesDistance
                src='https://a0.muscache.com/im/pictures/bd549da5-ecdd-4642-9a4c-4943c9c8cf28.jpg?im_q=medq&im_w=240'
                title='Hampi'
                dis='5-hour drive'
              />

             <CitiesDistance
                src='https://a0.muscache.com/im/pictures/3d541658-fb05-4316-af26-b8c1337fbe8c.jpg?im_q=medq&im_w=240'
                title='Dandeli'
                dis='8-hour drive'
              />

             <CitiesDistance
                src='https://a0.muscache.com/im/pictures/ac2086c9-df0d-4085-94c0-94fe3fb94862.jpg?im_q=medq&im_w=240'
                title='Tirupati'
                dis='7.5-hour drive'
              />
           </div>
           
           <div className='home__cities'>
             <CitiesDistance
                src='https://a0.muscache.com/im/pictures/0810e005-87d3-4188-b95c-2d7fa2fc957b.jpg?im_q=medq&im_w=240'
                title='Chandrapur'
                dis='6-hour drive'
              />

             <CitiesDistance
                src='https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240'
                title='Kolhapur'
                dis='7-hour drive'
              />

             <CitiesDistance
                src='https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240'
                title='Vikarabad'
                dis='1.5-hour drive'
              />

             <CitiesDistance
                src='https://a0.muscache.com/im/pictures/8340bd19-ee32-4669-8b10-a8ac7e7735d4.jpg?im_q=medq&im_w=240'
                title='Aurangabad'
                dis='7-hour drive'
              />
           </div>
             
             <h1>Live anywhere</h1>
             <div className="home__section">
               <Card
                  src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
                  title="Entire homes"  
               />

               <Card
                 src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
                 title="Cabins and cottages"   
               />

               <Card
                  src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320"
                  title="Unique stays" 
                />

               <Card
                 src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=320"
                 title="Pets welcome"   
                />
             </div>
            
             <div className="home__middleCard">
                <h1>Online Experiences for the festive season</h1>
                <h4>Interactive activities we can do together, led by one-of-a-kind hosts.</h4> 
               <div className="home__section">
                 <MiddleCard
                   src='https://a0.muscache.com/im/pictures/b4322ff0-aea5-4e66-a957-8fea56be7bab.jpg?im_q=lowq&im_w=720'
                   title='Cook pasta at home with Italian grandmas'
                 />

                 <MiddleCard
                    src='https://a0.muscache.com/im/pictures/lombard/MtTemplate-1671726-media_library/original/6df89cb7-d4de-4ea7-a3b4-71c315486992.jpg?im_w=480'
                    title='Go on an adventure from your living room'
                  />

                 <MiddleCard
                    src='https://a0.muscache.com/im/pictures/lombard/MtTemplate-1692855-active_media/original/cb908573-2b95-4390-96fe-41aa3288ad2a.jpg?im_w=320'
                    title='Enjoy a concert with jazz musicians'
                  />
               </div>
            </div>
             
             <h1>Join millions of hosts on Airbnb</h1>
             <div className="home__section">
                <Card
                   src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?aki_policy=large"
                   title="Host your home"   
                />

                <Card 
                  src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?aki_policy=large"
                  title="Host an Online Experience"     
                />

               <Card
                  src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?aki_policy=large"
                  title="Host an Experience"  
                />
             </div>     
        </div>
    );
}

export default Home;
