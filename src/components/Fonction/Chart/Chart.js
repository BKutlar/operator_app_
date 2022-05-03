
import 'regenerator-runtime/runtime';

import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';


 const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-userdatabase-ekrly",
    autoRefresh: true,
    maxDataAge: 10,
});



export default sdk;

