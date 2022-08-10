declare module 'raf-stub' {
  type RafStubStep = (steps?: number, duration?: number) => void;
  type RafStubReset = () => void;
  export function replaceRaf(roots?: Object[]): void;
  export interface RafStub {
    step: RafStubStep;
    reset: RafStubReset;
  }
}
