import React, {Component} from 'react';
import style from './style.less';
import logo from './logo.png';
import star from './star.png';

interface BannerState {
    isMount: boolean
}
 
export default class Banner extends Component<Object, BannerState> {
    state = {
        isMount: false,
    };
    componentDidMount() {
        this.setState({isMount: true});
    }
    public render() {
        const {isMount} = this.state;

        return (
            <div className={isMount ? `${style.banner} ${style.active}` : style.banner}>
                <div className={style.star}>
                    <img src={star} alt="星星"/>
                </div>
                <div className={style.logo}>
                    <img src={logo} alt="图标"/>
                    <span>秒杀</span>
                </div>
            </div>
        );
    }
}
