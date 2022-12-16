import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as successPopupAction from "../store/Action/SuccessPopup/index";

function SuccessMessagePopup() {

  const dispatch = useDispatch();
  const success = useSelector(state => state.SuccessMessage)

  console.log(success,"line10")

  const handleClose = useCallback(() => {
    dispatch(successPopupAction.hideSuccessPopup())
  }, [dispatch])

  useEffect(() => {
    if (success.show) {
      setTimeout(handleClose, 3000)
    }
  }, [success, handleClose])

  return success.show && <div className="alertPopupWrapper">
    <div className={`absolute right-6 bg-green-300 top-10 px-6 py-4 border border-emerald-700 rounded-sm`}>
      <div className="SuccessAlertBox show">
        <div className="SuccessBody">
          <div className="SuccessIcon"></div>
          <div className="SuccessText">
            <p className="text-green-800">{success.message}</p>
          </div>
        </div>
        <span className="closeIconAlert text-xxs gray" onClick={handleClose}>Close</span>
      </div>
    </div>
  </div>
}

export default SuccessMessagePopup;

// import React from 'react'



// const SuccessPopup = ({ message }) => {
//   return (
//     <div className='absolute right-6 bg-green-300 top-10 px-6 py-4 border border-emerald-700 rounded-sm'>
//       <p className='text-green-800'>{message ? message : "Success !"}</p>
//     </div>
//   )
// }

// export default SuccessPopup

