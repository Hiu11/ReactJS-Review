import './App.css'

function Header() {
  return (
    <>
      <h1>chao mung react</h1>
      <p>hom nay la chu nhat</p>
    </>
  )
}

function App() {
  return (// return mot phan tu duy nhat dc boc boi fragment
    <>
      <h1>day la the h1</h1>
      <p>hom nay la chu nhat</p>

      {/* cach goi 1 */}
      <Header></Header>
      {/* cach goi 2 */}
      <Header />
    </>
  )
}

export default App
