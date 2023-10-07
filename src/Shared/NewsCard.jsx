import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {

    const {_id,  image_url, title, details} = news;
    return (
        <div className="card bg-base-100 shadow-xl mb-5">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 
                    ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-600 font-bold">see more...</Link></p>
                    : <p>{details}</p>
                }
                
            </div>
        </div>
    );
};


NewsCard.propTypes = {
    news : PropTypes.object
}
export default NewsCard;