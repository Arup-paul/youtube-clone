import React from 'react';
import {Helmet} from "react-helmet";
function HelmetCustom({
                             title="Youtube using youtube",
                             description="a project made by youtube api"
}) {
    return (
       <Helmet>
           <title>{title}</title>
           <meta name='description' content={description} />
           <meta property='og:locale' content='en_US' />
           <meta property='og:type' content={title} />
           <meta property='og:description' content={description} />
       </Helmet>
    );
}

export default HelmetCustom;