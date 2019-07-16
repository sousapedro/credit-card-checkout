<template>
  <div id="app" class="flex">
    <ShoppingCart/>
    <CreditCardInput/>
  </div>
</template>

<script src="assets/js/jquery.payform.min.js" charset="utf-8"></script>
<script>

import CreditCardInput from './components/CreditCardInput/CreditCardInput.vue'
import ShoppingCart from './components/ShoppingCart/ShoppingCart.vue'

export default {
  name: 'app',
  components: {
    CreditCardInput,
    ShoppingCart
  }
}
</script>

<style>
@media only screen and (max-width: 600px) {
  .flex {
    display: flex;
    flex-direction: column;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #ebcdc3;
  min-height: 100vh;
}

.flex {
  display: flex;
}
</style>
