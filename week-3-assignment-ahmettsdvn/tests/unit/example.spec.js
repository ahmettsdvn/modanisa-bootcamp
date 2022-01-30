import Counter from '../../src/Counter.vue'
import {shallowMount, createLocalVue, mount} from '@vue/test-utils'
import Vuex from 'vuex'
import {state, mutations} from '../../src/store'

describe('', () => {

    let wrapper
    let decreaseButton
    let increaseButton
    let counterText

    const {addToCount} = mutations

  beforeEach(()=>{
    const localVue = createLocalVue()
    localVue.use(Vuex)

    wrapper = mount(Counter, {
      localVue,
      store: new Vuex.Store({
        state,
        mutations
      }),

      
    })

    decreaseButton = wrapper.find('#decrease-button')
    increaseButton = wrapper.find('#increase-button')
    counterText = wrapper.find('#counter-text')
  })

  test('Sanity check for test environment', () => {
    expect(true).toBeTruthy()
  })

  test('Counter component exist',()=>{
    expect(wrapper.exists()).toBeTruthy()   
  })

  test('Decrease button exist', () =>{
    expect(decreaseButton.exists()).toBeTruthy()
  })

  test('Increase button exist', ()=>{
    expect(increaseButton.exists()).toBeTruthy()
  })

  test('Decrease methods test', () =>{
    const state = { count: 0 }
    addToCount(state, -1)
    expect(state.count).toEqual(-1)
  })

  test('Increase methods test', () =>{
    const state = { count: 0 }
    addToCount(state, 1)
    expect(state.count).toEqual(1)
  })

  test('decrease function exist Counter component', () =>{
    expect(Counter.methods.decrease).toBeTruthy()
  })

  test('increase function exist Counter component', () =>{
    expect(Counter.methods.increase).toBeTruthy()
  })

  test('check initialize counter text', () =>{
    const state = { count: 0 }
    const initializeText = state.count +'k'
    expect(counterText.text()).toEqual(initializeText)       
  })

  test('counter text isShow?', () =>{
    expect(counterText.exists()).toBeTruthy()     
  })
})
