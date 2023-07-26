"use client";
import React from "react";

function TestInner({ params }: { params: { testId: string } }) {
  return <div>Inner page{params.testId}</div>;
}

export default TestInner;
