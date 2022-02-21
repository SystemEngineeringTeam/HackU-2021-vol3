import Link from 'next/link'
import Layout from "../../components/Layout";
import EventList from '../../components/admin/EventList';
const event = () => {
    return (
        <>
            <Layout>
                <div id="AdminTitle" >
                    管理画面
                </div>
                <div id="AdminKeyWord" className="">
                    <div className="mb-6">
                        <div className="font-bold text-slate-800">KEYWORD SEARCH</div>
                        <div className="relative">
                            <input
                                type="text"
                                className="p-2 w-full rounded-lg shadow-inner bg-original-white"
                            />
                            <button className="absolute top-1 right-2">
                                <svg
                                    className="w-8 h-8 text-slate-800"
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

                    <div id="LineWrapper">
                        <nav className="navMenu">
                            <Link href="/">
                                <a>開催前</a>
                            </Link>
                            <Link href="/">
                                <a>開催中</a>
                            </Link>
                            <Link href="/">
                                <a>開催後</a>
                            </Link>
                            <div className="dot" />
                            <div id="AdminLine" />
                        </nav>
                    </div>
                </div>
                <div id="AdminMainWrapper">
                    <EventList />
                </div>
            </Layout>

        </>
    );
};

export default event;
