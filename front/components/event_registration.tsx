
const event_registration = () => {
    return (
        <>
            <div className="container">
                <div className="all_title">
                    <h1 className="h1_title">イベントの詳細</h1>
                    <button className="button_save">保存</button>
                </div>
                <div className="input_1_1">
                    <label className="input_1_2">
                        <div className="input_title_1">
                            <p className="input_title_1_1">タイトル</p>
                            <p className="input_title_1_2">(必須)</p>
                        </div>
                        <input type="text" placeholder="勉強会について説明するタイトルを描きましょう" />
                    </label>
                </div>
                <div className="input_2_1">
                    <label className="input_2_2">
                        <div className="input_title_2">
                            <p className="input_title_2_1">説明</p>
                            <p className="input_title_2_2">(必須)</p>
                        </div>
                        <input type="text" placeholder="勉強会について説明する内容を紹介しましょう" />
                    </label>
                </div>
                <div className="input_3_1">
                    <label className="input_3_2">
                        <div className="input_title_3">
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
                <div className="input_4_1">
                    <label className="input_4_2">
                        <div className="input_title_4">
                            <p className="input_title_4_1">資料の提出</p>
                            <p className="input_title_4_2">(必須)</p>
                        </div>
                        <div className="image_upload_icon">
                            <div className="flavor_text_upload_icon">
                                クリックして画像の選択
                            </div>
                        </div>
                        <input type="text" readOnly />
                    </label>
                </div>
            </div>
        </>
    );
};

export default event_registration;
