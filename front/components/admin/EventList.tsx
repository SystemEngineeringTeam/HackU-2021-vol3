import Image from "next/image";
import FrontendImage from "../../public/EventImage/web.png";

const EventList = (image: string, name: string,) => {
    const log = () => {
        console.log("log");
    };

    return (
        <>
            <div className="flex justify-center">
                <button
                    className="flex justify-center mt-10 w-8/12 rounded-lg shadow-md "
                    onClick={log}
                >
                    <div className="w-full rounded-lg border-2 border-slate-200 bg-original-gray">
                        <div className="rounded-lg shadow-sm">
                            <div className=" flex flex-col text-left ">
                                <div className="flex-auto ml-7">
                                    開催日程
                                </div>
                                <div className="absolute ml-96">
                                    参加予定人数
                                </div>
                                <div className="ml-20 text-lg">
                                    2022年2月10日 16:00
                                </div>
                                <div className="absolute pl-20 mt-6 ml-96 text-lg">100人
                                </div>
                            </div>
                        </div>
                        <div className="h-28 bg-white">
                            <div className="absolute my-2 ml-12">
                                <Image className="h-auto" src={FrontendImage} alt="Image" width={100} height={100} />
                            </div>
                            <div>
                                <div className="absolute mt-10 ml-52 text-3xl font-semibold text-slate-800">
                                    フロントエンド勉強会
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="py-2 px-10 mt-2 mr-3 font-bold text-white bg-blue-500 hover:bg-blue-400 rounded-md border-2 border-slate-200"
                                    type="button"

                                >
                                    配信者側画面へ
                                </button>

                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="py-2 px-8 mt-2 mr-3 font-bold text-gray-800 bg-white hover:bg-gray-200 rounded-md border-2 border-slate-200"
                                    type="button"

                                >
                                    <div className="">
                                        勉強会内容の確認
                                    </div>

                                </button>

                            </div>

                        </div>
                    </div>
                </button>
            </div>
        </>

    );
};

export default EventList;
