import React from 'react'
import CMS from 'netlify-cms-app'
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { ConocemePageTemplate } from '../templates/ConocemePage'
import { PrivacidadPageTemplate } from '../templates/PrivacidadPage'
import { ReservaSesionPageTemplate } from '../templates/ReservaSesionPage'
import { SesionesPageTemplate } from '../templates/SesionesPage'
import { BlogIndexTemplate } from '../templates/BlogIndex'
import { SinglePostTemplate } from '../templates/SinglePost'
import uploadcare from 'netlify-cms-media-library-uploadcare'

CMS.registerMediaLibrary(uploadcare)

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('conoceme-page', ({ entry }) => (
  <ConocemePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('privacidad-page', ({ entry }) => (
  <PrivacidadPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('reserva-sesion-page', ({ entry }) => (
  <ReservaSesionPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('infoPages', ({ entry }) => (
  <SesionesPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('blog-page', ({ entry }) => (
  <BlogIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('posts', ({ entry }) => (
  <SinglePostTemplate {...entry.toJS().data} />
))
