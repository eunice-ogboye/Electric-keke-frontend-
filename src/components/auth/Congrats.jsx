import React from 'react'
import Logo from '../Logo'
import Heading from '../shared/Heading'
import Btn from '../shared/Btn'

const Congrats = ({changeAuthenticationPage}) => {
  return (
    <div className="my-dell:mt-32">
          <Logo className="w-[122px] h-[81px] mx-auto" />
          <Heading
            title={formTitle[type]}
            className="text-center mt-2 my-dell:mt-10"
          />

          <div className="congrats-board">
            <div className="flex-center">
              <img src="/congrats.svg" alt="tick" />
            </div>
          </div>

          <div className="mt-0 my-dell:mt-14 max-w-[343px] mx-auto">
            <Btn
              text="Proceed"
              size="full"
              to="/authentication/login"
              handleClick={() => changeAuthenticationPage("login")}
            />
            <div className="text-sm flex-center gap-1 mt-[14px]">
              <img src="/small-lock.svg" alt="lock" />
              Your info is safely secure
            </div>
          </div>
        </div>
  )
}

export default Congrats
