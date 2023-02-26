import cookies from 'vue-cookies'

export default function ({ redirect, route }) {
  if (route.name !== 'Login' && !cookies.get('ifLogin')) redirect('/Login')
}
