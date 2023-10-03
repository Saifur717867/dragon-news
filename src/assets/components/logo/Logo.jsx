import moment from 'moment';
const Logo = () => {

    const logo = <>
        <img className='w-[60%] mx-auto' src="/images/logo.png" alt="" />
    </>
    return (
        
        <div className='w-[50%] mx-auto py-10 text-center'>
          {logo}
          <p className="py-4 text-lg text-[#706F6F]">Journalism Without Fear or Favour</p>
          <div>
          <p className="text-lg text-[#706F6F]">{moment().format("dddd, MMMM D, YYYY")}</p>
          </div>
        </div>
    );
};

export default Logo;