import styles from './film.module.scss';
import { Image } from 'react-native';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Films({ films }) {
    return (
        <div className={cx('app-container')}>
            <div className={cx('grid')}>
                <h1 className={cx('container-title')}>Latest releases</h1>
                <div className={cx('grid_row')}>
                    {films.map((film, index) => (
                        <div key={index} className="grid_column">
                            <div className={cx('category')}>
                                <div className={cx('category_img-link')}>
                                    <img className={cx('category_img')} src={films[index].image} />
                                    <div className={cx('catogory_rating')}>
                                        <i className={cx('category_rating-icon', 'fa-solid fa-star')}></i>
                                        <p className={cx('category_rating-mark')}>{film.mark}</p>
                                    </div>
                                </div>
                                <div className={cx('category_spoil')}>
                                    <div className={cx('category_spoil-infor')}>
                                        <h3 className={cx('category_spoil-name')}>{film.name}</h3>
                                        <p className={cx('category_spoil-comment')}>{film.comment}</p>
                                    </div>
                                    <div className={cx('category_spoil-price')}>
                                        <span className={cx('category_spoil-price1')}>{film.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Films;
