// import { alertConstants } from '../_constants';

// export const alertActions = {
//     success,
//     error,
//     clear
// };

// function success(message) {
//     return { type: alertConstants.SUCCESS, message };
// }

// function error(message) {
//     return { type: alertConstants.ERROR, message };
// }

// function clear() {
//     return { type: alertConstants.CLEAR };
// }


import React from 'react'



const SuccessPopup = ({message}) => {
  return (
    <div className='absolute right-6 bg-green-300 top-10 px-6 py-4 border border-emerald-700 rounded-sm'>
        <p className='text-green-800'>{message ? message : "Success !"}</p>
    </div>
  )
}

export default SuccessPopup

