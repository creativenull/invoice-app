<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">
          This is the start page of {{ appConfig.name }}, click the links below
          to get started.
        </p>
        <button class="btn btn-primary">Create an invoice</button>
      </div>
    </div>
  </div>
</template>
