import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import CodeBlock from "./CodeBlock";

const Document = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [document, setDocument] = React.useState<string>("");
  const [documentCollection, setDocumentCollection] = React.useState<string[]>(
    []
  );

  const body = `
# タイトル1
* おはよう。
* おはよう。
* おはよう。
* おはよう。

* おはよう.
## タイトル2
1. こんにちは。
2. こんにちは。
3. こんにちは。
1. こんにちは。
2. こんにちは。
3. こんにちは。
1. こんにちは。
2. こんにちは。
3. こんにちは。
## タイトル3
#### こんばんは
#### こんばんは
#### こんばんは
#### こんばんは
#### こんばんは
#### こんばんは`;

  useEffect(() => {
    const documentSplit = body.split("\n## ");
    const documentArray: string[] = [];

    documentArray.push(documentSplit[0]);

    for (let index = 1; index < documentSplit.length; index++) {
      const documentSingle = `## ${documentSplit[index]}`;
      documentArray.push(documentSingle);
    }

    console.log(documentArray);

    setDocumentCollection(documentArray);
  }, []);

  return (
    <>
      <div className="flex flex-col w-2/5 ">
        <div className="flex basis-11/12 justify-start mt-4 ml-2 bg-red-300">
          <ReactMarkdown
            className="prose "
            /* @ts-ignore */
            components={{ code: CodeBlock }}
            remarkPlugins={[remarkGfm]}
          >
            {documentCollection[0]}
          </ReactMarkdown>
        </div>
        <div className="flex justify-between h-16 bg-green-300">
          <button className="ml-10">
            <div className="py-1 px-2 text-2xl text-blue-400 bg-white rounded">
              Back
            </div>
          </button>
          <button className="">
            <div className="py-1 px-2 text-2xl text-white bg-blue-400 rounded">
              Next
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Document;
