import React from "react";
import BeforeScreenToReturn from "./BeforeScreenToReturn";

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
                            <div id="widthSelect" className="flex relative flex-col bg-white rounded-lg border-0 outline-none focus:outline-none shadow-lg">
                                <div className="flex items-start mt-2 ml-2" >
                                    <div>
                                        <p className="ImageSelectText">画像の選択</p>
                                        <div className="cp_ipselect cp_sl01">
                                            <select required>
                                                <option value="" hidden />
                                                <option value="1">フロントエンド</option>
                                                <option value="2">バックエンド</option>
                                                <option value="3">インフラ</option>
                                                <option value="4">ネットワーク</option>
                                                <option value="5">セキュリティー</option>
                                                <option value="6">モバイル</option>
                                                <option value="7">デザイン</option>
                                                <option value="8">クラウド</option>
                                                <option value="9">ハードウェア</option>
                                                <option value="10">DEVOPS</option>
                                            </select>
                                        </div>
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

export default ImageSelect;
