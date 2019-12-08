import React from 'react'
import { Icon } from 'antd';
import Link from 'umi/link';
import HeaderUser from './headerUser/index';
import style from'./style.less';
interface HeaderState {

}
export default class Header extends React.Component<object, HeaderState>{



    public render() {
        const sideWidth = 256;
        const transitionDuration = 300;
        return (
            <div className={style.header}>
                <div
                    className={style.loginContainer} 
                    id="logo-container" 
                    style={{flex: `0 0 ${sideWidth}px `, transitionDuration: '300ms'}}
                />
                <div className={style.right}>
                    <HeaderUser styleName={style.action} className='header right action' />
                </div>
            </div>
        )
    }
}
