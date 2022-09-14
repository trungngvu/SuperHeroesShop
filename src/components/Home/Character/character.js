import styles from './character.module.scss';
import { Image } from 'react-native';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Character({ chars }) {
    return (
        <div className={cx('app-container')}>
            <div className={cx('grid')}>
                <h1 className={cx('container-title')}>Characters</h1>
                <div className={cx('grid_row')}>
                    {chars.map((char, index) => (
                        <div key={index} className={cx('grid__column')}>
                            <div className={cx('category')}>
                                <div className={cx('category_img-link')}>
                                    <img src={chars[index].image} alt="" className={cx('category_img')} />
                                    <div className={cx('category-infor')}>
                                        <h2 className={cx('category-name')}>{chars[index].name}</h2>
                                        <div className={cx('category-cover')}></div>
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

export default Character;
