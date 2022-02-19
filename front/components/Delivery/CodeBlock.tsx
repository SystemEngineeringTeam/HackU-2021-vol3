import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styled from "styled-components";

/* @ts-ignore */
const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const CodeBlockWrapper = styled.div`
    position: relative;
  `;

  const CodeBlockTitle = styled.div`
    display: inline-block;
    position: absolute;
    top: -0.5em;
    left: 0;
    background-color: #000;
    padding: 0.2em;
    color: #ccc;
  `;

  let match = /language-(\w+)(:.+)/.exec(className || "");
  let lang = match && match[1] ? match[1] : "";
  let name = match && match[2] ? match[2].slice(1) : "";

  if (!name) {
    match = /language-(\w+)/.exec(className || "");
    lang = match && match[1] ? match[1] : "";
  }

  return !inline && match ? (
    <CodeBlockWrapper>
      {name ? <CodeBlockTitle>{name}</CodeBlockTitle> : <p />}
      <SyntaxHighlighter
        style={darcula}
        language={lang}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </CodeBlockWrapper>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default CodeBlock;
