import { BsGoogle, BsGithub, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const RightSideBar = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold">Log In With</h3>
            <div className="mt-4">
                <button className="btn border rounded-lg w-full py-2"><BsGoogle className="inline mr-4"></BsGoogle>Log In With Google</button>
                <button className="btn border rounded-lg w-full py-2 my-2"><BsGithub className="inline mr-4"></BsGithub>Log In With Google</button>
            </div>
            <div>
                <h3 className="text-lg font-semibold mt-6">Find Us on</h3>
                <div className="border rounded-lg py-2 my-4">
                    <button className="btn  w-full py-2 my-2"><BsFacebook className="inline mr-4 text-blue-500"></BsFacebook>Facebook</button>
                    <button className="btn border-y w-full py-4"><BsInstagram className="inline mr-4 text-red-500"></BsInstagram>Instagram</button>
                    <button className="btn w-full py-2 my-2"><BsTwitter className="inline mr-4 text-blue-400"></BsTwitter>Twitter</button>
                </div>
            </div>
            <div className="bg-slate-200 p-2">
                <h3 className="text-lg font-semibold">Q-zone</h3>
                <img className="w-full" src="./images/qZone1.png" alt="" />
                <img className="w-full my-6" src="./images/qZone2.png" alt="" />
                <img className="w-full" src="./images/qZone3.png" alt="" />
            </div>
        </div>
    );
};

export default RightSideBar;