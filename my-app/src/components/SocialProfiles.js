import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
    const { link, image } = props.socialprofile;

    return (
        <span >
            <a href={link} target='_blank'>
                <img src={image} alt='social-profile' style={{ width: 35, height: 35, margin: 10 }} />
            </a>
        </span>
    )
}

const SocialProfiles = () => (

    <div>
        <h2>Connect with me!</h2>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE =>
                (
                    <SocialProfile key={SOCIAL_PROFILE.id} socialprofile={SOCIAL_PROFILE} />
                ))
            }
        </div>
    </div>
)

export default SocialProfiles;