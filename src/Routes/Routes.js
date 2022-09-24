import Home from '~/Pages/Home/Home';
import Following from '~/Pages/Following/Following';
import Search from '~/Pages/Search/Search';

import UploadLayout from '~/Components/Layout/UploadLayout/UploadLayout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/search', component: Search, layout: null },
    { path: '/upload', component: Following, layout: UploadLayout },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
