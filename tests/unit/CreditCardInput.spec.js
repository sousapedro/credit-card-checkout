import { shallowMount } from '@vue/test-utils';
import CreditCardInput from '../../src/components/CreditCardInput/CreditCardInput.vue';

describe('Credit Card Form Validation', () => {
  const wrapper = shallowMount(CreditCardInput)

  it('Credit card number should be invalid', () => {
    wrapper.find("[data-number]").setValue("1111 1111 1111 1111")
    wrapper.find("[data-code]").setValue("123")

    const button = wrapper.find('button');
    button.trigger('click');

    expect(wrapper.find("[number-error]").isVisible()).toBe(true);
  });

  it('Credit card expiration date should be invalid', () => {
    const button = wrapper.find('button');
    button.trigger('click');

    expect(wrapper.find("[date-error]").isVisible()).toBe(true);
  });

  it('Credit card form should be valid', () => {
    wrapper.find("[data-number]").setValue("4111 1111 1111 1111");
    wrapper.find("[data-code]").setValue("123");

    const button = wrapper.find('button');
    button.trigger('click');

    expect(window.alert).toBeDefined();
  });

})