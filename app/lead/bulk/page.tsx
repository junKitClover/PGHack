"use client";

import TitleAndDragDrop from "./component/TitleAndDragDrop/TitleAndDragDrop";
import { LEAD_PAGE } from "state/leadStated";
import { useAtom } from "jotai";

const Page = () => {
  const [, setLeadPage] = useAtom(LEAD_PAGE);
  setLeadPage('Bulk Lead Validation');
  return (
      <TitleAndDragDrop />
  );
};

export default Page;