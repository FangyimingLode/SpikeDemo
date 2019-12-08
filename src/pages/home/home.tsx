import React from 'react'
import { Card, List } from 'antd';


import Header from '@/components/header/index';
interface HomeState {
    data: Array<object>
}
export default class Home extends React.Component<object, HomeState>{
    
    state ={
        data: []
    }


    public render(){
        const { data } = this.state
        return(
            <div>
                <Header />
            </div>
        )
    }
}
