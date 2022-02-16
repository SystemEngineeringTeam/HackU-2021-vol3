
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
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                        </div>
                        <input type="text" readOnly />
                    </label>
                </div>
                <div className="input_5_1">
                    <label className="input_5_2">
                        <div className="input_title_5">
                            <p className="input_title_5_1">日時の選択</p>
                            <p className="input_title_5_2">(必須)</p>
                        </div>
                        <div className="datetime_input">
                            <input type="date" name="date" id="date" />
                            <input type="time" name="time" id="time" />
                        </div>
                        <input type="text" readOnly />
                    </label>
                </div>
                <div className="tag">
                    <div className="">
                        <div className="tag_text">
                            タグの追加　
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 tag_svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default event_registration;
