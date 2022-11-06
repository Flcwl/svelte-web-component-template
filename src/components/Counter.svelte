<svelte:options tag="counter-button" />

<script lang="ts">
  import { onMount } from 'svelte'

  let visible: boolean = false
  let photos = []

  const handleClose = () => {
    console.log('[ close ] >', visible)
    visible = false
  }

  onMount(async () => {
    const res = await fetch(`/tutorial/api/album`)
    photos = await res.json()
  })
</script>

{#if visible}
  <div class="alert">
    <span class="alert__icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
        <path
          d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m21.333333 576h-42.666666a21.333333 21.333333 0 0 0-21.333334 21.333334v42.666666a21.333333 21.333333 0 0 0 21.333334 21.333334h42.666666a21.333333 21.333333 0 0 0 21.333334-21.333334v-42.666666a21.333333 21.333333 0 0 0-21.333334-21.333334z m0-384h-42.666666a21.333333 21.333333 0 0 0-21.333334 21.333334v277.333333a21.333333 21.333333 0 0 0 21.333334 21.333333h42.666666a21.333333 21.333333 0 0 0 21.333334-21.333333V298.666667a21.333333 21.333333 0 0 0-21.333334-21.333334z"
        />
      </svg>
    </span>
    <div class="alert__message">警示提示的文案1</div>
    <button on:click={handleClose} class="alert__close">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1">
        <path
          d="M769.322667 256.426667a42.666667 42.666667 0 0 1 0 60.373333l-196.117334 196.053333 196.117334 196.138667a42.666667 42.666667 0 1 1-60.330667 60.330667l-196.117333-196.117334-196.096 196.117334a42.666667 42.666667 0 1 1-60.330667-60.330667l196.074667-196.117333-196.074667-196.096a42.666667 42.666667 0 1 1 60.330667-60.330667l196.096 196.074667 196.117333-196.074667a42.666667 42.666667 0 0 1 60.330667 0z"
        />
      </svg>
    </button>
  </div>
{/if}

<style>
  .alert {
    background-color: #fefae0;
    position: relative;
    padding: 12px 20px;
    border-radius: 6px;
    font-size: 0.875rem;
    color: #5f6a7a;
    line-height: 1.25rem;
    display: flex;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;
  }

  .alert__icon {
    font-size: 1rem;
    margin-inline-end: 8px;
    flex-shrink: 0;
    color: #fab007;
  }

  .alert__message {
    flex: 1 1;
    width: 100%;
    font-size: 0.875rem;
    color: #1f2733;
  }

  .alert__close {
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: fit-content;
    height: fit-content;
    appearance: none;
    border: none;
    background-color: transparent;
    background-image: none;
    margin: 0;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
    touch-action: manipulation;
    cursor: pointer;
    transition: all cubic-bezier(0.37, 0.02, 0.34, 1);
    outline: none;
    color: #5f6a7a;
    line-height: inherit;
    height: 1.25rem;
    margin-inline-start: 8px;
  }

  svg {
    font-size: inherit;
    width: 1em;
    height: 1em;
    fill: currentColor;
    stroke: currentColor;
    display: inline-block;
    vertical-align: -0.15em;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
</style>
