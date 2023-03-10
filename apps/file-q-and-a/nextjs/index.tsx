import Head from "next/head";
import { useState } from "react";

import FileQandAArea from "../components/FileQandAArea";
import { FileLite } from "../types/file";
import FileUploadArea from "../components/FileUploadArea";

export default function FileQandA() {
  const [files, setFiles] = useState<FileLite[]>([]);

  return (
    <div className="flex items-left text-left h-screen flex-col">
      <Head>
        <title>TCD File Q&A AI APPLICATION</title>
      </Head>
      <div className="max-w-3xl mx-auto m-8 space-y-8 text-gray-800">
        <h1 className="text-4xl">File Q&A</h1>

        <div className="">
          APPLICATION USES CHAT-GPT3-TURBO REV 7.1 UPDATED 10.03.23 J SMITH
          To search for answers from the content in your files, upload them here
          and we will use OpenAI embeddings and GPT to find answers from the
          relevant documents.
        </div>

        <FileUploadArea
          handleSetFiles={setFiles}
          maxNumFiles={75}
          maxFileSizeMB={30}
        />

        <FileQandAArea files={files} />
      </div>
    </div>
  );
}
