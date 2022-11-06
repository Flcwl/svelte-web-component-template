<svelte:options tag="app-root" />

<script lang="ts">
  import Counter from '@/components/Counter.svelte'
</script>

<main>
  <div class="container">
    <Counter />
  </div>
</main>

<style>
  .container {
    width: 100%;
  }
</style>
