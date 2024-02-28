import React from "react";

const Teams = () => {
  return (
    <div className="w-2/3 flex min-h-[60vh] items-center justify-start flex-col gap-y-10">
      <h3 className="text-3xl heading font-semibold">My Teams</h3>
      <div>
        <TeamCard />
      </div>
    </div>
  );
};

export default Teams;

const TeamCard = () => {
  return (
    <div className="bg-primary-800/40 px-10 py-5 rounded">
      <h5 className="text-accent-300">Team Coders</h5>
      <p className="text-xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, amet?
      </p>
      <div>
        
      </div>
    </div>
  );
};
