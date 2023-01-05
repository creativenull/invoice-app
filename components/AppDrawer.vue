<template>
  <div class="drawer">
    <input id="invoice-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <slot />
    </div> 
    <div class="drawer-side">
      <label for="invoice-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>
