import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchPageResults from './SearchPageResults';

function SearchPage() {
    return (
        <div className='searchPage'>
            
            <div className="searchPage__info">
                <p>210 stays</p>
                <h1>Places to stay near you</h1>
                <Button variant='outlined'>Cancellation flexibility</Button>
                <Button variant='outlined'>Type of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Instant Book</Button>
                <Button variant='outlined'>More filters</Button>
            </div>
         
            <SearchPageResults
                img="https://images2.minutemediacdn.com/image/upload/c_crop,h_1191,w_2121,x_0,y_223/f_auto,q_auto,w_1100/v1555272928/shape/mentalfloss/50569-istock-486178472.jpg"
                location="Private room in center of Hyderabad"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.7}
                price="₹830 / night"
                total="₹2,117 total"
            />

            <SearchPageResults
                img="https://www.bedbreakfast.ee/wp-content/uploads/2016/10/hotel-room.jpg"
                location="Private room in center of Hyderabad"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="₹940 / night"
                total="₹3,157 total"
            />

            <SearchPageResults
                img="https://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg"
                location="Private room in center of Hyderabad"
                title="Hyderabad Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="₹735 / night"
                total="₹2,070 total"
            />

            <SearchPageResults
                img="https://www.weddingwishlist.com/wedding-vendors/wp-content/uploads/2017/03/5816aa.jpg"
                location="Private room in center of Hyderabad"
                title="30 mins to Mehdipatnam, Hyderabad"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="₹955 / night"
                total="₹3,250 total"
            />

            <SearchPageResults
                img="https://casinossale.com/wp-content/uploads/2019/09/28677F5200000578-3071676-The_specially_designed_Shangri_La_Bed_in_the_suite_usies_patente-a-46_1431007891667.jpg"
                location="Private room in center of Hyderabad"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={4.9}
                price="₹999 / night"
                total="₹3,450 total"
            />

            <SearchPageResults
                img="https://s3-ap-southeast-1.amazonaws.com/blog-ph/wp-content/uploads/2016/08/12091311/luxury-hotel.jpg"
                location="Private room in center of Hyderabad"
                title="The Blue Room In Hyderabad"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                star={4.2}
                price="₹765 / night"
                total="₹2,800 total"
            />

            <SearchPageResults
                img="https://www.berjayahotel.com/sites/default/files/hotel-category-offers/kualalumpur/offers-room-berjaya-times-square-hotel-kuala-lumpur.jpg"
                location="Private room in center of Hyderabad"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.8}
                price="₹900 / night"
                total="₹3,050 total"
            />
      </div>
    )
}

export default SearchPage;
