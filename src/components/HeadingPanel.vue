<!-- a panel that contains the heading -->
<template>
  <nav class="navbar navbar-expand-md">
    <div class="navbar-brand">
      <img style="max-width:275px; max-height:67px; margin-top: -7px;" src="../img/Brand.png" width="1099"
           height="266" alt="Brand" class="img-responsive">
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          A project by Suhao Jeffrey Huang
        </li>
    </ul>
    </div>
  </nav>

</template>

<script>
  export default {
    name: 'HeadingPanel',
    props: {
      name: {
        title: 'Heading',
        description: "TODO"
      }
    },
  };
</script>

<style scoped>
  .navbar-expand-md {
    background-color: #FFFFFF;
    border-color: #FFFFFF;
  }
</style>