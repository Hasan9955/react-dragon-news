import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import RightSideNav from "./RightSideNav";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Navbar from "./Navbar";


const NewsDetails = () => {
    const {id} = useParams();
    const detailsNews = useLoaderData();

    const myNews = detailsNews.find(news => news._id === id)
    const { image_url, title, details    } = myNews;

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-xl m-5 font-bold">Dragon News Home</h2>
                    <div className="card bg-base-100 shadow-xl md:p-10">
                        <figure><img className="w-full" src={image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions ">
                                <Link to='/'><button className=" btn btn-secondary rounded-sm "><AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft> Go Home</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;