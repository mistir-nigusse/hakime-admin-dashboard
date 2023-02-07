import React from 'react';
import Header from './components/Header'
import Navigation from './components/NavBar'
const Layout =({children}) =>{
    return(
        <React.Fragment>
            <div className='grid grid-cols-12  '>
                <div className='col-span-2 '>
                <Navigation/>
                </div>
                <div className='col-span-10 grid grid-rows-12'>
                    <div className='row-span-1'> 
                    {/* <BreadCrumbs/> */}
                    </div>
                    <div className='mx-8 row-span-11'>
                     <main>{children}</main>         
                     </div>
                    </div>
           </div>
            
        </React.Fragment>
    )
}

export default Layout;
