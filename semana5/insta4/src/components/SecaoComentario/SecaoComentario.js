import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		input1: ""
	}

	onChangeComentario = (event) => {
		const newComent = event.target.value;
		this.setState({ input1: newComent })
		console.log(newComent)
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.input1}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
			
		</div>
	}
}
