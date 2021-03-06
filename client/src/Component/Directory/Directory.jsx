import React from 'react';

import MenuItem from '../Menu-item/Menu-item';
import './Directory.style.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'HATS',
                imageurl: 'https://i.ibb.co/cvpntL1/hats.png',
                id:1,
                linkurl:'shop/hats'
            },
            {
                title: 'JACKETS',
                imageurl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id:2,
                linkurl:'shop/jackets'
            },
            {
                title: 'SNEAKERS',
                imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id:3,
                linkurl:'shop/sneakers'
            },
            {
                title: 'WOMENS',
                imageurl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size:'large',
                id:4,
                linkurl:'shop/womens'
            },
            {
                title: 'MENS',
                imageurl: 'https://i.ibb.co/R70vBrQ/mens.png',
                size:'large',
                id:5,
                linkurl:'shop/mens'
            },

            ]
        }
    }

    render()
    {
        return(
            <div className="directory-menu">
                {this.state.sections.map(({ id , ...otherSectionsProps}) => {
                    return <MenuItem key={id} {...otherSectionsProps}/>
                })}
            </div>

        )
    }
}

export default Directory;