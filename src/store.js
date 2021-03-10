import { writable } from "svelte/store";

export const logoStore = writable({
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  navHeight: 0,
});
