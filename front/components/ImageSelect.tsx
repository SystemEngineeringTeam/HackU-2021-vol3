import Image from "next/image";
import React, { useRef } from "react";
import NoneImage from "../public/EventImage/None.png";
import CloudServiceImage from "../public/EventImage/cloud-service.png";
import ComputerImage from "../public/EventImage/computer.png";
import DatabaseImage from "../public/EventImage/database-storage.png";
import DevOpsImage from "../public/EventImage/devops.png";
import GraphicDesign from "../public/EventImage/graphic-design.png";
import Microchip from "../public/EventImage/microchip.png";
import Security from "../public/EventImage/security.png";
import ServerImage from "../public/EventImage/server.png";
import SmartPhone from "../public/EventImage/smartphone.png";
import WebImage from "../public/EventImage/web.png";
const ImageSelect = (props: any) => {
  type ImageType = {
    key: string;
    src: StaticImageData;
    alt: string;
  };
  const images: ImageType[] = [
    {
      key: "0",
      src: WebImage,
      alt: "",
    },
    {
      key: "1",
      src: WebImage,
      alt: "Web",
    },
    {
      key: "2",
      src: DatabaseImage,
      alt: "Database",
    },
    {
      key: "3",
      src: ServerImage,
      alt: "Server",
    },
    {
      key: "4",
      src: ComputerImage,
      alt: "NetWork",
    },
    {
      key: "5",
      src: Security,
      alt: "Security",
    },
    {
      key: "6",
      src: SmartPhone,
      alt: "SmartPhone",
    },
    {
      key: "7",
      src: GraphicDesign,
      alt: "GraphicDesign",
    },
    {
      key: "8",
      src: CloudServiceImage,
      alt: "CloudService",
    },
    {
      key: "9",
      src: Microchip,
      alt: "Microchip",
    },
    {
      key: "10",
      src: DevOpsImage,
      alt: "DevOps",
    },
  ];

  const [addEventShowModal, setShowModal] = React.useState<boolean>(false);
  const [ImageShow, setImageShow] = React.useState<boolean>(true);
  const ref = useRef<boolean>(true);
  const [imageList, setImageList] = React.useState<string>("0");
  const [image, setImage] = React.useState<ImageType>({
    key: "0",
    src: NoneImage,
    alt: "",
  });
  //imageが変更された場合、ImageShowがfalseになるuseEffect
  React.useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }
    setImageShow(false);
  }, [imageList]);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    images.find((image) => {
      if (image.key === e.target.value) {
        props.ImageHandleChange(e.target.value);
        setImage(image);
      }
    });

    setImageList(e.target.value);
  }

  return (
    <>
      {ImageShow ? (
        <div className="input_3_1">
          <label className="input_3_2" onClick={() => setShowModal(true)}>
            <div className="input_title_3">
              <p className="input_title_3_1">画像の選択</p>
              <p className="input_title_3_2">(必須)</p>
            </div>
            <div className="image_upload">
              <div className="flavor_text_upload">クリックして画像の選択</div>
            </div>
            <input type="text" readOnly />
          </label>
        </div>
      ) : (
        <>
          <div className="input_3_1">
            <label className="input_3_2" onClick={() => setShowModal(true)}>
              <div className="input_title_3">
                <p className="input_title_3_1">画像の選択</p>
                <p className="input_title_3_2">(必須)</p>
              </div>
              <div className="ml-12 image_upload_2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width="180"
                  height="180"
                />
              </div>
              <input type="text" readOnly />
            </label>
          </div>{" "}
        </>
      )}
      {addEventShowModal ? (
        <>
          <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              <div
                id="widthSelect"
                className="flex relative flex-col bg-white rounded-lg border-0 outline-none focus:outline-none shadow-lg"
              >
                <div className="flex items-start mt-2 ml-2">
                  <div className="flex">
                    <div id="image_display_1">
                      <p className="ImageSelectText">画像の選択</p>
                      <div className="cp_ipselect cp_sl01">
                        <select
                          id="SelectorImage"
                          value={imageList}
                          onChange={handleChange}
                          required
                        >
                          <option value="0" hidden />
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
                    <div id="image_display_2">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width="200"
                        height="200"
                      />
                    </div>
                    <div
                      id="image_display_3"
                      onClick={() => setShowModal(false)}
                    >
                      <p id="image_display_3_1">決定</p>
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
