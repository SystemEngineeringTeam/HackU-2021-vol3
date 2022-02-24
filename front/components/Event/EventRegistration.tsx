import axios from 'axios';
import { useRouter } from "next/router";
import React, { useState } from "react";
import ImageSelect from "../ImageSelect";
import Tags from "../Tags";
import ConfirmAddEvent from "./ConfirmAddEvent";
const EventRegistration = () => {
  type TagProps = {
    key: number;
  };



  //A set of functions to hold the title 
  const [title, setTitle] = React.useState<string>("");
  function TitleHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    console.log(event.target.value);
  }



  //A set of functions that hold information that provides an overview
  const [description, setDescription] = React.useState<string>("");
  const textRowCount = description ? description.split('\n').length : 0;
  const rows = textRowCount + 1;
  function DescriptionHandleChange(event: any) {
    if (event != undefined) {
      setDescription(event.target.value);
      console.log(event.target.value);
    }
  }


  //Maintaining image information in a set of functions
  const [image, setImage] = React.useState<string>("");
  function ImageHandleChange(props: any) {
    if (props != undefined) {
      setImage(props);
      console.log(props);
    }
  }

  // A set of functions to hold file information
  const [file, setFile] = React.useState<File | null>(null);
  const [fileMd, setFileMd] = React.useState<string>("");
  function onFileInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files);
    if (e.target.files) {
      setFile(e.target.files[0]);
      readTextFile(e.target.files[0]);
    }
  };
  const readTextFile = (file: File) => {
    const reader = new FileReader();
    let ReadText: string = "";
    reader.onload = (e: any) => {
      ReadText = e.target.result;
      console.log(ReadText);
      setFileMd(ReadText);
    };
    reader.readAsText(file);
  };


  //A set of functions to hold date and time information
  const [date, setDate] = React.useState<string>("");
  function DateHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value);
    console.log(event.target.value);
  }

  const [time, setTime] = React.useState<string>("");
  function TimeHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTime(event.target.value);
    console.log(event.target.value);
  }

  // Functions for processing tags
  const [tags, setTags] = React.useState([]);
  const [tagID, setTagID] = useState<number[]>([]);
  type Tag = {
    id: number,
    tag: string,
  }
  function TagHandleChange(props: number) {
    let tmp = tagID;
    tmp.push(props);
    setTagID(tmp);
  }
  function TagRemoveChange(props: number) {
    let tmp = tagID;
    tmp.splice(props, 1);
    setTagID(tmp);
  }

  // Function to call the Post method(axios)
  function PostForm() {
    //axios
    const data = {
      title: title,
      description: description,
      image: image,
      file: fileMd,
      date: date,
      time: time,
      tags: tagID
    };

    axios
      .post('http://localhost:8080/event', data)
      .then(response => {
        console.log('response body:', response.data);
        router.push("/")
      });
  }
  const router = useRouter(); //useRouterフックを定義している


  return (
    <>
      <div className="container">
        <div className="all_title">
          <h1 className="h1_title">イベントの詳細</h1>
          <ConfirmAddEvent PostForm={() => { PostForm() }} />
        </div>
        <div className="input_1_1">
          <label className="input_1_2">
            <div className="input_title_1">
              <p className="input_title_1_1">タイトル</p>
              <p className="input_title_1_2">(必須)</p>
            </div>
            <input
              type="text"
              id="FormTitle"
              value={title}
              onChange={TitleHandleChange}
              placeholder="勉強会について説明するタイトルを描きましょう"
            />
          </label>
        </div>
        <div className="input_2_1">
          <label className="input_2_2">
            <div className="input_title_2">
              <p className="input_title_2_1">説明</p>
              <p className="input_title_2_2">(必須)</p>
            </div>
            <textarea
              value={description}
              rows={rows}
              onChange={DescriptionHandleChange}
              className="InputTextArea"
              placeholder="勉強会について説明する内容を紹介しましょう"
            />
          </label>
        </div>
        <ImageSelect ImageHandleChange={(props: any) => { ImageHandleChange(props) }} />
        <div className="input_4_1">
          <label className="input_4_2">
            <div className="input_title_4">
              <p className="input_title_4_1">資料の提出</p>
              <p className="input_title_4_2">(必須)</p>
            </div>

            <div className="image_upload_icon">
              <label>
                <div className="flavor_text_upload_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <input
                  type="file"
                  id="onFileInputChange"
                  onChange={onFileInputChange}
                  accept=".md"
                />
              </label>
            </div>
            <div id="LookFile">{file && <p>{file.name}</p>}</div>
            <input type="text" readOnly />
          </label>
        </div>
        <div className="input_5_1">
          <label className="input_5_2">
            <div className="input_title_5">
              <p className="input_title_5_1">日時の選択</p>
              <p className="input_title_5_2">(必須)</p>
            </div>
            <div className="flex gap-4 datetime_input">
              <div className="rounded-sm border border-black">
                <input type="date" value={date} onChange={DateHandleChange} name="date" id="date" />
              </div>
              <div className="rounded-sm border border-black">
                <input type="time" value={time} onChange={TimeHandleChange} name="time" id="time" />
              </div>
            </div>
            <input type="text" readOnly />
          </label>
        </div>
        <Tags TagRemoveChange={(props: number) => { TagRemoveChange(props) }} TagHandleChange={(props: number) => { TagHandleChange(props) }} />
      </div>
    </>
  );
};

export default EventRegistration;
