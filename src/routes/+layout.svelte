<script>
  import { gsap } from 'gsap'
  import { onMount } from 'svelte'
  import '@/app.css'
  import Header from '@/components/Header.svelte'

  let showContent = false

  onMount(() => {
    gsap.to('#container', {
      duration: 0.35,
      delay: 1,
      padding: 24,
      onComplete: () => {
        showContent = true
      },
    })

    gsap.to('#card', {
      duration: 0.35,
      delay: 1,
      borderRadius: 12,
    })
  })
</script>

<div id="container" class="flex h-screen flex-col bg-black">
  <div id="card" class="bg-card h-full">
    {#if showContent}
      <Header />
      <slot />
    {/if}
  </div>
</div>
