import React from "react";

import { ITestimony } from "lib/types";

type TestimonyCard = ITestimony;

function TestimonyCard({ text, name, school = "", title = "" }: TestimonyCard) {
  return (
    <div className="text-gray-700">
      <p className="mb-4 text-lg font-bold">
        <span>&rdquo;</span>
        {text}
      </p>
      <p className="mb-2">{name}</p>
      {school && <p className="">{school}</p>}
      {title && <p>{title}</p>}
    </div>
  );
}

export default TestimonyCard;
