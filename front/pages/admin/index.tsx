import BeforeScreenToReturn from "../../components/BeforeScreenToReturn";
import Layout from "../../components/Layout";
const event = () => {
    return (
        <>
            <Layout>
                <div id="AdminTitle" >
                    管理画面
                </div>
                <div id="AdminKeyWord" className="">
                    <div className="mb-6">
                        <div className="font-bold">KEYWORD SEARCH</div>
                        <div className="relative">
                            <input
                                type="text"
                                className="p-2 w-full rounded-lg shadow-inner bg-original-white"
                            />
                            <button className="absolute top-1 right-2">
                                <svg
                                    className="w-8 h-8 text-black"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    {" "}
                                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                                    <circle cx="10" cy="10" r="7" />{" "}
                                    <line x1="21" y1="21" x2="15" y2="15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="LineWrapper"><nav className="navMenu">
                        <a href="/">開催前</a>
                        <a href="/frontend/html/todo.html">開催中</a>
                        <a href="/frontend/html/timetable.html">開催後</a>
                        <div className="dot" />
                        <div id="AdminLine" />
                    </nav></div>
                </div>


            </Layout>
        </>
    );
};

export default event;
