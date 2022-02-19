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
* おはよう。
* おはよう。
* おはよう。
* おはよう。
* おはよう。
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
      <div className="flex flex-col w-2/5">
        <div className="flex justify-center bg-slate-300">
          <ReactMarkdown
            className="prose "
            /* @ts-ignore */
            components={{ code: CodeBlock }}
            remarkPlugins={[remarkGfm]}
          >
            {documentCollection[0]}
          </ReactMarkdown>
        </div>
        <div className="flex justify-between bg-green-300">
          <div>Back</div>
          <div>Next</div>
        </div>
      </div>
    </>
  );
};

export default Document;
