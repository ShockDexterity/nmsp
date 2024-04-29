import React from 'react'

export default function AddForm (props) {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>

        <div className="pt-4">
          <button
            className="rounded-lg border-2 border-blue-400 bg-blue-400 px-4 py-2 text-white hover:border-blue-500 hover:bg-blue-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
