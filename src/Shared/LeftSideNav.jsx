import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('../../public/data/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="p-5">
            <h2 className="text-2xl font-semibold">All Category</h2>
            {
                categories.map(category => <NavLink
                    className="block px-5 mt-3 font-semibold"
                    key={category.id}
                    to={`/category/${category.id}`}
                
                > {category.name} </NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;