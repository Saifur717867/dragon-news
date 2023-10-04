import BodyContent from "../bodyContent/BodyContent";
import LeftSideBar from "../leftSideBar/LeftSideBar";
import RightSideBar from "./rightSideBar/RightSideBar";


const NewsSection = ({newsData}) => {

    return (
        <div className='grid grid-cols-4 gap-6'>
            <div className="border">
                <LeftSideBar></LeftSideBar>
            </div>
            <div className='col-span-2'>
                <h3>Dragon News Home</h3>
                {
                    newsData.map(news => <BodyContent key={news._id} news={news}></BodyContent>)
                }
            </div>
            <div className="border">
                <RightSideBar></RightSideBar>
            </div>

        </div>
    );
};

export default NewsSection;