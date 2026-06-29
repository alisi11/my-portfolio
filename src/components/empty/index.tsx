import { FC, ReactNode } from "react";

import error from "@/assets/images/block-vector.svg";
import calendar from "@/assets/images/calendar-error-vector.svg";
import alert from "@/assets/images/alert-vector.svg";
import Empty from "./Empty";

type EmptyType = "error" | "calendar";

interface EmptyResultProps {
  type?: EmptyType;
  description?: ReactNode;
  children?: ReactNode;
}

const EmptyResult: FC<EmptyResultProps> = ({ type, description, children }) => {
  const icons: Record<EmptyType, ReactNode> = {
    error: <img src={error} alt="error" />,
    calendar: <img src={calendar} alt="calendar" />,
  };

  return (
    <div className="flex flex-col items-center py-6">
      <Empty
        icon={type ? icons[type] : <img src={alert} alt="alert" />}
        description={description}
      />
      {children}
    </div>
  );
};

export default EmptyResult;
