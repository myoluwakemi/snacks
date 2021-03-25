import React from 'react';
import CommentCard from './commentCard';
import '../review/review.css'




const Review=()=>{
    return(
        <div className='review pad'>
            <div className="comment-one">
                <CommentCard
                comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos eaque aperiam natus ut quasi accusantium soluta possimus! Veritatis pariatur quaerat reprehenderit perspiciatis corrupti eaque ad iure! Eveniet, doloribus nostrum!"
                customerName="Eze"
                />
                <CommentCard
                 comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos eaque aperiam natus ut quasi accusantium soluta possimus! Veritatis pariatur quaerat reprehenderit perspiciatis corrupti eaque ad iure! Eveniet!"
                 customerName="Bims"/>
            </div>
            <div className="comment-two">
                <CommentCard
                 comment="dolor sit amet consectetur adipisicing elit. Iusto quos eaque aperiam natus ut quasi accusantium soluta possimus! Veritatis pariatur quaerat reprehenderit perspiciatis corrupti eaque ad iure! Eveniet, doloribus nostrum!"
                 customerName="DON"/>
            </div>



        </div>
    )
}
export default Review