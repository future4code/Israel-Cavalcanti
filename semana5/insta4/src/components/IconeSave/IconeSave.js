import React from 'react'
import './IconeSave.css'

export function IconeSave(props) {
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</div>
}
