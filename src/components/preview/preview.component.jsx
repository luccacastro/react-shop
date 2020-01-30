import React, { Component } from 'react';

import CollectionItem from '../collection-item/collection-item.component'


import './preview.styles.scss'

const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div class="preview">
        {items
            .filter((item, idx) => idx < 4)
            .map(({id, ...itemProps}) =>(
                <CollectionItem key={id} {...itemProps}/>
            ))}
        </div>
    </div>
)

export default PreviewCollection