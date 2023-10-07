import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header";
import LeftSideNav from "../../Shared/LeftSideNav";
import Navbar from "../../Shared/Navbar";
import NewsCard from "../../Shared/NewsCard";
import RightSideNav from "../../Shared/RightSideNav";
import BrakingNews from "./BrakingNews";


const Home = () => {

    const newsData = useLoaderData();

    
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold m-5 ">Dragon News Home</h2>
                    {
                        newsData.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;