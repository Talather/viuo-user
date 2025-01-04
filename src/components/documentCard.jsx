// import React from 'react'

// const DocumentCard = ({ document }) => {
//   return (
//     <div className='max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in'>
//       <h3 className='text-xl font-bold text-gray-800 mb-2'>
//         Document Overview
//       </h3>
//       <p className='text-gray-600'>
//         <strong>Uploaded At:</strong>{' '}
//         {new Date(document.uploadedAt).toLocaleString()}
//       </p>
//       <p className='text-gray-600'>
//         <strong>User ID:</strong> {document.userId}
//       </p>
//       <a
//         href={document.documentUrl}
//         target='_blank'
//         rel='noopener noreferrer'
//         className='inline-block mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors'
//       >
//         Download Document
//       </a>
//     </div>
//   )
// }

// export default DocumentCard





import React from 'react'

const DocumentCard = ({ document }) => {
  return (
    <div className='max-w-md mx-auto  border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 animate-fade-in'>
          {/* Thumbnail Section */}
            
      <div className=' h-60 flex items-center justify-center'>
        <PDFThumbnail
                  pdfUrl={document.documentUrl}
                  document={document}
/>


          </div>
          






      {/* Document Details */}
      <div className='p-4 '>
        <h3 className='text-lg font-semibold text-gray-800 truncate'>
          {document.title || 'Untitled Document'}
        </h3>
        <p className='text-sm text-gray-500 mb-1'>
          <strong>Format:</strong> {document.format || 'Unknown'}
        </p>
        <p className='text-sm text-gray-500 mb-1'>
          <strong>Uploaded By:</strong> {document.userId}
        </p>
        <p className='text-sm text-gray-500'>
          <strong>Uploaded At:</strong>{' '}
          {new Date(document.uploadedAt).toLocaleString()}
        </p>
        <a
          href={document.documentUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-4 inline-block px-4 py-2 text-white bg-button-gpt
 rounded hover:bg-button-gpt transition-colors'
        >
          View Document
        </a>
      </div>
    </div>
  )
}

export default DocumentCard


import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import { id_ID } from '@faker-js/faker'
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs'

// Configure the worker
pdfjsLib.GlobalWorkerOptions.workerSrc ='/pdfjs-dist/build/pdf.worker.min.mjs'

    // "/assets/pdfjs/pdf.worker.min.js"
    // pdfjsWorker

const PDFThumbnail = ({ pdfUrl,document }) => {
    const canvasRef = useRef(null)
    const [thumbnailUrl, setThumbnailUrl] = useState('https://cdn.dribbble.com/users/108183/screenshots/5331825/loading_xxi.gif')

   
    useEffect(() => {
        const renderPDF = async () => {
            try {
                document?.documentType!=="application/pdf" ? setThumbnailUrl('https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.width-500.format-webp.webp'):null

                const loadingTask = pdfjsLib.getDocument(pdfUrl)
                console.log("najwa", loadingTask)

                const pdf = await loadingTask.promise
                console.log("stag1", pdf)
                const page = await pdf.getPage(1)

                const canvas = canvasRef.current
                console.log("najwa", pdfjsLib.getDocument(pdfUrl)
                )
                const context = canvas.getContext('2d')
                const viewport = page?.getViewport({ scale: 1 })

                canvas.width = viewport.width
                canvas.height = viewport.height/3

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                }

                await page.render(renderContext).promise
                setThumbnailUrl(canvas.toDataURL('image/png'))
            } catch (error) {
                console.log("error", error)
                console.error('Error rendering PDF:', error)
                // alert('There was an issue loading the PDF. Please check the file.')
            }
        }


        renderPDF()
    }, [pdfUrl])

    // if (!thumbnailUrl) return <div>Loading preview...</div>

 return  (
     <div className=''>
         {/* {!thumbnailUrl
 &&  <div>Loading preview...</div>
 } */}
          <div>
 <img src={thumbnailUrl} alt='PDF Thumbnail' className='h-full' />
    <canvas ref={canvasRef} style={{ display: 'none' }} /> </div>
  </div>

)



}

// export default PDFThumbnail
