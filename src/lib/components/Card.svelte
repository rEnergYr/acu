<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { gsap } from '$lib/gsap'

  let showCardContent: boolean = false

  onMount(() => {
    gsap.to('#card', {
      duration: 0.35,
      delay: 1,
      borderRadius: 12,
      margin: 24,
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
      class="flex h-24 w-full items-center justify-between bg-card-secondary px-20"
    >
      <div class=" flex flex-col items-center">
        <h1 class="font-assassin text-3xl font-medium text-white">Assassin'S</h1>
        <h1 class="font-assassin text-2xl font-medium text-white">Creed Universe</h1>
      </div>
      <a href="https://www.ubisoft.com/en-en/game/assassins-creed" target="_blank">
        <button class="w-28 rounded-full bg-highlight py-2.5 text-sm font-medium hover:opacity-80">
          Play Now !
        </button>
      </a>
    </div>
    <slot />
  {/if}
</div>
