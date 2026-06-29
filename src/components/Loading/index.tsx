import { AiOutlineLoading } from "react-icons/ai";
import type { FC } from "react";

const Loading: FC = () => (
  <div className="w-full min-h-100! flex! items-center! justify-center!">
    <AiOutlineLoading className="text-colorPrimary! text-4xl" />
  </div>
);

export default Loading;
