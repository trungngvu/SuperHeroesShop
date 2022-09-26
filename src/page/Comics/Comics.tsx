import React, { useState } from 'react';
import Filter from '../../components/Comics/Filter/filter';
import Films from '../../components/Home/Film/film';

function Comics() {
    const [films, setFilms] = useState([
        {
            image: require('../../images/home/cate1.png'),
            mark: 4.5,
            name: 'Spiderman',
            comment: 'Mavel Comics',
            price: 17,
        },
        {
            image: require('../../images/home/cate2.png'),
            mark: 4.5,
            name: 'Avenger',
            comment: 'Mavel Comics',
            price: 17,
        },
        {
            image: require('../../images/home/cate3.png'),
            mark: 2.1,
            name: 'Guardian',
            comment: 'Mavel Comics',
            price: 15,
        },
        {
            image: require('../../images/home/cate4.png'),
            mark: 3.5,
            name: 'Hulk',
            comment: 'Mavel Comics',
            price: 16.0,
        },
        {
            image: require('../../images/home/cate1.png'),
            mark: 4.5,
            name: 'Spiderman',
            comment: 'Mavel Comics',
            price: 17,
        },
        {
            image: require('../../images/home/cate2.png'),
            mark: 4.5,
            name: 'Avenger',
            comment: 'Mavel Comics',
            price: 17,
        },
        {
            image: require('../../images/home/cate3.png'),
            mark: 2.1,
            name: 'Guardian',
            comment: 'Mavel Comics',
            price: 15,
        },
        {
            image: require('../../images/home/cate4.png'),
            mark: 3.5,
            name: 'Hulk',
            comment: 'Mavel Comics',
            price: 16.0,
        },
        {
            image: require('../../images/home/cate1.png'),
            mark: 4.5,
            name: 'Spiderman',
            comment: 'Mavel Comics',
            price: 17,
        },
        {
            image: require('../../images/home/cate2.png'),
            mark: 4.5,
            name: 'Avenger',
            comment: 'Mavel Comics',
            price: 17,
        },
        {
            image: require('../../images/home/cate3.png'),
            mark: 2.1,
            name: 'Guardian',
            comment: 'Mavel Comics',
            price: 15,
        },
        {
            image: require('../../images/home/cate4.png'),
            mark: 3.5,
            name: 'Hulk',
            comment: 'Mavel Comics',
            price: 16.0,
        },
        {
            image: require('../../images/home/cate1.png'),
            mark: 4.5,
            name: 'Spiderman',
            comment: 'Mavel Comics',
            price: 17,
        },
        {
            image: require('../../images/home/cate2.png'),
            mark: 4.5,
            name: 'Avenger',
            comment: 'Mavel Comics',
            price: 17,
        },
        {
            image: require('../../images/home/cate3.png'),
            mark: 2.1,
            name: 'Guardian',
            comment: 'Mavel Comics',
            price: 15,
        },
        {
            image: require('../../images/home/cate4.png'),
            mark: 3.5,
            name: 'Hulk',
            comment: 'Mavel Comics',
            price: 16.0,
        },
    ]);
    return (
        <>
            <div style={{ height: '66.5px' }}></div>
            <Filter />
            <Films films={films}></Films>
        </>
    );
}

export default Comics;
