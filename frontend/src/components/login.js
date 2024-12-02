import React from 'react'

const login = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-4-desktop">
                    <form className='box'>
                        <div className="field">
                            <label className='label'>Email or Username</label>
                            <div className="controls">
                                <input type="text"className='input' placeholder='Username' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Password</label>
                            <div className="controls">
                                <input type="password"className='input' placeholder='********' />
                            </div>
                        </div>
                        <div className="field">
                            <button className='button is-success is-fullwidth'>login</button>
                            </div>
                    </form>
                </div>
            </div>
         
        </div>
      </div>
    </section>
  )
}

export default login