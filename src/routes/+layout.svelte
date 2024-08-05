<script lang="ts">
  import '@/app.css'
  import Card from '$lib/components/Card.svelte'
</script>

<div class="flex h-screen flex-col bg-black">
  <Card>
    <slot />
  </Card>
</div>
