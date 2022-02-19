import { useRouter } from "next/router";
import React from "react";
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

  const documentArray: string[] = [];

  const element = body.split("\n## ");

  const test = `## ${element[1]}`;
  console.log(test);

  // for (let index = 0; index < body.length; index++) {
  //   let elements=
  //   if (body[index] !== "\n") {
  //     const element = body[index];
  //   } else {
  //     if (body[index + 1] === "#" && body[index + 2] === "#") {
  //       documentArray.push("<h3>");
  //     }
  //   }
  // }
  return (
    <>
      <div>
        <ReactMarkdown
          className="prose "
          /* @ts-ignore */
          components={{ code: CodeBlock }}
          remarkPlugins={[remarkGfm]}
        >
          {test}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default Document;
