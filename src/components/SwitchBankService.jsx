import React from 'react'

function SwitchBankService({ estado, setEstado, nombre }) {
    return (
        <div className={'shadow-xl w-64 h-32 flex justify-around items-center border border-gray-200 rounded-2xl mt-5'}>
            <p className='font-bold text-xl'>
                {nombre}
            </p>
            <button onClick={() => setEstado()}
                className={
                    (estado) ? (
                        'w-20 h-20 bg-green-400 rounded-2xl shadow text-white font-bold text-2xl'
                    ) : (
                        'w-20 h-20 bg-red-400 rounded-2xl shadow text-white font-bold text-2xl'
                    )
                }>
                {(estado) ? (
                    'ON'
                ) : (
                    'OFF'
                )}
            </button>
        </div>
    )
}

export default SwitchBankService