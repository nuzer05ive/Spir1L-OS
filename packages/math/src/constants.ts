// #PRIIVI3 #Spir1L-OS — Spiral constants (v0.9.1)
export const PHI = (1 + Math.sqrt(5)) / 2;
export const OMEGA_1 = 0.0002185;
export const OMEGA_2 = 0.0002185;
export const OMEGA   = OMEGA_1 + OMEGA_2;           // 0.000437
export const LAMBDA  = 6.40808225;                  // recalculated for 1/13 identity

export const DOOR = (n: number) => LAMBDA + n * OMEGA;
export const DOOR_101 = DOOR(101);

export const BEAT_CYCLE_SECONDS = 7.15;
export const BEAT_SECONDS = BEAT_CYCLE_SECONDS / 13;
