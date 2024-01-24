import React from 'react'

function Card ({username = "IS" , post = "Not Assigned Yet" , text = " NaN" , ImageSrc = "6840478.png"}){
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src ={ImageSrc} alt="React Icon" width="384" height="512" />
            <div className="pt-6 space-y-4">
                <div className='font-bold'>
                    <figcaption>
                    <div>
                        {username}
                    </div>
                    <div>
                        {post}
                    </div>
                    </figcaption>
                </div>
                <blockquote>
                    <p className="text-lg">
                       {text}
                    </p>
                </blockquote>
            </div>
        </figure>
    </div>
  )
}
export default Card
