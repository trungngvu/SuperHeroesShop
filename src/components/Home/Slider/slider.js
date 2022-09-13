import { Image } from 'react-native';
import styles from './slider.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Sliders() {
    return (
        <div className={cx('slider')}>
            <img className={cx('slider_img')} src={require('../../../images/home/bg.png')} />
            <div className={cx('cover')}>
                <h1 className={cx('title')}>
                    All Mavel Comics <br /> in one place
                </h1>
                <p className={cx('content')}>
                    Welcome to Super-Heroes Shop specialized in Marvel Comics. You
                    <br /> will find in the shelves of our shop all your favorite super heroes:
                    <br /> Spider-Man, Iron Man, Avengers, X-men, Fanstastic 4...
                </p>
                <div className={cx('search')}>
                    <input type="text" placeholder="Find comics..." className={cx('search-input')} />
                    <i className={cx('search_icon fa-solid', 'fa-magnifying-glass')}></i>
                </div>
                <h2 className={cx('memo')}>
                    “With great power comes great <br /> responsibility”
                </h2>
                <p className={cx('conment')}>Benjamin Parker (aka Uncle Ben)</p>
                <div className={cx('slider-poster')}>
                    <img
                        src={require('../../../images/home/avg4.png')}
                        alt=""
                        className={cx('slider-poster_img', ' slider-poster_img4')}
                    />
                    <img
                        src={require('../../../images/home/avg3.png')}
                        alt=""
                        className={cx('slider-poster_img', 'slider-poster_img3')}
                    />
                    <img
                        src={require('../../../images/home/avg2.png')}
                        alt=""
                        className={cx('slider-poster_img', 'slider-poster_img2')}
                    />
                    <img src={require('../../../images/home/avg1.png')} alt="" className={cx('slider-poster_img')} />
                    <div className={cx('slider_infor')}>
                        <h2 className={cx('slider_infor-title')}>Avengers Univers</h2>
                        <p className={cx('slider_infor-content')}>
                            Dernier round pour déterminer qui parmi les <br />
                            Avengers sera le nouvel hôte du Phénix, dans les
                            <br /> deux derniers chapitres de la saga Voici le Phénix !
                            <br /> Et un Donald Blake devenu fou affronte Jane
                            <br /> Foster, son ancien amour, devenue Valkyrie !
                        </p>
                        <button className={cx('slider_infor-button')}>See details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sliders;
