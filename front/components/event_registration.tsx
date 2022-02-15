
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
                        <p className="input_title">タイトル</p>
                        <input type="text" placeholder="勉強会について説明するタイトルを描きましょう" />
                    </label>
                </div>
            </div>
        </>
    );
};

export default event_registration;
