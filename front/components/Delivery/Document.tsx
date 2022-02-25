import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import { scrollFadeIn } from "../ScrollFadeIn";
import CodeBlock from "./CodeBlock";

type Props = {
  document: string;
};

const Document = (props: Props) => {
  const router = useRouter();
  const { pid } = router.query;

  const [document, setDocument] = React.useState<string>("");
  const [documentCollection, setDocumentCollection] = React.useState<string[]>(
    []
  );
  const [pageIndex, setPageIndex] = React.useState<number>(0);

  const body = props.document;

  useEffect(() => {
    const documentSplit = body.split("\n## ");
    const documentArray: string[] = [];
    documentArray.push(documentSplit[0]);
    for (let index = 1; index < documentSplit.length; index++) {
      const documentSingle = `## ${documentSplit[index]}`;
      documentArray.push(documentSingle);
    }

    setDocumentCollection(documentArray);

    scrollFadeIn();
  }, [body, pageIndex]);

  const NextPage = () => {
    setPageIndex(pageIndex + 1);
  };

  const PreviousPage = () => {
    setPageIndex(pageIndex - 1);
  };

  return (
    <>
      <div className="flex flex-col w-2/5 ">
        <div className="flex basis-11/12 justify-start mt-4 shadow-md ">
          <ReactMarkdown
            // eslint-disable-next-line
            className="ml-2 prose js-show-on-scroll"
            /* @ts-ignore */
            components={{ code: CodeBlock }}
            remarkPlugins={[remarkGfm]}
          >
            {documentCollection[pageIndex]}
          </ReactMarkdown>
        </div>
        <div className="flex justify-between h-16 ">
          {pageIndex === 0 ? (
            <button className="ml-10">
              <div className="invisible py-1 px-2 text-2xl text-blue-400 bg-white rounded shadow-md">
                Back
              </div>
            </button>
          ) : (
            <button className="ml-10" onClick={PreviousPage}>
              <div className="py-1 px-2 text-2xl text-blue-400 bg-white rounded shadow-md">
                Back
              </div>
            </button>
          )}

          <button className="mr-10" onClick={NextPage}>
            <div className="py-1 px-2 text-2xl text-white bg-blue-400 rounded shadow-md ">
              Next
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Document;
