import React from 'react';

const LeftSideNews = ({news}) => {

    const {title, image_url} = news;


    return (
        <div>
            <img className='rounded-md' src={news.image_url} alt="" />
            <h3 className='text-lg font-semibold py-4'>{news.title}</h3>
        </div>
    );
};

export default LeftSideNews;