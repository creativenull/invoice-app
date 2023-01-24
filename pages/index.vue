<script setup lang="ts">
// const api = useApi();
// const { invoices } = await api.getInvoices();
const { invoices } = await $fetch("/api/invoices");
</script>

<template>
  <div class="mx-4 my-8 space-y-4 md:mx-0 md:w-3/5 md:mx-auto">
    <div
      v-for="invoice in invoices"
      :key="invoice.refId"
      class="card bg-primary text-primary-content"
    >
      <div class="card-body flex-row items-center justify-between">
        <div class="flex flex-col">
          <h2 class="card-title">{{ invoice.title }}</h2>
          <p>{{ invoice.refId }}</p>
        </div>
        <div class="card-actions">
          <!-- <NuxtLink class="btn" :to="invoice.route"> View </NuxtLink> -->
          <a class="btn" :href="invoice.route"> View </a>
        </div>
      </div>
    </div>
  </div>
</template>
