import { PLATFORM } from 'aurelia-pal';
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([PLATFORM.moduleName("app")]);
  config.globalResources([PLATFORM.moduleName("../components/details/details")]);
  config.globalResources([PLATFORM.moduleName("../components/home/index")]);
}
