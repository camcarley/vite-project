import React from "react";

interface NotFoundProps {
    //TODO: Add props here
    statusCode: number;
}

const NotFound: React.FC<NotFoundProps> = ({ statusCode }: NotFoundProps) => {
  return (
    <div className="NotFound">
      <h1>{statusCode} Not Found</h1>
    </div>
  );
};

export default NotFound;
