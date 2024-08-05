<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { gsap } from '$lib/vendors/gsap'

  const tl = gsap.timeline()
  let textBarTween: gsap.core.Tween

  function pause() {
    tl.pause()
    textBarTween.pause()
  }

  function resume() {
    tl.resume()
    textBarTween.resume()
  }

  onMount(() => {
    tl.to('#bar-loader', {
      delay: 0.4,
      duration: 5,
      x: 0,
    })

    tl.to('#bar-loader', {
      duration: 0.9,
      xPercent: 100,
      opacity: 0.7,
      ease: 'power4.in',
    })

    textBarTween = gsap.to('#text, #bar', {
      delay: 5.3,
      duration: 1,
      x: 15,
      opacity: 0,
      ease: 'power4.in',
    })
  })
</script>

<section class="flex flex-col">
  <div class="flex h-96 flex-col justify-center px-20 text-white" transition:fade>
    <h1 class="text-7xl">Discover universe of</h1>

    <div class="w-fit">
      <h1
        id="text"
        class=" cursor-pointer text-7xl text-highlight duration-200 hover:text-highlight/70"
        on:mouseenter={pause}
        on:mouseleave={resume}
      >
        Assassin's creed II
      </h1>
      <div class="relative h-0.5 overflow-hidden">
        <span id="bar" class="absolute bottom-0 left-0 h-0.5 w-full bg-highlight/50"></span>
        <span
          id="bar-loader"
          class="absolute bottom-0 left-0 h-0.5 w-full -translate-x-full bg-highlight"
        ></span>
      </div>
    </div>
  </div>
  <div></div>
</section>
