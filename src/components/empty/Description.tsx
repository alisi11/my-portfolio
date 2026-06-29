import { FC, ReactNode } from "react";

interface DescriptionProps {
  title: string;
  children?: ReactNode;
}

const Description: FC<DescriptionProps> = ({ title, children }) => (
  <div className="empty__description">
    <h5 className="empty__title fm-bo font-yekanBakhBold">{title}</h5>
    <span className="empty__text fm-rg font-yekanBakhRegular">{children}</span>
  </div>
);

export default Description;
