import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiCalendar } from 'react-icons/fi';
import newsPic1 from '../assets/1.png'
import newsPic2 from '../assets/2.png'
import newsPic3 from '../assets/3.png'

const LeftSideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('../../public/data/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
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
            <div className="mt-5">
                <div className="space-y-3 mt-5">
                    <img src={newsPic1} alt="" />
                    <h2 className="text-xl font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className="flex gap-2 items-center">
                        <p className="mr-4">Sports</p>
                        <FiCalendar></FiCalendar>
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
                <div className="space-y-3 mt-5">
                    <img src={newsPic2} alt="" />
                    <h2 className="text-xl font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className="flex gap-2 items-center">
                        <p className="mr-4">Sports</p>
                        <FiCalendar></FiCalendar>
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
                <div className="space-y-3 mt-5">
                    <img src={newsPic3} alt="" />
                    <h2 className="text-xl font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className="flex gap-2 items-center">
                        <p className="mr-4">Sports</p>
                        <FiCalendar></FiCalendar>
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;