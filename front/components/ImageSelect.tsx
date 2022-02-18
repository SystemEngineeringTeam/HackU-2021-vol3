import React from "react";

const ImageSelect = () => {
    const [addEventShowModal, setShowModal] = React.useState(false);
    return (
        <>
            <div className="input_3_1">
                <label className="input_3_2" onClick={() => setShowModal(true)}>
                    <div className="input_title_3" >
                        <p className="input_title_3_1">画像の選択</p>
                        <p className="input_title_3_2">(必須)</p>
                    </div>
                    <div className="image_upload">
                        <div className="flavor_text_upload">
                            クリックして画像の選択
                        </div>
                    </div>
                    <input type="text" readOnly />
                </label>
            </div>
            {addEventShowModal ? (
                <>
                    <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center outline-none focus:outline-none">
                        <div className="relative my-6 mx-auto w-auto max-w-3xl">
                            <div className="flex relative flex-col w-96 h-96 bg-white rounded-lg border-0 outline-none focus:outline-none shadow-lg">
                                <div className="flex items-start mt-2 ml-2" />
                            </div>
                        </div>
                    </div>

                    <div className="fixed inset-0 z-40 bg-black opacity-25" />
                </>
            ) : null}
        </>
    );
};

export default ImageSelect;
