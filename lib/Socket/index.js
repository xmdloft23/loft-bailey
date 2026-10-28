import { DEFAULT_CONNECTION_CONFIG } from '../Defaults/index.js';
import { makeCommunitiesSocket } from './communities.js';
import { printLoftBaileyBanner } from '../Branding.js';
// export the last socket layer
const makeWASocket = (config) => {
    printLoftBaileyBanner({ enabled: config?.loftBanner !== false });
    const newConfig = {
        ...DEFAULT_CONNECTION_CONFIG,
        ...config
    };
    return makeCommunitiesSocket(newConfig);
};
export default makeWASocket;
