import {cleanup, init} from 'detox';
import * as adapter from 'detox/runners/jest/adapter';

const config = require('../package.json').detox;
let noTypeJasmine: any = jasmine;

jest.setTimeout(120000);
noTypeJasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await init(config, {initGlobals: false});
  await device.launchApp();
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await cleanup();
  jest.setTimeout(3000);
});
