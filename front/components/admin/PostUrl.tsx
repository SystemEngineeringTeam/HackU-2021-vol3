
import React from "react";
const PostUrl = () => {
    const [addEventShowModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="py-2 px-10 mt-2 mr-3 font-bold text-white bg-blue-500 hover:bg-blue-400 rounded-md border-2 border-slate-200"
                type="button"
                onClick={() => setShowModal(true)}
            >
                配信URLの設定
            </button>
            {addEventShowModal ? (
                <>
                    <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center outline-none focus:outline-none">
                        <div className="relative my-6 mx-auto w-auto max-w-3xl">
                            <div id="widthSelectAdmin" className=" bg-white rounded-sm border-0 outline-none focus:outline-none shadow-lg">
                                <div className="text-5xl font-bold text-gray-800">
                                    設定
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-800">
                                        配信URLの設定
                                    </div>
                                </div>
                                <div onClick={() => setShowModal(false)}>
                                    <p>決定</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fixed inset-0 z-40 bg-black opacity-25" />
                </>
            ) : null
            }
        </>
    );
};

export default PostUrl;
