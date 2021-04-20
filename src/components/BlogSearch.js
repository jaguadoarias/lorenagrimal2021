import React from 'react'
import { navigate } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'
import './Form.css'

export default ({ pageCount }) => {
  return (
    <Location>
      {({ location }) => {
        let search = qs.parse(location.search.replace('?', ''))

        return (
          <input
            type="text"
            value={search.s || ''}
            className="Form--Input Form--InputText"
            placeholder="Buscar post..."
            onChange={e => {
              let search = {}
              search.s = e.target.value
              search = qs.stringify(search)

              const url = location.href
                .replace(location.origin, '')
                .replace(location.search, '')

              navigate(`${url}?${search}`)
            }}
          />
        )
      }}
    </Location>
  )
}
