import Sliders from '../../components/Home/Slider/slider';
import React, { useState } from 'react';
import Films from '../../components/Home/Film/film';
import Times from '../../components/Home/Time/time';
import Character from '../../components/Home/Character/character';
const products = [
    {
        image: require('../../images/home/cate1.png'),
        mark: 4.5,
        name: 'Spiderman',
        comment: 'Mavel Comics',
        price: '$ 17.00',
    },
    {
        image: require('../../images/home/cate2.png'),
        mark: 4.5,
        name: 'Avenger',
        comment: 'Mavel Comics',
        price: '$ 17.00',
    },
    {
        image: require('../../images/home/cate3.png'),
        mark: 2.1,
        name: 'Guardian',
        comment: 'Mavel Comics',
        price: '$ 15.00',
    },
    {
        image: require('../../images/home/cate4.png'),
        mark: 3.5,
        name: 'Hulk',
        comment: 'Mavel Comics',
        price: '$ 16.00',
    },
];
const timeComing = [
    {
        image: require('../../images/home/cate1.png'),
        time: 'February 2022',
        color: '#F44E4E',
    },
    {
        image: require('../../images/home/avg2_2.png'),
        time: 'March 2022',
        color: '#4C6DE1',
    },
    {
        image: require('../../images/home/cate4.png'),
        time: 'April 2022',
        color: '#41A545',
    },
];
const characters = [
    {
        image: require('../../images/home/cha1.png'),
        name: 'Spiderman',
    },
    {
        image: require('../../images/home/cha2.png'),
        name: 'Wolverine',
    },
    {
        image: require('../../images/home/cha3.png'),
        name: 'Iron-Man',
    },
    {
        image: require('../../images/home/cha4.png'),
        name: 'Captain America',
    },
    {
        image: require('../../images/home/cha5.png'),
        name: 'Captain Marvel',
    },
];
function Home() {
    const [films, setFilms] = useState(products);
    const [times, setTimes] = useState(timeComing);
    const [chars, setChar] = useState(characters);

    const Displayfilm = () => {
        useState(films);
    };
    const Displaytime = () => {
        useState(times);
    };
    const Displaychar = () => {
        useState(chars);
    };
    return (
        <>
            <Sliders />,
            <Films films={films} />
            <Times times={times} />
            <Character chars={characters} />
        </>
    );
}

export default Home;
