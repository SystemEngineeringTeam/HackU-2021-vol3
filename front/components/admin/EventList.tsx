import Image from "next/image";

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
                    <div className="w-full rounded-lg bg-original-gray">
                        <div className="rounded-lg shadow-sm">
                            <div className=" flex flex-col text-left ">
                                <div className="flex-auto ml-7">
                                    開催日程
                                </div>
                                <div className="absolute ml-96">
                                    参加予定人数
                                </div>
                                <div className="ml-20 text-lg">2022年2月10日 16:00</div>
                                <div className="absolute pl-20 mt-6 ml-96 text-lg">100人
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="h-24 bg-white">
                                配信中
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </>

    );
};

export default EventList;
