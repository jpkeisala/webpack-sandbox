<template>
  <div id="app">
    <div class="dd">
      Home
    </div>
    <img v-bind:src="logoImg">
    <h1></h1>
    <el-button @click.native="startHacking">Let's do it</el-button>


        <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1 some longet ther here yeee</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item disabled>Action 4</el-dropdown-item>
    <el-dropdown-item divided>Action 5</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

  </div>
</template>

<script>

</script>

<style lang="postcss">

</style>
