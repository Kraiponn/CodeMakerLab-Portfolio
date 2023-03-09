import React from "react";
import { useRouter } from "next/router";

/**
 * ***************************************************************************************
 * About Me Method
 * @return        void
 * ***************************************************************************************
 */
export default function ExperienceDetail() {
  const { query } = useRouter();

  console.log(query);

  return <div>ExperienceDetail</div>;
}
