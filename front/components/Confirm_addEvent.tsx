
import React from "react";
const Confirm_addEvent = () => {
    const [addEventShowModal, setShowModal] = React.useState(false);
    return (
        <>
            <button className="button_save" onClick={() => setShowModal(true)}>保存</button>
            {addEventShowModal ? (
                <>
                    <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center outline-none focus:outline-none">
                        <div className="relative my-6 mx-auto w-auto max-w-3xl">
                            <div className="flex relative flex-col w-96 h-96 bg-white rounded-lg border-0 outline-none focus:outline-none shadow-lg">
                                <div className="flex items-start mt-2 ml-2">
                                    <div>
                                        <svg className="fill-yellow-500 absolute left-32 ml-2 top-6" xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 24 24"><path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-6 16h-2v-2h2v2zm0-4h-2v-5h2v5zm6-7H5V7h14v2z"></path></svg>
                                        <div className="text-gray-800 font-bold text-3xl absolute left-40 top-40">確認</div>
                                        <div className="text-gray-800  font-medium absolute left-28 top-56">内容は大丈夫ですか？</div>
                                        <button
                                            className="py-2 px-6 font-bold text-white bg-slate-400 hover:bg-slate-300 rounded-md absolute left-14 top-72"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            キャンセル
                                        </button>
                                        <button
                                            className="py-2 px-11 font-bold  text-white bg-blue-500 hover:bg-blue-400  rounded-md absolute left-52 top-72"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            登録
                                        </button>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fixed inset-0 z-40 bg-black opacity-25" />
                </>
            ) : null}
        </>
    );
};

export default Confirm_addEvent;
