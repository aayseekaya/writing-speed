import React from 'react';  
import AddChallenge from './AddChallenge';
import  ChallengeList  from "./ChallengeList ";
const Challenges = () => {
    return (
        <React.Fragment>
            <AddChallenge />
        <ChallengeList/>
        </React.Fragment>
    );
}

export default Challenges;