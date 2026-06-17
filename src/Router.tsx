import { Routes, Route }    from 'react-router-dom'
import { DefaultLayout }    from './layouts/DefaultLayout'
import { Home }             from './components/Home'
import { Historico }        from './pages/Historico'

export function Router() 
{
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='' element={<Home />} />
                <Route path='/historico' element={<Historico />} />
            </Route>
        </Routes>
    )
}