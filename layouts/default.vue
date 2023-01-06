<script setup lang="ts">
const appConfig = useAppConfig();
useHead({ title: appConfig.name });
</script>

<template>
  <AppDrawer>
    <!-- Header -->
    <AppHeader />

    <!-- Content -->
    <slot />
  </AppDrawer>
</template>
