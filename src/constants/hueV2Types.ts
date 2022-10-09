export type HueV2Light = {
  type: string;
  id: string;
  id_v1: string;
  owner: HueV2Owner;
  metadata: HueV2Metadata;
  on: HueV2On;
  dimming: HueV2Dimming;
  color_temperature: HueV2ColorTemperature;
  color: HueV2Color;
  dynamics: HueV2Dynamics;
  alert: HueV2Alert;
  mode: string;
  gradient: HueV2Gradient;
  effects: HueV2Effects;
  timed_effects: HueV2Effects;
};

export type HueV2Owner = {
  id: string;
  rtype: string;
};

export type HueV2Metadata = {
  archetype: string;
  name: string;
};

export type HueV2On = {
  on: boolean;
};

export type HueV2Dimming = {
  on: boolean;
};

export type HueV2ColorTemperature = {
  mirek: string;
  mirek_valid: boolean;
  mirek_schema: HueV2MirekSchema;
};

export type HueV2MirekSchema = {
  mirek_minimum: number;
  mirek_maximum: number;
};

export type HueV2Color = {
  xy: HueV2Xy;
  mirek_maximum: number;
};

export type HueV2Xy = {
  x: number;
  y: number;
};

export type HueV2Gamut = {
  red: HueV2Xy;
  green: HueV2Xy;
  blue: HueV2Xy;
  gamut_type: string;
};

export type HueV2Dynamics = {
  status: string;
  status_values: HueV2SupportedDynamicStatus[];
  speed: number;
  speed_valid: boolean;
};

export type HueV2SupportedDynamicStatus = {};

export type HueV2Alert = {
  action_values: HueV2AlertEffectType[];
};

export type HueV2AlertEffectType = {};

export type HueV2Gradient = {
  points: HueV2GradientPointGet;
  points_capable: number;
};

export type HueV2GradientPointGet = {
  color: HueV2Color;
};

export type HueV2Effects = {
  effect: HueV2Color;
  status_values: HueV2SupportedEffects[];
  status: string;
  effect_values: HueV2SupportedEffects[];
};

export type HueV2SupportedEffects = {};
