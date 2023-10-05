import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import LeftSideNews from "./LeftSideNews";


const LeftSideBar = () => {
    const newsData = useLoaderData();
    console.log(newsData)
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('./categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])


    return (
        <div>
            <div>
            <h3 className="text-2xl font-bold">All Category</h3>
            <button className="btn bg-slate-100 w-full rounded-md text-xl font-semibold py-3 my-4">National News</button>
            {
                categories.map(category => <Link to={`./category/${category.id}`} className="block ml-5 py-2" key={category.id}>{category.name}</Link>)
            }
            </div>
            <div className="mt-4">
                {
                    newsData.slice(0, 3).map(news => <LeftSideNews key={news.id} news={news}></LeftSideNews>)
                }
            </div>
        </div>
    );
};

export default LeftSideBar;