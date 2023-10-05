import moment from 'moment';
import { BsBookmark, BsShare, BsFillEyeFill } from "react-icons/bs";


const BodyContent = ({ news }) => {
    console.log(news)
    const { title, image_url, author, details } = news;
    return (
        <div className="mt-4 border rounded-lg">
            <div className="flex justify-between items-center bg-slate-100 p-4 rounded-t-lg">
                <div className='flex items-center'>
                    <img className="w-[35px] rounded-full mr-2" src={news.author.img} alt="" />
                    <div>
                        <h4>{news.author.name}</h4>
                        <p>{news.author.published_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <BsBookmark className=''></BsBookmark>
                    <BsShare></BsShare>
                </div>
            </div>
            <h3 className="text-xl font-semibold p-4">{news.title}</h3>
            <img src={news.image_url} alt="" />
            <p className='p-4'>{news.details.slice(0, 300)}<span className="text-yellow-600 font-semibold ml-2">Read more</span></p>
            <hr />
            <div className='flex justify-between items-center p-4'>
                <p>{news.rating.number}</p>
                <div className='flex items-center gap-2'>
                    <BsFillEyeFill></BsFillEyeFill>
                    {news.total_view}
                </div>
            </div>
        </div>
    );
};

export default BodyContent;