export default {
    name: 'Card',

    // Credit card form structure
    data: function() {
      return {
        attemptSubmit: false,
        cardType: 'None',
        card:  {
          number: '',
          numberIsValid: false,
          expirationDate: {
            month: 'January',
            year: '2019'
          },
          code: {
            name: 'CVC',
            size: 3 ,
            value: '' 
          },
          isValid: false
        },
        errors: {
          number: false,
          expirationDate: false,
          code: false
        }
      };
    },

    // Methods used for form validation
    methods:{

      // Method that validates a given credit card number 
      validateNumber(newNumber){
        var valid = require('card-validator');
        var numberValidation = valid.number(newNumber);

        if(numberValidation.card != null)
        {
          this.cardType = numberValidation.card.niceType;
          this.card.code.name = numberValidation.card.code.name;
          this.card.code.size = numberValidation.card.code.size;

          this.card.numberIsValid = numberValidation.isValid;
          this.card.isValid = numberValidation.isValid &&
            (this.card.code.value.length == this.card.code.size);
        }
        else
        {
          this.card.numberIsValid = false;
          this.cardType = "None";
        }
      },

      // Convert month name to its equivalent number
      monthNameToIndex(curMonth){
        let i = 0;
        let index = -1;
        let months = ['January', 'February', 'March', 'April',
          'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'
        ];
        months.forEach(element => {
          if(element === curMonth){
            index = i;
          }
          i++;
        });
        return index;
      },

      // Returns an image given the credit card flag
      getImgUrl(cardType) {
        if(cardType === 'Visa')
          return "https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png"
        else
          return "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png"
      },

      // Validates all credit card input
      validateForm: function (event) {
        this.attemptSubmit = true;
        var valid = require('card-validator');
        var numberValidation = valid.number(this.card.number);
        this.errors.number = !numberValidation.isValid;

        if( this.card.expirationDate.year > (new Date()).getFullYear())
          this.errors.expirationDate = false;
        else
          this.errors.expirationDate =
          (this.monthNameToIndex(this.card.expirationDate.month) < (new Date()).getMonth());

        this.errors.code = this.card.code.value.length < this.card.code.size;

        if (this.errors.number || this.errors.code || this.errors.expirationDate)
          event.preventDefault();
        else
          alert("Purchase Completed. Thank you.");
      }
    },

    // Event based method given user input on credit card date
    computed: {
      months: function () {
        return [
          'January', 'February', 'March', 'April',
          'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'
        ];
      },
      years: function () {
        var years= [];
        var currentYear = (new Date()).getFullYear();
  
        for (var i = 0; i < 15; i++)
          years.push(currentYear + i);
  
        return years;
      }
    },

    // Event based method given user input on credit card number field
    watch: {
      'card.number': function (newNumber) {
        this.validateNumber(newNumber);
      }
    }
  }