declare module "*.glsl" {
  const value: string;
  export default value;
}

declare function resolveLygia(params: string | string[]): string;
