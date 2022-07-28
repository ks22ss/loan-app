import "../css/Home.css"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, LabelList, Tooltip } from 'recharts';
import {chartData} from "../data/chartData"
import "../css/Button.css"
import { Link } from "react-router-dom";
import Card from "../components/Card";
import clock from "../assets/icons8-clock-240.png"
import done from "../assets/icons8-done-240.png"
import toolbox from "../assets/icons8-toolbox-240.png"
import Footer from "../components/Footer";

const Home = () => {

    return ( 
        <div>
            <section className="welcomeSession">
               <h1 className="welcomeTitle">立即網上申請可享高達$18,000現金獎</h1>
               <Link className="default-button home-button" to="/loan-request">立即申請</Link>
            </section>
            <section className="homeSession">
                <div className="chartContainer">
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
            <section className="homeSession">
                <div className="chartContainer">
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
            <section className="homeSession">
                <div className="listContainer">
                    <Card className={"item-1"} src={clock} alt="clock" title="24小時一站式服務" p="由申請貸款直到獲取批核, 完全在本平台運作, 無需親自前往提交申請表。"></Card>
                    <Card className={"item-2"} src={done} alt="done" title="一次申請多個貸款批核" p="一次網上申請中獲取多個貸款批核,以作比較,並找出最合適的貸款方案，無須逐次跟不同貸款機構申請。"></Card>
                    <Card className={"item-3"} src={toolbox} alt="toolbox" title="本地和跨境物業貸款" p="幫助本地和跨境物業借款人找到按揭貸款,抵押物業並不只限於本地。"></Card>
                </div>
            </section>
            <Footer/>
            
        
        </div>
     );
}
 
export default Home;