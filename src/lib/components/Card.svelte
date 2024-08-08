<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { gsap, registerPlugins } from '$lib/vendors/gsap'

  let showCardContent = false
  let cardContent: HTMLElement

  $: if (cardContent) {
    registerPlugins(cardContent).lenis('scroll', (l) => {
      const velocity = Math.abs(l.velocity)
      const max = 5
      let y = 0

      if (l.direction === 1) {
        y -= velocity > max ? max : velocity
      }

      if (l.direction === -1) {
        y += velocity > max ? max : velocity
      }

      gsap.to('#carousel-img img', {
        yPercent: `+=${y}`,
      })
    })
  }

  onMount(() => {
    gsap.to('#card', {
      duration: 0.35,
      delay: 1,
      borderRadius: 12,
      margin: 20,
      onComplete: () => {
        showCardContent = true
      },
    })
  })
</script>

<div id="card" class="h-full overflow-hidden bg-card">
  {#if showCardContent}
    <div
      transition:fade
      class="flex h-32 w-full items-center justify-between bg-card-secondary px-10 lg:px-20 3xl:px-36"
    >
      <div class="flex -translate-y-1.5 flex-col items-center">
        <h3 class="font-assassin text-3xl font-medium text-white">Assasin's Creed</h3>
        <h3 class="font-assassin text-3xl font-medium text-white">Universe</h3>
      </div>
      <a
        href="https://www.ubisoft.com/en-en/game/assassins-creed"
        target="_blank"
        aria-label="Play Now on Ubisoft"
        class="-translate-y-1.5"
      >
        <button class="w-28 rounded-full bg-highlight py-2.5 text-sm font-medium hover:opacity-80">
          Play Now !
        </button>
      </a>
    </div>
    <div class="h-full -translate-y-3 overflow-auto rounded-2xl bg-card" bind:this={cardContent}>
      <slot />
    </div>
  {/if}
</div>

<style>
  ::-webkit-scrollbar {
    @apply w-2;
  }

  ::-webkit-scrollbar-track {
    @apply mb-28 mt-3 rounded-full bg-white/10;
  }

  ::-webkit-scrollbar-thumb {
    @apply rounded-full bg-white/80;
  }
</style>
