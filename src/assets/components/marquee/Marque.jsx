import Marquee from "react-fast-marquee";


const Marque = () => {
    return (
        <div className="p-4 bg-slate-200 flex items-center">
            <button className="bg-red-600 py-2 px-6 text-white">Latest</button>
            <Marquee>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default Marque;