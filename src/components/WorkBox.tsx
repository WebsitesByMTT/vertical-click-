"use client";
import React from "react";
import Image from "next/image";
import Divider from "./Divider";

interface WorkBoxProps {
  title: string;
  url: string;
  category: string;
  tool?: string;
  articles?: string[];
  tableData: {
    keyword: string;
    position: number;
    country: string;
    image: string;
  }[];
}

const WorkBox = ({ data }: { data: WorkBoxProps }) => {
  const [selectedRow, setSelectedRow] = React.useState<number>(0);
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-start space-y-4 md:m-4">
          <h3 className="rounded-md bg-[#F05186] p-2 text-start text-4xl font-medium text-white uppercase md:text-5xl">
            {data.title}
          </h3>
          <p className="text-[#8F5BFE]">
            URL:-
            <span className="text-black hover:underline">
              <a href={data.url}>{data.url}</a>
            </span>
          </p>
          <p className="text-[#8F5BFE]">
            Category:-<span className="text-black">{data.category}</span>
          </p>
          {data.tool && (
            <p className="text-[#8F5BFE]">
              Tool we use:-<span className="text-black">{data.tool}</span>
            </p>
          )}
          {data.articles?.map((article, index) => (
            <p className="text-[#8F5BFE]" key={index}>
              Article:-<span className="text-black">{article}</span>
            </p>
          ))}
        </div>
        <div className="mx-auto mt-4 w-full max-w-4xl md:mt-0 md:p-4">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">
            RANKED KEY WORDS
          </h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-6 text-left">S.no</th>
                  <th className="py-3 pr-6 text-left">Keyword</th>
                  <th className="py-3 pr-6 text-left">Position</th>
                  <th className="py-3 text-left">Target Country</th>
                </tr>
              </thead>
              <tbody>
                {data.tableData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 ${selectedRow === index ? "bg-purple-100" : ""}`}
                    onClick={() => setSelectedRow(index)}
                  >
                    <td
                      className={`py-3 pr-8 pl-2 ${selectedRow === index ? "text-purple-500" : ""}`}
                    >
                      {index + 1}
                    </td>
                    <td
                      className={`py-3 pr-8 ${selectedRow === index ? "text-purple-500" : ""}`}
                    >
                      {row.keyword}
                    </td>
                    <td
                      className={`py-3 pr-8 ${selectedRow === index ? "text-purple-500" : ""}`}
                    >
                      {row.position}
                    </td>
                    <td
                      className={`py-3 ${selectedRow === index ? "text-purple-500" : ""}`}
                    >
                      {row.country}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* image */}
      {selectedRow !== null && (
        <Image
          src={data.tableData[selectedRow].image}
          alt="trueadblocker"
          width={1000}
          height={1000}
          className="my-12 w-full rounded-md border"
        />
      )}
      <Divider />
    </div>
  );
};

export default WorkBox;
