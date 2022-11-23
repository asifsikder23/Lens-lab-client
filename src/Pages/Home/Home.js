import React from 'react';
import AdvertiseItem from './AdvertiseItems/AdvertiseItem';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItem></AdvertiseItem>
            <Categories></Categories>
        </div>
    );
};

export default Home;