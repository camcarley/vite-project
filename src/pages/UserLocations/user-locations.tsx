import React from "react";

interface UserLocationProps {
  //TODO: Add props here
}

const UserLocation: React.FC<UserLocationProps> = ({  }: UserLocationProps) => {
  return (
    <div className="NotFound">
      <h1> Not Found</h1>
    </div>
  );
};

export default UserLocation;
