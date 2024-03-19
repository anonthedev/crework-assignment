import Footer from './components/Footer'
import Nav from './components/Nav'
import QuestionsPage from './components/QuestionsPage'

function App() {
  return (
    <main className='w-screen flex flex-col gap-5 h-screen'>
      <Nav />
      <div className='w-full flex items-center justify-center flex-grow mt-5 md:mt-0'>
        <QuestionsPage />
      </div>
      <Footer/>
    </main>
  )
}

export default App
