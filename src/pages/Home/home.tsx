import React from "react";

interface HomeProps {
  //TODO: Add props here
}

const Home: React.FC<HomeProps> = ({
}: HomeProps) => {
  return (
    <div className="UserSettings">
      <h1>User Settings</h1>
    </div>
  );
};

export default Home;
