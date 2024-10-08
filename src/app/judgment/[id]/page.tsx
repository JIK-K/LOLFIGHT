"use client";

import { JudgmentDTO } from "@/src/common/DTOs/judgment/judgment.dto";
import React, { useEffect, useState } from "react";

type PageProps = {
  id: string;
};

export default function Page({ params }: { params: PageProps }) {
  const [judgment, setJudgment] = useState<JudgmentDTO>();
  return (
    <>
      <div className="w-full my-16">
        <div className="w-1200px mx-auto flex">
          <div>{params.id}</div>
        </div>
      </div>
    </>
  );
}
