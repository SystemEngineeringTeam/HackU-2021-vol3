
import React from "react";
const ConfirmAddEvent = (props: any) => {
    const [addEventShowModal, setShowModal] = React.useState<boolean>(false);
    function handleCloseModal() {
        props.PostForm();
        setShowModal(true);
    }
    return (
        <>
            <button className="button_save" onClick={() => handleCloseModal()}>保存</button>
            {
                addEventShowModal ? (
                    <>
                        <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center outline-none focus:outline-none">
                            <div className="relative my-6 mx-auto w-auto max-w-3xl">
                                <div className="flex relative flex-col w-96 h-96 bg-white rounded-lg border-0 outline-none focus:outline-none shadow-lg">
                                    <div className="flex items-start mt-2 ml-2">
                                        <div>
                                            <svg className="absolute top-6 left-32 ml-2 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 24 24"><path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-6 16h-2v-2h2v2zm0-4h-2v-5h2v5zm6-7H5V7h14v2z" /></svg>
                                            <div className="absolute top-40 left-40 text-3xl font-bold text-gray-800">確認</div>
                                            <div className="absolute top-56 left-28 font-medium text-gray-800">内容は大丈夫ですか？</div>
                                            <button
                                                className="absolute top-72 left-14 py-2 px-6 font-bold text-white bg-slate-400 hover:bg-slate-300 rounded-md"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                キャンセル
                                            </button>
                                            <button
                                                className="absolute top-72 left-52 py-2 px-11 font-bold text-white bg-blue-500 hover:bg-blue-400 rounded-md"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                登録
                                            </button>
                                        </div>

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

export default ConfirmAddEvent;
