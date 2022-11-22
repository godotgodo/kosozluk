import Navbar from './components/Navbar/Navbar';
import Solframe from './components/Solframe/Solframe';
import Sidebar from './components/Sidebar/Sidebar';
import data from './data.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Content/Home';
import Tags from './components/Content/Tags/Tags';
import Duyurular from './components/Content/Duyurular/Duyurular';
import Tag from './components/Content/Tags/Tag';
import TagsLayout from './components/Content/Tags/TagsLayout';
import DuyurularLayout from './components/Content/Duyurular/DuyurularLayout';
import Duyuru from './components/Content/Duyurular/Duyuru';
import İsilanlariLayout from './components/Content/İsilanlari/İsilanlariLayout';
import İsilanlari from './components/Content/İsilanlari/İsilanlari';
import İsilani from './components/Content/İsilanlari/İsilani';
import BaslikPage from './components/Content/Baslikpage';
import EntryPage from './components/Content/Entrypage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='w-full flex'>
          <Solframe bugun={data.bugun} />
          <Routes>
            <Route path='/' element={<Home gundem={data.gundem} tags={data.tags} popentries={data.popularentries} />}></Route>

            {/* yiyor ama tags da çıkıyor */}
            <Route path='tags' element={<TagsLayout />} >
              <Route index element={<Tags />} />
              <Route path=':tagid' element={<Tag />} />
            </Route>
            <Route path='duyurular' element={<DuyurularLayout />} >
              <Route index element={<Duyurular duyurular={data.duyurular} />} />
              <Route path=':duyuruid' element={<Duyuru />} />
            </Route>
            <Route path='isilanlari' element={<İsilanlariLayout />} >
              <Route index element={<İsilanlari isilanlari={data.isilani} />} />
              <Route path=':isilaniid' element={<İsilani />} />
            </Route>
            <Route path='baslik/:baslikid' element={<BaslikPage />} />
            <Route path='entry/:entryid' element={<EntryPage />} />


            {/* yiyor, artık gerek kalmadı, parent componenti layout componenti yaparak childlarda index belirleyerek ve outlet belirleyerek sorun halledildi*/}
            {/* <Route path='tags' element={<Tags />} />
            <Route path='tags/:tagid' element={<Tag/>}/> */}
          </Routes>

          <Sidebar duyurular={data.duyurular} isilani={data.isilani} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
