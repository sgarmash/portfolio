<template>
  <li>
    <a 
      class="link social__link"
      v-bind:href="href"
      v-bind:target="target"
      v-bind:rel="rel"
      v-bind:download="download"
    >
      <span class="icon__theme">
        <font-awesome-icon v-bind:icon="icon" />
      </span> 
      <span class="social__name">
        {{text}}
      </span>
    </a>
  </li>
   
</template>

<script>
export default {
	props: [
    'text', 
    'href', 
    'icon', 
    'target', 
    'rel', 
    'download'
  ]
}
</script>