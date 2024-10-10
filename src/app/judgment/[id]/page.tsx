"use client";

import { JudgmentDTO } from "@/src/common/DTOs/judgment/judgment.dto";
import React, { useEffect, useState } from "react";
import JudgmentHeadComponet from "../components/JudgmentHeadComponet";
import { getJudgment, increaseJudgment } from "@/src/api/judgment.api";
import JudgmentBodyComponent from "../components/JudgmentBodyComponent";

type PageProps = {
  id: number;
};

export default function Page({ params }: { params: PageProps }) {
  const [judgment, setJudgment] = useState<JudgmentDTO>();

  useEffect(() => {
    if (!judgment) {
      getJudgment(params.id)
        .then((response) => {
          setJudgment(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    if (judgment) {
      increaseJudgment(judgment);
    }
  }, [judgment]);
  return (
    <>
      <div className="w-full my-16">
        <div className="w-1200px mx-auto flex">
          <div className="w-full bg-white dark:bg-dark shadow-md">
            <div className="head">
              <JudgmentHeadComponet judgment={judgment!} />
            </div>
            <div className="body">
              <JudgmentBodyComponent judgment={judgment!} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
