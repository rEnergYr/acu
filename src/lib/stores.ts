import { writable } from 'svelte/store'
import acu from '$lib/acu.json'

let indexAC = 0

/**
 * Creates a store to manage the current AC (Assassin's creed) state.
 *
 * The store provides a `subscribe` method to listen for changes and a `goToNext` method
 * to advance to the next AC state in the `acu` array. When the end of the array is reached,
 * it loops back to the beginning.
 *
 * @returns An object with `subscribe` and `goToNext` methods.
 */
function createCurrentAC() {
  const { subscribe, set } = writable(acu[0])

  return {
    subscribe,
    goToNext: () => {
      // Uses the modulo operator to loop back to the beginning when the end of the array is reached.
      indexAC = (indexAC + 1) % acu.length

      set(acu[indexAC])
    },
  }
}

export const currentAC = createCurrentAC()
