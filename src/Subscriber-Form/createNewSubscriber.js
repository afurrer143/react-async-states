// import React, { useState } from "react";

function createNewSubscriberHandler(formData, setFormSubscribers) {
    // console.log("FORM DATA IN CREATE NEW SUBSCRIBE HANDLE IS", formData)
    // Form Data is ONLY the newly added/ created form subscriber once submit button is cliced (Ex is is an object and only has 3 keys)
    // formdata loks like
    //{name: 'Andrew Furrer', email: 'viperscooterdog@gmail.com', referral: 'twitter'}
    setFormSubscribers((currentSubscribers) => [
        // So currently, each line is added to subscriber view

        formData.name,
        formData.email,
        formData.referral,
        ...currentSubscribers,
      ]);
}

export default createNewSubscriberHandler