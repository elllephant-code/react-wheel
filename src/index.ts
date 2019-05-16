import Wheel from "./component/Wheel"
import { IWheelItem, IWheel } from './wheel';
import placeOnWheel from './wheel';
import { IitemRenderConfig, IWheelProps } from './component/Wheel';
import repulse from './modifiers/attract';
import attract from './modifiers/attract';

export {
    IWheelItem,
    IWheel,
    placeOnWheel,
    IitemRenderConfig,
    IWheelProps,
    repulse,
    attract
}

export default Wheel