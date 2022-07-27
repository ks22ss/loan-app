import "../css/Home.css"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, LabelList, Tooltip } from 'recharts';
import {chartData} from "../data/chartData"
import "../css/Button.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Home = () => {

    return ( 
        <div>
            <section className="welcomeSession">
               <h1 className="welcomeTitle">立即網上申請可享高達$18,000現金獎</h1>
               <Link className="default-button home-button" to="/loan-request">立即申請</Link>
            </section>
            <section className="loanTotalSession">
                <div className="loanTotalSessionContainer">
                    <h1 className="chartTitle">每年物業按揭申請貸款總額(百萬)</h1>
                    <ResponsiveContainer width="70%" height={300}>
                        <BarChart  data={chartData}>
                            <XAxis dataKey="year"/>
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="loanTotal" barSize={40} fill="#2F9933" >
                                <LabelList dataKey="loanTotal" position="top" />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                    
                </div>   
            </section>
            <section className="loanRequestSession">
                <div className="loanTotalSessionContainer">
                        <h1 className="chartTitle">每年物業按揭申請次數</h1>
                        <ResponsiveContainer width="70%" height={300}>
                            <BarChart  data={chartData}>
                                <XAxis dataKey="year"/>
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="loanRequest" barSize={40} fill="#6CC013" >
                                    <LabelList dataKey="loanRequest" position="top" />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                </div>  
            </section>
            <section>

            </section>
            
        
        </div>
     );
}
 
export default Home;