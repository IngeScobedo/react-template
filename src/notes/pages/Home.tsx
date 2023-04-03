import { HomeLayout } from '../layout'
import { Modal, Navbar } from '../components'
import NotesList from '../components/notesList/NotesList'

const Home = () => {
  return (
    <HomeLayout>
      {/* NAVBAR */}
      <Navbar />

      {/* BUTTON: ADD NOTE */}
      <Modal modalTitle="Agregar Nota" buttonVariant="add-note" />

      {/* NOTES LIST */}
      <NotesList />
    </HomeLayout>
  )
}

export default Home
