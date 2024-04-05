'use client'

import React from 'react'
import Image from 'next/image'

const BooksListComponent = () => {
  const [books, setBooks] = React.useState([
    { id: 1, title: "Libro 1", coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg", saved: false, author: {name: "Author Name"}, synopsis: "This is a synopsis saljkf alksjfasdlñjkf asdlñkfjsadklñf jasdlfk jadslkñfjasdlkñfj adslkñfjasklñfjaslñk fjasdklñf jasdlñf jaslñkfkjasdlñkf jasklñfjsadñlfkjasklñfjasdklñf jsadklñfjadsñklfjaslñkfjasklñfj adsklñ fjadsñklj asñlkk fjñadklsf asdlñfj adslñkfj asklñ jfñlak sjñklaj fñladksj fñlkasdj fañlksj faklñs fjasdklñfjadsñlkkj fadsñlkfj adlsñkfj asñdlf jasljfañsldfj asdñljf u9yg5ri oghdaighiu5ephldkjgfd7gy54 79erqherpq98 yg9qery g4p938ty e4q9pty eqriuhqerioghqeriog 59theq9pt8 yq59pt y 459p8tyq459pgt ypwuir hgkrjghqer9p8g yeq4598t yq5p98 tyqeriuhgerqiugthqeriutgy497q5tykjsahgklajshfasjkfhoequt9843ytkjdsfhaisd hadipugy", showDescription: false, pages: 200},
    { id: 2, title: "Libro 2", coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg", saved: true, author: {name: "Author Name"}, synopsis: "This is a synopsis saljkf alksjfasdlñjkf asdlñkfjsadklñf jasdlfk jadslkñfjasdlkñfj adslkñfjasklñfjaslñk fjasdklñf jasdlñf jaslñkfkjasdlñkf jasklñfjsadñlfkjasklñfjasdklñf jsadklñfjadsñklfjaslñkfjasklñfj adsklñ fjadsñklj asñlkk fjñadklsf asdlñfj adslñkfj asklñ jfñlak sjñklaj fñladksj fñlkasdj fañlksj faklñs fjasdklñfjadsñlkkj fadsñlkfj adlsñkfj asñdlf jasljfañsldfj asdñljf u9yg5ri oghdaighiu5ephldkjgfd7gy54  79erqherpq98 yg9qery g4p938ty e4q9pty eqriuhqerioghqeriog 59theq9pt8 yq59pt y 459p8tyq459pgt ypwuir hgkrjghqer9p8g yeq4598t yq5p98 tyqeriuhgerqiugthqeriutgy497q5tykjsahgklajshfasjkfhoequt9843ytkjdsfhaisd hadipugy", showDescription: false, pages: 200},
    { id: 3, title: "Libro 3", coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg", saved: false, author: {name: "Author Name"}, synopsis: "This is a synopsis saljkf alksjfasdlñjkf asdlñkfjsadklñf jasdlfk jadslkñfjasdlkñfj adslkñfjasklñfjaslñk fjasdklñf jasdlñf jaslñkfkjasdlñkf jasklñfjsadñlfkjasklñfjasdklñf jsadklñfjadsñklfjaslñkfjasklñfj adsklñ fjadsñklj asñlkk fjñadklsf asdlñfj adslñkfj asklñ jfñlak sjñklaj fñladksj fñlkasdj fañlksj faklñs fjasdklñfjadsñlkkj fadsñlkfj adlsñkfj asñdlf jasljfañsldfj asdñljf u9yg5ri oghdaighiu5ephldkjgfd7gy54 79erqherpq98 yg9qery g4p938ty e4q9pty eqriuhqerioghqeriog 59theq9pt8 yq59pt y 459p8tyq459pgt ypwuir hgkrjghqer9p8g yeq4598t yq5p98 tyqeriuhgerqiugthqeriutgy497q5tykjsahgklajshfasjkfhoequt9843ytkjdsfhaisd hadipugy", showDescription: false, pages: 200},
  ]);
 

  const formatSynopsis = (synopsis) => {
    return synopsis.length > 120 ? `${synopsis.substring(0, 120)}...` : synopsis;
  }


  return (
    <div className='mt-10 bg-gray-500 p-5'>
      <h2 className='text-2xl font-bold mb-3'>Lista de libros</h2>
      <div className='grid grid-cols-3 gap-4'>
        {books.map((book, index) => (
           <div
           key={index}
           className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
           <Image
             className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
             src={book.coverUrl}
             alt=""
              width={200}
              height={200}
             />
           <div className="flex flex-col justify-start p-6">
           <div className="flex justify-between items-start">
              <h5 className="text-xl font-medium">
                {book.title}
              </h5>
              <button className="text-red-500 hover:text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
             <p className="text-xs mb-2 text-neutral-500 dark:text-neutral-300">
                {book.author.name}
             </p>
             <div className={`flex items-center justify-center text-center transition-transform duration-500 ease-in-out transform ${book.showDescription ? 'rotate-y-0' : 'rotate-y-180'}`}>
              <p className="text-justify">{formatSynopsis(book.synopsis)}</p>
            </div>

            <button
              className="mt-4 bg-primary-500 text-white font-semibold py-2 px-4 rounded-lg
              hover:bg-primary-600
              focus:outline-none
              focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50
              border border-primary-500
              hover:scale-105 transform transition-transform duration-300"
            >
              Ver detalles
            </button>
           </div>
         </div>
        ))}
      </div>
    </div>
  )
}

export default BooksListComponent
