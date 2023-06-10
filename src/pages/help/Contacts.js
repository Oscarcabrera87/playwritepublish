import React from 'react'

export default function Contacts() {
  return (
    <div className='contact'>
        <h3>Contact Us</h3>
        <form>
            <label>
                <span>Your email:</span>
                <input type='email' name='email' required />
            </label>
            <label>
                <span>Your message:</span>
                <textarea type='message' name='message' ></textarea>
            </label>
            <button>Submit</button>
        </form>

    </div>
  )
}
