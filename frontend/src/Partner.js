import React, { useEffect } from "react";

const Partner = () => {
    const redirectURL = "https://1wrlst.com/?p=ym7n";

    useEffect(() => {
        window.location.href = redirectURL;
    }, []);

    return <div>redirect to {redirectURL} ...</div>;
};

export default Partner;
