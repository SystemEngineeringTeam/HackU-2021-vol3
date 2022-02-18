import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import CodeBlock from "../components/CodeBlock";

const Document = () => {
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

  return (
    <>
      <div>
        <ReactMarkdown
          className="prose "
          /* @ts-ignore */
          components={{ code: CodeBlock }}
          remarkPlugins={[remarkGfm]}
        >
          {body}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default Document;
