import React from 'react'
import { Menu, Icon, Dropdown } from 'antd';
import Link from 'umi/link';

import style from './style.less';
interface HeaderState {

}
interface HeaderProps {
    className: string,
    styleName: string
}

export default class HeaderUser extends React.Component<HeaderProps, HeaderState>{
    public render() {
        const { className } = this.props;
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to='/login'>
                        <Icon type="logout" /> 退出登录
                    </Link>
                </Menu.Item>
            </Menu>

        );
        return (
            <div className={style.userMenu}>
                <Dropdown overlay={menu}>
                    <span className={`${style.account} ${className}`}>
                        <span style={{ fontSize: 14 }}>用户名</span>
                        <Icon type="down" />
                    </span>

                </Dropdown>
            </div>
        )
    }
}
