const ImageSelect = () => {
    return (
        <>
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
        </>
    );
};

export default ImageSelect;
