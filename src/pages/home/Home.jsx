import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import Chart from '../../components/chart/Chart'
import {userData} from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart 
                title ="Sales Analytics"
                data = {userData}
                dataKey = "Active User"
                grid
            />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
