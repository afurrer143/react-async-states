// import React, { useState } from "react";

function createNewSubscriberHandler(formData, setFormSubscribers) {
    // console.log("FORM DATA IN CREATE NEW SUBSCRIBE HANDLE IS", formData)
    setFormSubscribers((currentSubscribers) => [
        // SO CURRENTLY THIS SINGLE LINE APPLIES TO NAME ON SITE???  If I do two lines, each line goes to a SEPERATE subscriber block
        //{name: 'Andrew Furrer', email: 'viperscooterdog@gmail.com', referral: 'twitter'}
        formData.name,
        formData.email,
        formData.referral,
        ...currentSubscribers,
      ]);
}

export default createNewSubscriberHandler