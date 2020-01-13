import React from 'react';
import CollectionItem from '../Collection-item/Collection-item.component';
import './collection-Preview.style.scss';


const CollectionPreview = ({title, items}) => (
        <div className="collection-preview">
           <h1 className="title">{title.toUpperCase()}</h1>
           <div className="preview">
               {items
               .filter((item , indx) => { return indx < 4})
               .map(({id, ...otherItemProp}) => {
                  return  <CollectionItem key={id} {...otherItemProp}/>
               })}
           </div>
        </div>
);

export default CollectionPreview;