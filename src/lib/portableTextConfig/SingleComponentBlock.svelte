<script lang="ts">
    import type {BlockComponentProps} from '../rendererTypes'
    export let portableText: BlockComponentProps
    $: ({value} = portableText)
  </script>
  
  <div>
    {#if value.style === 'h1'}
      <h1><slot /></h1>
    {:else if value.style === 'h2'}
      <h2><slot /></h2>
    {:else if value.style === 'h3'}
      <h3 class="text-lg font-semibold my-2"><slot /></h3>
    {:else if value.style === 'h4'}
      <h4 class="text-lg font-semibold my-2"><slot /></h4>
    {:else if value.style === 'h5'}
      <h5><slot /></h5>
    {:else if value.style === 'h6'}
      <h6><slot /></h6>
    {:else if value.style === 'blockquote'}
      <blockquote><slot /></blockquote>
    {:else if value.style === 'normal'}
      <p class="text-sm my-2"><slot /></p>
    {:else}
      <slot />
    {/if}
  </div>