<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <div class="tooltip tooltip-right" data-tip="Menu">
          <label for="invoice-drawer" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
      </div>
      <span class="normal-case text-xl">{{ appConfig.name }}</span>
    </div>
    <div class="navbar-center"></div>
    <div class="navbar-end"></div>
  </div>
</template>
