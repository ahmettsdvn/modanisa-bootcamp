import { shallowMount, mount } from '@vue/test-utils'
import Home from '../../src/components/Home/Home.vue'
import YoutubeCard from '../../src/components/Card/Card.component.vue'

describe('', () => {

  let wrapper
  beforeEach(()=>{
    wrapper = shallowMount(Home)
  })
  
  it('Home component should be exists',()=>{
    expect(wrapper.exists()).toBeTruthy();
  })
})
