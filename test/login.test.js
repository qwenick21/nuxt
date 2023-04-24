import { mount, createLocalVue } from '@vue/test-utils'
import elementUI from 'element-ui'
import Login from '@/pages/Login.vue'

const localVue = createLocalVue()
localVue.use(elementUI)

describe('Login test', () => {
  let $router
  let $cookies

  beforeEach(() => {
    $router = {
      push: jest.fn(),
    }
    $cookies = {
      set: jest.fn(),
    }
  })
  test('Normal login', () => {
    const wrapper = mount(Login, {
      localVue,
      mocks: {
        $router,
        $cookies,
      },
    })
    const loginSetData = [
      { account: 'frank32', password: 'aaaa1234' },
      { account: 'nick001', password: 'aaaa1234' },
      { account: 'qwenick21', password: 'aaaa1234' },
    ]
    wrapper.setData({ loginSet: loginSetData })
    expect(wrapper.vm.loginSet).toEqual(loginSetData)

    const accountInput = 'nick001'
    wrapper.find('.LoginAccount input').setValue(accountInput)
    wrapper.find('.LoginPassword input').setValue('aaaa1234')
    expect(wrapper.vm.loginCheck).toBe(true)

    wrapper.find('.LoginButton').trigger('click')
    expect($router.push).toHaveBeenCalledWith('/')
    expect($cookies.set).toHaveBeenCalledWith('ifLogin', true)
    expect($cookies.set).toHaveBeenCalledWith('username', accountInput)
  })
})
