import Navbar from '../../components/navbar/Navbar';
import Logo from '../../components/logo/Logo';
import Marque from '../../components/marquee/Marque';
import NewsSection from '../../components/all/NewsSection';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const newsData = useLoaderData();
    console.log(newsData);

    return (
        <div>
            <Logo></Logo>
            <Marque></Marque>
            <Navbar></Navbar>
            <NewsSection newsData={newsData}></NewsSection>
        </div>
    );
};

export default Home;