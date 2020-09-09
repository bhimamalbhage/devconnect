import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => (
  <div className='profile-about bg-light p-2'>
    {bio && (
      <Fragment>
        <h2 className='text-primary text-white'>
          {name.trim().split(" ")[0]}'s Bio
        </h2>
        <p className='text-white'>{bio}</p>
      </Fragment>
    )}

    <div className='line'></div>
    <h2 className='text-primary text-white'>Skill Set</h2>
    <div className='skills2'>
      {skills.map((skill, index) => (
        <div key={index} className='protag m-1'>
          {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
