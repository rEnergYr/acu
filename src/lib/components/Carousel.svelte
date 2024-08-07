<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { currentAC } from '$lib/stores'
  import { gsap } from '$lib/vendors/gsap'

  const TEXT_ANIM_DELAY_AND_DURATION_IN_SECOND = 0.4
  const BAR_LOADER_DURATION_IN_SECOND = 8

  const barLoaderTl = gsap.timeline()
  const textAnimTl = gsap.timeline()

  function pauseAnimation() {
    barLoaderTl.pause()
    textAnimTl.pause()
  }

  function resumeAnimation() {
    barLoaderTl.resume()
    textAnimTl.resume()
  }

  function goToNext() {
    currentAC.goToNext()

    barLoaderTl.restart()
    textAnimTl.restart()
  }

  onMount(() => {
    textAnimTl.fromTo(
      '#text, #bar',
      {
        x: -12,
        opacity: 0,
      },
      {
        delay: TEXT_ANIM_DELAY_AND_DURATION_IN_SECOND,
        duration: TEXT_ANIM_DELAY_AND_DURATION_IN_SECOND,
        x: 0,
        opacity: 1,
        ease: 'power4.out',
      }
    )

    textAnimTl.to('#text, #bar', {
      delay: BAR_LOADER_DURATION_IN_SECOND - TEXT_ANIM_DELAY_AND_DURATION_IN_SECOND,
      duration: 1,
      x: 12,
      opacity: 0,
      ease: 'power4.in',
      onComplete: () => {
        setTimeout(goToNext, 500)
      },
    })

    barLoaderTl.fromTo(
      '#bar-loader',
      {
        xPercent: -100,
      },
      {
        delay: TEXT_ANIM_DELAY_AND_DURATION_IN_SECOND,
        duration: BAR_LOADER_DURATION_IN_SECOND,
        xPercent: 0,
        ease: 'none',
      }
    )

    barLoaderTl.to('#bar-loader', {
      duration: 1,
      xPercent: 100,
      opacity: 0,
      ease: 'power4.in',
    })
  })
</script>

<section class="flex flex-col">
  <div class="flex h-80 flex-col justify-center px-20 text-white" transition:fade>
    <h1 class="text-7xl">Discover universe of</h1>
    <div class="w-fit">
      <h2
        id="text"
        class="cursor-pointer text-7xl text-highlight opacity-0 duration-200 hover:text-highlight/70"
        aria-label="Title of Assassin's Creed game"
        on:mouseenter={pauseAnimation}
        on:mouseleave={resumeAnimation}
      >
        <span>{$currentAC.title}</span>
      </h2>
      <div class="relative h-0.5 overflow-hidden">
        <span
          id="bar"
          class="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-highlight/20 opacity-0"
          aria-hidden="true"
        ></span>
        <span
          id="bar-loader"
          aria-hidden="true"
          class="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-highlight"
        ></span>
      </div>
    </div>
  </div>
  <div></div>
</section>
