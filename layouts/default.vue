<script setup lang="ts">
const appConfig = useAppConfig();
useHead({
  title: appConfig.name,
  htmlAttrs: {
    "data-theme": "luxury",
  },
});
</script>

<template>
  <AppDrawer>
    <!-- Header -->
    <AppHeader />

    <!-- Content -->
    <slot />
  </AppDrawer>
</template>
