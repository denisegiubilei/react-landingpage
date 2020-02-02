import React from 'react'
import { currencyFormat } from '../../Utils'

const Installments = ({ installments }) => {

  const { count, value } = installments || {}
  const hasInstallments = count && value 
    
  return (
    <>
      { hasInstallments
          ? <> 
              Em até
                <span className="highlight"> {count}x </span>
              de 
                <span className="highlight"> {currencyFormat(value)} </span>
              sem juros! 
            </>
          : ''
      }
    </>
  )
}

export default Installments

