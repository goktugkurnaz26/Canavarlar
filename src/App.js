import { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

import './App.css'

const App = () => {
  // console.log('render')
  const [aramaAlanı, setAramaAlanı] = useState('') //value,setValue
  const [canavarlar, setCanavarlar] = useState([])
  // const [dizeAlanı, setDizeAlanı] = useState('')
  const [filtrelenmişCanavarlar, setFiltrelenmişCanavarlar] =
    useState(canavarlar)
  // console.log('render')

  useEffect(() => {
    // console.log('effect ateşlendi')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setCanavarlar(users))
  }, [])

  useEffect(() => {
    const yeniFiltrelenmişCanavarlar = canavarlar.filter((canavar) => {
      return canavar.name.toLocaleLowerCase().includes(aramaAlanı)
    })
    setFiltrelenmişCanavarlar(yeniFiltrelenmişCanavarlar)
    console.log('effect ateşlendi')
  }, [canavarlar, aramaAlanı])

  // console.log(aramaAlanı)
  const aramaDeğişikliği = (e) => {
    const aramaAlanıDizesi = e.target.value.toLocaleLowerCase()
    setAramaAlanı(aramaAlanıDizesi)
  }

  // console.log(filtrelenmişCanavarlar)
  // const dizeDeğişimi = (e) => {
  //   setDizeAlanı(e.target.value)
  // }

  return (
    <div className='App'>
      <h1 className='app-title'>CANAVARLAR</h1>
      <SearchBox
        onChangeHandler={aramaDeğişikliği}
        placeholder='canavarları ara'
        className='monsters-search-box'
      />
      {/* <SearchBox onChangeHandler={dizeDeğişimi} placeholder='dize ayarla' /> */}
      <CardList canavarlar={filtrelenmişCanavarlar} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       canavarlar: [],
//       aramaAlanı: '',
//     }
//     // console.log('constructor')
//   }
//   componentDidMount() {
//     // console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(() => {
//           return { canavarlar: users }
//         })
//       )
//   }

//   aramaDeğişikliği = (e) => {
//     const aramaAlanı = e.target.value.toLocaleLowerCase()

//     this.setState(() => {
//       return { aramaAlanı }
//     })
//   }

//   render() {
//     // console.log("App.js'den render")
//     const { canavarlar, aramaAlanı } = this.state
//     const { aramaDeğişikliği } = this
//     const filtrelenmişCanavarlar = canavarlar.filter(
//       //[{name: "Leanne"}, {name: "Emre"}]
//       (canavar) => {
//         return canavar.name.toLocaleLowerCase().includes(aramaAlanı)
//       }
//     )
//     return (
//       <div className='App'>
//         <h1 className='app-title'>CANAVARLAR</h1>
//         <SearchBox
//           onChangeHandler={aramaDeğişikliği}
//           placeholder='canavarları ara'
//           className='monsters-search-box'
//         />
//         <CardList canavarlar={filtrelenmişCanavarlar} />
//       </div>
//     )
//   }
// }

export default App