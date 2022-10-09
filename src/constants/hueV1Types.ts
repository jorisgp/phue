export type HueV1API = {
  success: {
    username: string;
  };
}[];

export type HueV1Light = {
  id: number;
  state: HueV1State;
  lastinstall: Date;
  type: string;
  name: string;
  modelid: string;
  manufacturername: string;
  productname: string;
  capabilities: HueV1Capabilities;
  config: HueV1Config;
  uniqueid: string;
  swversion: string;
};

export type HueV1State = {
  on: boolean;
  bri: number;
  hue: number;
  sat: number;
  effect: string;
  xy: [number, number];
  alert: string;
  colormode: string;
  mode: string;
  reachable: boolean;
};

export type HueV1SwUpdate = {
  state: string;
  lastinstall: Date;
};

export type HueV1Capabilities = {
  certified: boolean;
  control: {
    colorgamuttype: string;
    colorgamut: [string, string][];
    mindimlevel: number;
    maxlumen: number;
  };
  streaming: {renderer: boolean; proxy: boolean};
};

export type HueV1Config = {
  archetype: string;
  function: string;
  direction: string;
  startup: {mode: string; configured: boolean};
};
