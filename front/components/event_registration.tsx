
const event_registration = () => {
    return (
        <>
            <h1>イベントの詳細</h1>
            <button>保存</button>
            <div className="input_1_1">
                <label className="input_1_2">
                    <p className="input_title">タイトル</p>
	                <input type="text" placeholder="勉強会について説明するタイトルを描きましょう" />
	            </label>
            </div>
        </>
    );
};

export default event_registration;
