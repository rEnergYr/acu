<script>
  import { fade } from 'svelte/transition'
</script>

<div transition:fade class="flex h-24 w-full items-center justify-between px-20">
  <div class=" flex flex-col items-center">
    <h1 class="font-assassin text-3xl font-medium text-white">Assassin'S</h1>
    <h1 class="font-assassin text-2xl font-medium text-white">Creed Universe</h1>
  </div>
  <a href="https://www.ubisoft.com/en-en/game/assassins-creed" target="_blank">
    <button class="bg-highlight w-28 rounded-full py-2.5 text-sm font-medium hover:opacity-80">
      Play Now !
    </button>
  </a>
</div>
