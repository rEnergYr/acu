<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { currentAC } from '$lib/stores'
  import { gsap } from '$lib/vendors/gsap'

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

  function initTextAndBarLoaderAnimation() {
    const TEXT_ANIM_DELAY_AND_DURATION_IN_SECOND = 0.4
    const BAR_LOADER_DURATION_IN_SECOND = 8

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
  }

  onMount(() => {
    initTextAndBarLoaderAnimation()
  })
</script>

<section
  id="carousel"
  class="relative flex h-full flex-col px-10 lg:px-20 lg:pr-0 3xl:px-36"
  transition:fade
>
  <div class="flex h-80 flex-col justify-center text-white 3xl:h-96">
    <h1 class="text-4xl sm:text-5xl xl:text-7xl 3xl:text-8xl">Discover universe of</h1>
    <div class="w-fit">
      <h2
        id="text"
        class="cursor-pointer text-4xl text-highlight opacity-0 duration-200 hover:text-highlight/70 sm:text-5xl xl:text-7xl 3xl:text-8xl"
        aria-label="Title of Assassin's Creed game"
        on:mouseenter={pauseAnimation}
        on:mouseleave={resumeAnimation}
      >
        {$currentAC.title}
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

  <div
    class="pointer-events-none absolute top-24 grid size-full justify-center gap-x-14 max-sm:left-0 sm:grid-cols-3 xl:-right-[8%] xl:top-44 xl:grid-cols-6"
  >
    <!-- Fist column (visible from sm) -->
    <div class="hidden w-full max-w-60 flex-col justify-center gap-y-16 sm:flex">
      <img
        class="card-img h-[33%] translate-y-48 rounded-lg object-cover brightness-75"
        src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/KYhNuXkKB70173MTMTQXc/34af253cf903c9ba84b06ed67a59fd54/ac-ii-screenshot-1.jpg"
        alt="Assassin's Creed II"
      />
    </div>

    <!-- Second column (visible from xl) -->
    <div class="hidden w-full max-w-60 flex-col justify-center gap-y-16 xl:flex">
      <img
        class="card-img h-[33%] translate-y-28 rounded-lg object-cover brightness-75"
        src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/KYhNuXkKB70173MTMTQXc/34af253cf903c9ba84b06ed67a59fd54/ac-ii-screenshot-1.jpg"
        alt="Assassin's Creed II"
      />
    </div>

    <!-- Third column (always visible) -->
    <div class="flex w-60 flex-col justify-center sm:w-full sm:max-w-60">
      <img
        class="card-img h-[33%] rounded-lg object-cover brightness-75"
        src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/KYhNuXkKB70173MTMTQXc/34af253cf903c9ba84b06ed67a59fd54/ac-ii-screenshot-1.jpg"
        alt="Assassin's Creed II"
      />
    </div>

    <!-- Fourth column (visible from sm) -->
    <div class="hidden w-full max-w-60 translate-y-20 flex-col justify-center gap-y-16 sm:flex">
      <img
        class="card-img h-[33%] rounded-lg object-cover brightness-75"
        src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/KYhNuXkKB70173MTMTQXc/34af253cf903c9ba84b06ed67a59fd54/ac-ii-screenshot-1.jpg"
        alt="Assassin's Creed II"
      />
      <img
        class="card-img h-[33%] rounded-lg object-cover brightness-75"
        src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/KYhNuXkKB70173MTMTQXc/34af253cf903c9ba84b06ed67a59fd54/ac-ii-screenshot-1.jpg"
        alt="Assassin's Creed II"
      />
    </div>

    <!-- Fifth column (visible from xl) -->
    <div class="hidden w-full max-w-60 -translate-y-16 flex-col justify-center gap-y-16 xl:flex">
      <img
        class="card-img h-[33%] rounded-lg object-cover brightness-75"
        src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/KYhNuXkKB70173MTMTQXc/34af253cf903c9ba84b06ed67a59fd54/ac-ii-screenshot-1.jpg"
        alt="Assassin's Creed II"
      />
      <img
        class="card-img h-[33%] rounded-lg object-cover brightness-75"
        src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/KYhNuXkKB70173MTMTQXc/34af253cf903c9ba84b06ed67a59fd54/ac-ii-screenshot-1.jpg"
        alt="Assassin's Creed II"
      />
    </div>

    <!-- Sixth column (visible from xl) -->
    <div class="hidden w-full max-w-60 -translate-y-28 flex-col xl:flex">
      <img
        class="card-img h-[33%] rounded-lg object-cover brightness-75"
        src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/KYhNuXkKB70173MTMTQXc/34af253cf903c9ba84b06ed67a59fd54/ac-ii-screenshot-1.jpg"
        alt="Assassin's Creed II"
      />
      <img
        class="card-img h-[33%] translate-y-16 rounded-lg object-cover brightness-75"
        src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/KYhNuXkKB70173MTMTQXc/34af253cf903c9ba84b06ed67a59fd54/ac-ii-screenshot-1.jpg"
        alt="Assassin's Creed II"
      />
      <img
        class="card-img h-[33%] translate-y-32 rounded-lg object-cover brightness-75"
        src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/KYhNuXkKB70173MTMTQXc/34af253cf903c9ba84b06ed67a59fd54/ac-ii-screenshot-1.jpg"
        alt="Assassin's Creed II"
      />
    </div>
  </div>

  <div class="h-full w-full translate-y-full flex-col text-white md:translate-y-full">
    <p class="w-full text-3xl md:w-1/3 md:text-4xl">
      Selfbook Direct streamlines hotel bookings and boosts direct revenue by offering hotels a
      modern checkout experience complete with digital wallets.
    </p>
  </div>
</section>
