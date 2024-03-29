import React from 'react'
import { BrowserRouter, Route , Routes} from 'react-router-dom'

import { AppContext } from './context/contextApi'

import  {Header}  from './components/Header'
import  {Feed}  from './components/Feed'
// import  LeftNav  from './components/LeftNav'
// import  LeftNavMenuItem  from './components/LeftNavMenuItem'
import { SearchResult } from './components/SearchResult'
import  {VideoDetails}  from './components/VideoDetails'


// import  SearchResultVideoCard  from './components/SearchResultVideoCard'
// import  Header  from './components/Header'




const App = () => {
  return (
      <AppContext>
        <BrowserRouter>
          <div className="flex flex-col h-full">
            <Header>
              <Routes>
                <Route path='/'exact element={<Feed/>}/>
                <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
                <Route path='/video/:id' element={<VideoDetails/>}/>
              </Routes>
            </Header>
          </div>
        </BrowserRouter>

      </AppContext>  )
}

export default App