import Header from "../../Shared/Header";
import LeftSideNav from "../../Shared/LeftSideNav";
import Navbar from "../../Shared/Navbar";
import RightSideNav from "../../Shared/RightSideNav";
import BrakingNews from "./BrakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2 border">
                    <h2 className="text-3xl">News coming soon......</h2>
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;