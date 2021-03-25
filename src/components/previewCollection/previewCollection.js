import React from 'react';
import ProductCollection from '../productCollection/productCollection';
import '../previewCollection/previewCollection.css'


const PreviewCollection=({title,items})=>{
    
    return(
        <div className="preview-collection">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.map((item)=>{
                        return <ProductCollection key={item.id} items={item}/>
                    })
                }
            </div>


        </div>
    )
}
export default PreviewCollection