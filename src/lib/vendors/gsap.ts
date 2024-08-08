import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Lenis from 'lenis'

/**
 * Registers GSAP plugins and sets up Lenis for smooth scrolling.
 *
 * @param {HTMLElement} wrapper - The HTML element that wraps the content to be scrolled.
 */
function registerPlugins(wrapper: HTMLElement) {
  const lenis = new Lenis({
    wrapper,
  })

  gsap.registerPlugin(ScrollTrigger)

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  return {
    // eslint-disable-next-line no-unused-vars
    lenis: (event: string, fn: (l: Lenis) => void) => lenis.on(event, fn),
  }
}

export { gsap, registerPlugins }
