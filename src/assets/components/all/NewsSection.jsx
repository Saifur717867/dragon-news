import BodyContent from "../bodyContent/BodyContent";
import LeftSideBar from "../leftSideBar/LeftSideBar";
import RightSideBar from "./rightSideBar/RightSideBar";


const NewsSection = ({newsData}) => {

    return (
        <div className='grid grid-cols-4 gap-6'>
            <div className="">
                <LeftSideBar></LeftSideBar>
            </div>
            <div className='col-span-2 mb-9'>
                <h3 className="text-2xl font-bold">Dragon News Home</h3>
                {
                    newsData.slice(0, 5).map(news => <BodyContent key={news._id} news={news}></BodyContent>)
                }
            </div>
            <div className="">
                <RightSideBar></RightSideBar>
            </div>

        </div>
    );
};

export default NewsSection;