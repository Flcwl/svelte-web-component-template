<svelte:options tag="counter-button" />

<script lang="ts">
  export let count: number = 0

  const increment = () => {
    console.log('[ count ] >', count, typeof count)
    // props will be string
    count = +count + 1
  }
</script>

<button on:click={increment} class="btn bg-black text-white">
  <slot />
  count is {count}
</button>

<style>
  .btn {
    border: 8px solid #35eb9a;
  }
</style>
