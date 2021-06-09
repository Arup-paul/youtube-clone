import React, {useState} from 'react';
import './_categoriesBar.scss'
import { useDispatch } from 'react-redux'
import { getVideosByCategory,getPopularVideos } from '../../redux/actions/video.action'
const keywords = [
    'All',
    'React js',
    'Vue js',
    'Angular js',
    'js',
    'Php',
    'Mysql',
    'Laravel',
    'Game',
    'React Native',
    'Java',
    'Python',
];


const CategoriesBar = () =>  {

    const [activeElement,setActiveElement] = useState('All');

    const dispatch = useDispatch();
    const handleClick = value => {
        setActiveElement(value)
        if(value === 'All'){
            dispatch(getPopularVideos())
        }else {
            dispatch(getVideosByCategory(value))
        }
    }

    return (
       <div className="categoriesBar">
           {
               keywords.map((value,i) => (

                   <span
                       onClick={() => handleClick(value)}
                       key={i}
                       className={activeElement === value ? 'active' : ''}
                   >
                       {value}
                   </span>
               ))
           }
       </div>
    );
}

export default CategoriesBar;