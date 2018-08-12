import React from 'react';

export default function Detail(props) {
  return (
    `Detail: ${props.location.state.forecast.deg}`
  )
}