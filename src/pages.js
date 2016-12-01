import Page from './components/page/Page';
import classicData from '../server/products/classic.json';
import hatBoxData from '../server/products/hat-box.json';
import VaseData from '../server/products/vase.json';
import MillionRosesData from '../server/products/million-roses.json';

export const Classic = () => <Page data={classicData} />;
export const HatBox = () => <Page data={hatBoxData} />;
export const Vase = () => <Page data={VaseData} />;
export const MillionRoses = () => <Page data={MillionRosesData} />;
