/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    gigya: any;
  }
}
const gigya = window.gigya;

export default gigya;
