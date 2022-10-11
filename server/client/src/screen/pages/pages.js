import React from 'react'

const Pages = () => {
   fetch('https://graph.facebook.com/v15.0/100047168145051')
   .then(res => res.json)
   .then(data => 
    console.log(data))
  
//     function (response) {
//       if (response && !response.error) {
//         /* handle the result */
//       }
//     }
// );

  return (
    <div>
      Pages
    </div>
  )
}

export default Pages
