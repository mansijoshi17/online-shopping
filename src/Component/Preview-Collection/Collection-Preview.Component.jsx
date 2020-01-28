import React from 'react';
import CollectionItem from '../Collection-item/Collection-item.component';
import './collection-Preview.style.scss';


const CollectionPreview = ({title, items}) => (
        <div className="collection-preview">
           <h1 className="title">{title.toUpperCase()}</h1>
           <div className="preview">
               {items
               .filter((item , indx) => { return indx < 4})
               .map(item =>(
                    <CollectionItem key={item.id} item={item}/>
               ))}
           </div>
        </div>
);

export default CollectionPreview;