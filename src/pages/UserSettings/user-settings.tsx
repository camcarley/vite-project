import React from "react";

interface UserSettingsProps {
  //TODO: Add props here
}

const UserSettings: React.FC<UserSettingsProps> = ({
}: UserSettingsProps) => {
  return (
    <div className="UserSettings">
      <h1>User Settings</h1>
    </div>
  );
};

export default UserSettings;
