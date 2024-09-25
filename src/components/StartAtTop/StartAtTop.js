import React from 'react'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

const StartAtTop = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top
      }, [pathname]);

  return null;
}

export default StartAtTop