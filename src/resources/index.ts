import { PLATFORM } from 'aurelia-pal';
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([PLATFORM.moduleName("app")]);
  config.globalResources([PLATFORM.moduleName("details")]);
  config.globalResources([PLATFORM.moduleName("index")]);
}
