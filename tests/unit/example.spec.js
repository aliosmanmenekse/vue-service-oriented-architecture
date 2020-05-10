import { shallowMount } from '@vue/test-utils';
import Architect from '@/components/Architect.vue';

describe('Architect.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Architect, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
