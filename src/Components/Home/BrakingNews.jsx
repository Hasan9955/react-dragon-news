import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BrakingNews = () => {
    return (
        <div className="p-3 flex bg-[#F3F3F3]">
            <button className="btn btn-secondary">Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-10" to='\'>I can be a React component, multiple React components....</Link>
                <Link className="mr-10" to='\'>I can be a React component, multiple React components....</Link>
                <Link className="mr-10" to='\'>I can be a React component, multiple React components....</Link>
                <Link className="mr-10" to='\'>I can be a React component, multiple React components....</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;