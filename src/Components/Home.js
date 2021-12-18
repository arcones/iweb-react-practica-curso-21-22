import { useContext } from 'react';
import { LangContext } from '../App';

import '../css/styles.css';

const Home = () => {

    const contextValue = useContext(LangContext);

    return (
        <div className="container">
            <h2>{contextValue.dictionary.home_title}</h2>
        </div>
    )
}

export default Home
