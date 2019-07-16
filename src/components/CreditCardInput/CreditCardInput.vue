<template>
  <div class="card mobile">
    <div class="card-bg">

      <!-- If the flag is either mastercard or visa it shows the image, otherwise shows a string -->
      <img class="card-flag" v-bind:class="{ 'visible': cardType == 'Visa'}"
      src="../../assets/visa-logo.png" style="max-height: 15px;">

      <img class="card-flag" v-bind:class="{ 'visible': cardType == 'Mastercard'}"
      src="../../assets/mastercard-logo.svg" style="max-height: 15px;">

      <label class="card-name"
        v-bind:class="{ 'visible': cardType != 'None' && cardType != 'Mastercard' && cardType != 'Visa'}">
        {{ cardType }}
      </label>

      <!-- Simply stetical to fit the design chosen -->
      <span class="card-label world-label">world</span>
      
      <form ref="form" id="app" style="background: transparent; min-height: 0;"
      v-on:submit="validateForm">

        <!-- This div handles the card number input  -->
        <div class="number-area">
          <label class="card-label">Card Number</label>
          <input  type="text"
                  name="number"
                  v-model="card.number"
                  maxlength="19"
                  ref="card.number"
                  required
                  id="cardNumberInput"
                  v-mask="'#### #### #### ####'"
                  v-bind:class="{ 'input-number': true, 'invalid-input': errors.number && attemptSubmit}"
                  placeholder="0000 0000 0000 0000"
                  data-number
                  />
          <p id="number-error" class="error-msg"
          v-bind:class="{ 'visible': errors.number && attemptSubmit}"
          number-error>*Invalid Card Number</p>
        </div>

        <!-- This div handles the card date input  -->
        <div class="date-area">
          <span class="card-label">Expiration Date</span>
          <div style="display: block;">
          <select v-model="card.expirationDate.month"
                name="month"
                class="date-input"
                placeholder="01"
                required
                ref="card.expirationDate.month">
              <option v-for="month in months" :key="month" style="color:black">{{ month }}</option>
          </select>
          <select v-model="card.expirationDate.year"
                name="year"
                class="date-input"
                required
                ref="card.expirationDate.year">
              <option v-for="year in years" :key="year" style="color:black">{{ year }}</option>
          </select>
          <p class="error-msg" 
           v-bind:class="{ 'visible': errors.expirationDate && attemptSubmit}"
           date-error>*Invalid Date</p>
          </div>
        </div>

        <!-- This div handles the card secret code input  -->
        <div class="code-area">
          <span class="card-label">{{ card.code.name != undefined ? card.code.name : "CVC" }}</span>
          <input  type="tel"
                  name="cvc"
                  v-model="card.code.value"
                  :minlength="card.code.size"
                  :maxlength="card.code.size"
                  ref="card.code.value"
                  id="cardCVCInput"
                  class="code-input"
                  placeholder="***"
                  pattern="^[0-9]*$"
                  required
                  data-code
                  />
          <p class="error-msg"
          v-bind:class="{ 'visible': errors.code && attemptSubmit}">*Invalid Code</p>
        </div>

        <!-- The button for checkout -->
        <button class="checkout-btn">
          <img alt="Apple Watch" src="../../assets/arrow.png" style="max-width: 50%; margin-top: 4px;">
        </button>
      </form>
    </div>
  </div>
</template>

<script src="./CreditCardInput.js" />
<style scoped> @import './CreditCardInput.css' </style>
